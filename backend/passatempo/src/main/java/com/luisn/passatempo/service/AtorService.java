package com.luisn.passatempo.service;

import com.luisn.passatempo.domain.Ator;
import com.luisn.passatempo.exception.RecordNotFoundException;
import com.luisn.passatempo.repository.AtorRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.List;

@Validated
@RequiredArgsConstructor
@Service
public class AtorService {

    private final AtorRepository atorRepository;

    public List<Ator> list() {
        return atorRepository.findAll();
    }

    public Ator pesquisar(@PathVariable Long id) {
        return atorRepository.findById(id).orElseThrow(() -> new RecordNotFoundException(id));
    }

    public Ator create(@Valid Ator ator) {
        return atorRepository.save(ator);
    }

    public Ator update(Long id, @Valid Ator ator) {
        return atorRepository.findById(id)
            .map(registrobusca -> {
                registrobusca.setName(ator.getName());
                return atorRepository.save(registrobusca);
            }).orElseThrow(() -> new RecordNotFoundException(id));
    }

    public void delete(@PathVariable Long id){
        atorRepository.delete(atorRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(id)));
    }

}
