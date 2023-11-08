package com.luisn.passatempo.service;

import com.luisn.passatempo.domain.Classe;
import com.luisn.passatempo.exception.RecordNotFoundException;
import com.luisn.passatempo.repository.ClasseRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.List;

@Validated
@RequiredArgsConstructor
@Service
public class ClasseService {

    private final ClasseRepository classeRepository;

    public List<Classe> list() {
        return classeRepository.findAll();
    }

    public Classe pesquisar(@PathVariable Long id) {
        return classeRepository.findById(id).orElseThrow(() -> new RecordNotFoundException(id));
    }

    public Classe create(@Valid Classe classe) {
        return classeRepository.save(classe);
    }

    public Classe update(Long id, @Valid Classe classe) {
        return classeRepository.findById(id)
            .map(registrobusca -> {
                registrobusca.setName(classe.getName());
                registrobusca.setValue(classe.getValue());
                registrobusca.setDate(classe.getDate());
                return classeRepository.save(registrobusca);
            }).orElseThrow(() -> new RecordNotFoundException(id));
    }

    public void delete(@PathVariable Long id){
        classeRepository.delete(classeRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(id)));

    }

}
