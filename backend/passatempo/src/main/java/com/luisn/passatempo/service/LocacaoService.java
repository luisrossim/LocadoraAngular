package com.luisn.passatempo.service;

import com.luisn.passatempo.domain.Cliente;
import com.luisn.passatempo.domain.Item;
import com.luisn.passatempo.domain.Locacao;
import com.luisn.passatempo.dto.LocacaoDTO;
import com.luisn.passatempo.exception.FailedException;
import com.luisn.passatempo.exception.RecordNotFoundException;
import com.luisn.passatempo.mapper.LocacaoMapper;
import com.luisn.passatempo.repository.ClienteRepository;
import com.luisn.passatempo.repository.ItemRepository;
import com.luisn.passatempo.repository.LocacaoRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.time.temporal.Temporal;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;


@Validated
@RequiredArgsConstructor
@Service
public class LocacaoService {

    private final LocacaoRepository locacaoRepository;
    private final ClienteRepository clienteRepository;
    private final ItemRepository itemRepository;
    private final LocacaoMapper locacaoMapper;


    public List<LocacaoDTO> list() {
        return locacaoRepository.findAll().stream()
                .map(locacaoMapper::toDTO)
                .collect(Collectors.toList());
    }


    public LocacaoDTO pesquisar(@PathVariable Long id) {
        return locacaoRepository.findById(id).map(locacaoMapper::toDTO)
                .orElseThrow(() -> new RecordNotFoundException(id));
    }


    public LocacaoDTO create(@Valid LocacaoDTO locacaoDTO) {
        Locacao locacao = locacaoMapper.toEntity(locacaoDTO);

        Item item = itemRepository.findById(locacao.getItem().getId())
                .orElseThrow(() -> new RecordNotFoundException(locacao.getItem().getId()));

        Cliente cliente = clienteRepository.findById(locacao.getCliente().getId())
                .orElseThrow(() -> new RecordNotFoundException(locacao.getCliente().getId()));

        if(clienteEmDebito(cliente)) {
            throw new FailedException("Não foi possível realizar a locação pois o cliente está em débito");
        } else if (itemAlocado(item)) {
            throw new FailedException("Não foi possível realizar a locação pois o item já está alocado");
        }

        locacao.setDt_locacao(new Date());
        locacao.setValor(item.getTitulo().getClasse().getValue());
        locacao.setDt_devolucaoPrevista(handleAddTime(item.getTitulo().getClasse().getDate()));

        return locacaoMapper.toDTO(locacaoRepository.save(locacao));
    }


    public LocacaoDTO update(Long id, @Valid LocacaoDTO locacao) {
        return locacaoRepository.findById(id)
                .map(registrobusca -> {
                    registrobusca = locacaoMapper.toEntity(locacao);
                    return locacaoMapper.toDTO(locacaoRepository.save(registrobusca));
                }).orElseThrow(() -> new RecordNotFoundException(id));
    }


    public LocacaoDTO devolucao(Long id, @Valid LocacaoDTO locacao) {
        return locacaoRepository.findById(id)
                .map(registrobusca -> {
                    registrobusca.setDtDevolucaoEfetiva(new Date());
                    registrobusca.setMulta(checkMulta(registrobusca));
                    registrobusca.setValor(registrobusca.getValor() + registrobusca.getMulta());
                    return locacaoMapper.toDTO(locacaoRepository.save(registrobusca));
                }).orElseThrow(() -> new RecordNotFoundException(id));
    }


    public void cancelar(@PathVariable Long id){
        Locacao locacao = locacaoRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(id));

        if(locacao.getDtDevolucaoEfetiva() != null) {
            throw new FailedException("Não foi possível cancelar a locação pois a mesma possui um pagamento");
        }

        locacaoRepository.delete(locacao);
    }


    public boolean clienteEmDebito (Cliente cliente) {
        for(Locacao locacao : cliente.getLocacoes()) {
            if (locacao.getDtDevolucaoEfetiva() == null) {
                return true;
            }
        }
        return false;
    }


    public boolean itemAlocado(Item item) {
        Locacao checkAlocado = locacaoRepository.findByItemAndDtDevolucaoEfetivaIsNull(item);
        if(checkAlocado != null){
            return true;
        } else {
            return false;
        }
    }


    public float checkMulta(Locacao locacao) {
        if(locacao.getDt_devolucaoPrevista().before(new Date())) {
            long diasAtraso = calcularAtraso(locacao);
            return diasAtraso * 2;
        }
        return 0;
    }


    public Date handleAddTime(int dias) {
        Calendar dataPrevista = Calendar.getInstance();
        dataPrevista.setTime(new Date());
        dataPrevista.add(Calendar.DAY_OF_MONTH, dias);
        return dataPrevista.getTime();
    }


    public long calcularAtraso(Locacao locacao) {
        long dias = locacao.getDt_devolucaoPrevista().getTime() - locacao.getDtDevolucaoEfetiva().getTime();
        TimeUnit time = TimeUnit.DAYS;
        return Math.abs(time.convert(dias, TimeUnit.MILLISECONDS));
    }

}
