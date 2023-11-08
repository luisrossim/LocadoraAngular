package com.luisn.passatempo.service;

import com.luisn.passatempo.dto.ClasseDTO;
import com.luisn.passatempo.dto.mapper.ClasseMapper;
import com.luisn.passatempo.exception.RecordNotFoundException;
import com.luisn.passatempo.repository.ClasseRepository;
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
public class ClasseService {

    private final ClasseRepository classeRepository;
    private final ClasseMapper classeMapper;

    public List<ClasseDTO> list() {
        return classeRepository.findAll().stream()
                .map(classeMapper::toDTO)
                .collect(Collectors.toList());
    }

    public ClasseDTO pesquisar(@PathVariable Long id) {
        return classeRepository.findById(id).map(classeMapper::toDTO)
                .orElseThrow(() -> new RecordNotFoundException(id));
    }

    public ClasseDTO create(@Valid ClasseDTO classe) {
        return classeMapper.toDTO(classeRepository.save(classeMapper.toEntity(classe)));
    }

    public ClasseDTO update(Long id, @Valid ClasseDTO classe) {
        return classeRepository.findById(id)
            .map(registrobusca -> {
                registrobusca.setName(classe.name());
                registrobusca.setValue(classe.value());
                registrobusca.setDate(classe.date());
                return classeMapper.toDTO(classeRepository.save(registrobusca));
            }).orElseThrow(() -> new RecordNotFoundException(id));
    }

    public void delete(@PathVariable Long id){
        classeRepository.delete(classeRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(id)));

    }

}
