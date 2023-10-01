package com.luisn.passatempo.service;

import com.luisn.passatempo.domain.Diretor;
import com.luisn.passatempo.repository.DiretorRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Validated
@RequiredArgsConstructor
@Service
public class DiretorService {

    private final DiretorRepository diretorRepository;

    public List<Diretor> list() {
        return diretorRepository.findAll();
    }

    public Optional<Diretor> pesquisar(@PathVariable Long id) {
        return diretorRepository.findById(id);
    }

    public Diretor create(@Valid Diretor diretor) {
        return diretorRepository.save(diretor);
    }

    public Optional<Diretor> update(Long id, @Valid Diretor diretor) {
        return diretorRepository.findById(id)
            .map(registrobusca -> {
                registrobusca.setName(diretor.getName());
                return diretorRepository.save(diretor);
            });
    }

    public boolean delete(@PathVariable Long id){
        return diretorRepository.findById(id)
            .map( registrobusca -> {
                diretorRepository.deleteById(id);
                return true;
            })
            .orElse(false);
    }
}
