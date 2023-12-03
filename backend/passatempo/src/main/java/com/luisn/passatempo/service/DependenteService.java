package com.luisn.passatempo.service;


import com.luisn.passatempo.dto.DependenteDTO;
import com.luisn.passatempo.exception.RecordNotFoundException;
import com.luisn.passatempo.mapper.DependenteMapper;
import com.luisn.passatempo.repository.DependenteRepository;
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
public class DependenteService {

    private final DependenteRepository dependenteRepository;
    private final DependenteMapper dependenteMapper;


    public List<DependenteDTO> list() {
        return dependenteRepository.findAll().stream()
                .map(dependenteMapper::toDTO)
                .collect(Collectors.toList());
    }


    public DependenteDTO pesquisar(@PathVariable Long id) {
        return dependenteRepository.findById(id).map(dependenteMapper::toDTO)
                .orElseThrow(() -> new RecordNotFoundException(id));
    }


    public DependenteDTO create(@Valid DependenteDTO dependente) {
        return dependenteMapper.toDTO(dependenteRepository.save(dependenteMapper.toEntity(dependente)));
    }


    public DependenteDTO update(Long id, @Valid DependenteDTO dependente) {
        return dependenteRepository.findById(id)
                .map(registrobusca -> {
                    registrobusca = dependenteMapper.toEntity(dependente);
                    return dependenteMapper.toDTO(dependenteRepository.save(registrobusca));
                }).orElseThrow(() -> new RecordNotFoundException(id));
    }


    public void delete(@PathVariable Long id){
        dependenteRepository.delete(dependenteRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(id)));
    }
}
