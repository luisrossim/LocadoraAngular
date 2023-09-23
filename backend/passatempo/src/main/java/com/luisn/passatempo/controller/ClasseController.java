package com.luisn.passatempo.controller;

import com.luisn.passatempo.domain.Classe;
import com.luisn.passatempo.repository.ClasseRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import io.swagger.v3.oas.annotations.Operation;

import java.util.List;

@RestController
@RequestMapping("/api/classe")
@AllArgsConstructor
public class ClasseController {

    private final ClasseRepository classeRepository;

    @GetMapping
    @Operation(description = "Listar as Classes")
    public List<Classe> list() {
        return classeRepository.findAll();
    }

    @GetMapping("/{id}")
    @Operation(description = "Pesquisar uma Classe pelo ID")
    public ResponseEntity<Classe> pesquisar(@PathVariable long id) {
        return classeRepository.findById(id)
            .map(registro -> ResponseEntity.ok().body(registro))
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @Operation(description = "Create de Classes")
    public ResponseEntity<Classe> create(@RequestBody Classe registroclasse) {
        return ResponseEntity.status(HttpStatus.CREATED).body(classeRepository.save(registroclasse));
    }

    @PutMapping("/{id}")
    @Operation(description = "Update de Classes")
    public ResponseEntity<Classe> update(@PathVariable long id, @RequestBody Classe registroclasse) {

        return classeRepository.findById(id)
            .map(registrobusca -> {
                registrobusca.setName(registroclasse.getName());
                registrobusca.setValue(registroclasse.getValue());
                registrobusca.setDate(registroclasse.getDate());
                Classe atualizado = classeRepository.save(registrobusca);
                return ResponseEntity.ok().body(atualizado);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    @Operation(description = "Hard Delete de Classes")
    public ResponseEntity<Void> delete(@PathVariable long id){
        return classeRepository.findById(id)
            .map( registrobusca -> {
                classeRepository.deleteById(id);
                return ResponseEntity.noContent().<Void>build();
            })
            .orElse(ResponseEntity.notFound().build());
    }
}
