package com.luisn.passatempo.service;

import com.luisn.passatempo.domain.Ator;
import com.luisn.passatempo.repository.AtorRepository;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Validated
@Service
public class AtorService {

    private final AtorRepository atorRepository;

    public AtorService (AtorRepository atorRepository) {
        this.atorRepository = atorRepository;
    }

    public List<Ator> list() {
        return atorRepository.findAll();
    }

    public Optional<Ator> pesquisar(@PathVariable long id) {
        return atorRepository.findById(id);
    }

    public Ator create(@Valid Ator ator) {
        return atorRepository.save(ator);
    }

    public Optional<Ator> update(long id, @Valid Ator ator) {
        return atorRepository.findById(id)
            .map(registrobusca -> {
                registrobusca.setName(ator.getName());
                return atorRepository.save(ator);
            });
    }

    public boolean delete(@PathVariable long id){
        return atorRepository.findById(id)
                .map( registrobusca -> {
                    atorRepository.deleteById(id);
                    return true;
                })
                .orElse(false);
    }

}
