package com.luisn.passatempo.service;

import com.luisn.passatempo.domain.Dependente;
import com.luisn.passatempo.dto.SocioDTO;
import com.luisn.passatempo.exception.RecordNotFoundException;
import com.luisn.passatempo.mapper.SocioMapper;
import com.luisn.passatempo.repository.SocioRepository;
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
public class SocioService {

    private final SocioRepository socioRepository;
    private final SocioMapper socioMapper;

    public List<SocioDTO> list() {
        return socioRepository.findAll().stream()
                .map(socioMapper::toDTO)
                .collect(Collectors.toList());
    }


    public SocioDTO pesquisar(@PathVariable Long id) {
        return socioRepository.findById(id).map(socioMapper::toDTO)
                .orElseThrow(() -> new RecordNotFoundException(id));
    }


    public SocioDTO create(@Valid SocioDTO socio) {
        return socioMapper.toDTO(socioRepository.save(socioMapper.toEntity(socio)));
    }


    public SocioDTO update(Long id, @Valid SocioDTO socio) {
        return socioRepository.findById(id)
                .map(registrobusca -> {
                    registrobusca = socioMapper.toEntity(socio);
                    return socioMapper.toDTO(socioRepository.save(registrobusca));
                }).orElseThrow(() -> new RecordNotFoundException(id));
    }


    public void desativar(@PathVariable Long id){
        socioRepository.findById(id)
                .map(registro -> {
                    registro.setAtivo(false);
                    for(Dependente dependente : registro.getDependentes()) {
                        dependente.setAtivo(false); }
                    return socioRepository.save(registro);
                }).orElseThrow(() -> new RecordNotFoundException(id));
    }

}
