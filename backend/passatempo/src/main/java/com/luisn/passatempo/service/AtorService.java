package com.luisn.passatempo.service;

import com.luisn.passatempo.dto.AtorDTO;
import com.luisn.passatempo.mapper.AtorMapper;
import com.luisn.passatempo.exception.RecordNotFoundException;
import com.luisn.passatempo.repository.AtorRepository;
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
public class AtorService {

    private final AtorRepository atorRepository;
    private final AtorMapper atorMapper;

    public List<AtorDTO> list() {
        return atorRepository.findAll().stream()
                .map(atorMapper::toDTO)
                .collect(Collectors.toList());
    }

    public AtorDTO pesquisar(@PathVariable Long id) {
        return atorRepository.findById(id).map(atorMapper::toDTO)
                .orElseThrow(() -> new RecordNotFoundException(id));
    }

    public AtorDTO create(@Valid AtorDTO ator) {
        return atorMapper.toDTO(atorRepository.save(atorMapper.toEntity(ator)));
    }

    public AtorDTO update(Long id, @Valid AtorDTO ator) {
        return atorRepository.findById(id)
            .map(registrobusca -> {
                registrobusca.setName(ator.name());
                return atorMapper.toDTO(atorRepository.save(registrobusca));
            }).orElseThrow(() -> new RecordNotFoundException(id));
    }

    public void delete(@PathVariable Long id){
        atorRepository.delete(atorRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(id)));
    }

}
