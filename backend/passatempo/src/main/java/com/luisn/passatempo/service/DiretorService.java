package com.luisn.passatempo.service;

import com.luisn.passatempo.domain.Diretor;
import com.luisn.passatempo.exception.RecordNotFoundException;
import com.luisn.passatempo.repository.DiretorRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.List;

@Validated
@RequiredArgsConstructor
@Service
public class DiretorService {

    private final DiretorRepository diretorRepository;

    public List<Diretor> list() {
        return diretorRepository.findAll();
    }

    public Diretor pesquisar(@PathVariable Long id) {
        return diretorRepository.findById(id).orElseThrow(() -> new RecordNotFoundException(id));
    }

    public Diretor create(@Valid Diretor diretor) {
        return diretorRepository.save(diretor);
    }

    public Diretor update(Long id, @Valid Diretor diretor) {
        return diretorRepository.findById(id)
            .map(registrobusca -> {
                registrobusca.setName(diretor.getName());
                return diretorRepository.save(registrobusca);
            }).orElseThrow(() -> new RecordNotFoundException(id));
    }

    public void delete(@PathVariable Long id){
        diretorRepository.delete(diretorRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(id)));
    }
}
