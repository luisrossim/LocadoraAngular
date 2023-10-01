package com.luisn.passatempo.controller;

import com.luisn.passatempo.domain.Diretor;
import com.luisn.passatempo.service.DiretorService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import io.swagger.v3.oas.annotations.Operation;

import java.util.List;

@Validated
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/diretor")
public class DiretorController {

    private final DiretorService diretorService;

    @GetMapping
    @Operation(description = "Listar os Diretores")
    public @ResponseBody List<Diretor> list() {
        return diretorService.list();
    }

    @GetMapping("/{id}")
    @Operation(description = "Pesquisar um Diretor pelo ID")
    public ResponseEntity<Diretor> pesquisar(@PathVariable Long id) {
        return diretorService.pesquisar(id)
            .map(registro -> ResponseEntity.ok().body(registro))
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    @Operation(description = "Create de Diretores")
    public Diretor create(@RequestBody @Valid Diretor diretor) {
        return diretorService.create(diretor);
    }

    @PutMapping("/{id}")
    @Operation(description = "Update de Diretores")
    public ResponseEntity<Diretor> update(@PathVariable Long id, @RequestBody @Valid Diretor diretor) {
        return diretorService.update(id, diretor)
                .map(registrobusca -> ResponseEntity.ok().body(registrobusca))
                .orElse(ResponseEntity.notFound().build());
    }


    @DeleteMapping("/{id}")
    @Operation(description = "Hard Delete de Diretores")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        if (diretorService.delete(id)) {
            return ResponseEntity.noContent().<Void>build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
