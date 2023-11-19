package com.luisn.passatempo.service;

import com.luisn.passatempo.domain.Titulo;
import com.luisn.passatempo.dto.TituloDTO;
import com.luisn.passatempo.mapper.TituloMapper;
import com.luisn.passatempo.exception.RecordNotFoundException;
import com.luisn.passatempo.repository.TituloRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.stream.Collectors;

@Validated
@RequiredArgsConstructor
@Service
public class TituloService {

    private final TituloRepository tituloRepository;
    private final TituloMapper tituloMapper;


    public List<TituloDTO> list() {
        return tituloRepository.findAll().stream()
                .map(tituloMapper::toDTO)
                .collect(Collectors.toList());
    }

    public TituloDTO pesquisar(@PathVariable Long id) {
        return tituloRepository.findById(id).map(tituloMapper::toDTO)
                .orElseThrow(() -> new RecordNotFoundException(id));
    }

    public TituloDTO create(@Valid TituloDTO titulo) {
        return tituloMapper.toDTO(tituloRepository.save(tituloMapper.toEntity(titulo)));
    }

    public TituloDTO update(Long id, @Valid TituloDTO tituloDTO) {
        return tituloRepository.findById(id)
                .map(registrobusca -> {
                    Titulo titulo = tituloMapper.toEntity(tituloDTO);
                    registrobusca.setName(tituloDTO.name());
                    registrobusca.setAno(tituloDTO.ano());
                    registrobusca.setSinopse(tituloDTO.sinopse());
                    registrobusca.setCategoria(tituloDTO.categoria());
                    registrobusca.getListaAtores().clear();
                    titulo.getListaAtores().forEach(registrobusca.getListaAtores()::add);
                    return tituloMapper.toDTO(tituloRepository.save(registrobusca));
                }).orElseThrow(() -> new RecordNotFoundException(id));
    }

    public void delete(@PathVariable Long id){
        tituloRepository.delete(tituloRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(id)));
    }
}
