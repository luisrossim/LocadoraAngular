package com.luisn.passatempo.controller;

import com.luisn.passatempo.domain.Ator;
import com.luisn.passatempo.repository.AtorRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import io.swagger.v3.oas.annotations.Operation;

import java.util.List;


@RestController
@RequestMapping("/api/ator")
@AllArgsConstructor
public class AtorController {

    private final AtorRepository atorRepository;

    @GetMapping
    @Operation(description = "Listar os Atores")
    public List<Ator> list() {
        return atorRepository.findAll();
    }

    @GetMapping("/{id}")
    @Operation(description = "Pesquisar um Ator pelo ID")
    public ResponseEntity<Ator> pesquisar(@PathVariable long id) {
        return atorRepository.findById(id)
                .map(registro -> ResponseEntity.ok().body(registro))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @Operation(description = "Create de Atores")
    public ResponseEntity<Ator> create(@RequestBody Ator registroator) {
        return ResponseEntity.status(HttpStatus.CREATED).body(atorRepository.save(registroator));
    }

    @PutMapping("/{id}")
    @Operation(description = "Update de Atores")
    public ResponseEntity<Ator> update(@PathVariable long id, @RequestBody Ator registroator) {

        return atorRepository.findById(id)
                .map(registrobusca -> {
                    registrobusca.setName(registroator.getName());
                    Ator atualizado = atorRepository.save(registrobusca);
                    return ResponseEntity.ok().body(atualizado);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    @Operation(description = "Hard Delete de Atores")
    public ResponseEntity<Void> delete(@PathVariable long id){
        return atorRepository.findById(id)
                .map( registrobusca -> {
                    atorRepository.deleteById(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

}
