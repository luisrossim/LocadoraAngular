package com.luisn.passatempo.controller;

import com.luisn.passatempo.domain.Classe;
import com.luisn.passatempo.service.ClasseService;
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
@RequestMapping("/api/classe")
@RequiredArgsConstructor
public class ClasseController {

    private final ClasseService classeService;

    @GetMapping
    @Operation(description = "Listar as Classes")
    public @ResponseBody List<Classe> list() {
        return classeService.list();
    }

    @GetMapping("/{id}")
    @Operation(description = "Pesquisar uma Classe pelo ID")
    public ResponseEntity<Classe> pesquisar(@PathVariable Long id) {
        return classeService.pesquisar(id)
            .map(registro -> ResponseEntity.ok().body(registro))
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    @Operation(description = "Create de Classes")
    public Classe create(@RequestBody @Valid Classe classe) {
        return classeService.create(classe);
    }

    @PutMapping("/{id}")
    @Operation(description = "Update de Classes")
    public ResponseEntity<Classe> update(@PathVariable Long id, @RequestBody @Valid Classe classe) {
        return classeService.update(id, classe)
                .map(registrobusca -> ResponseEntity.ok().body(registrobusca))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    @Operation(description = "Hard Delete de Classes")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        if (classeService.delete(id)) {
            return ResponseEntity.noContent().<Void>build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
