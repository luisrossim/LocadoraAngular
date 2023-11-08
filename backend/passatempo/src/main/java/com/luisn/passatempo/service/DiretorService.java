package com.luisn.passatempo.service;

import com.luisn.passatempo.dto.DiretorDTO;
import com.luisn.passatempo.dto.mapper.DiretorMapper;
import com.luisn.passatempo.exception.RecordNotFoundException;
import com.luisn.passatempo.repository.DiretorRepository;
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
public class DiretorService {

    private final DiretorRepository diretorRepository;
    private final DiretorMapper diretorMapper;

    public List<DiretorDTO> list() {
        return diretorRepository.findAll().stream()
                .map(diretorMapper::toDTO)
                .collect(Collectors.toList());
    }

    public DiretorDTO pesquisar(@PathVariable Long id) {
        return diretorRepository.findById(id).map(diretorMapper::toDTO)
                .orElseThrow(() -> new RecordNotFoundException(id));
    }

    public DiretorDTO create(@Valid DiretorDTO diretor) {
        return diretorMapper.toDTO(diretorRepository.save(diretorMapper.toEntity(diretor)));
    }

    public DiretorDTO update(Long id, @Valid DiretorDTO diretor) {
        return diretorRepository.findById(id)
            .map(registrobusca -> {
                registrobusca.setName(diretor.name());
                return diretorMapper.toDTO(diretorRepository.save(registrobusca));
            }).orElseThrow(() -> new RecordNotFoundException(id));
    }

    public void delete(@PathVariable Long id){
        diretorRepository.delete(diretorRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(id)));
    }
}
