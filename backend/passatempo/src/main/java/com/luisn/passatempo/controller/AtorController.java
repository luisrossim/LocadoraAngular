package com.luisn.passatempo.controller;

import com.luisn.passatempo.domain.Ator;
import com.luisn.passatempo.service.AtorService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
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
@RequestMapping("/api/ator")
public class AtorController {

    private final AtorService atorService;

    @GetMapping
    @Operation(description = "Listar os Atores")
    public @ResponseBody List<Ator> list() {
        return atorService.list();
    }

    @GetMapping("/{id}")
    @Operation(description = "Pesquisar um Ator pelo ID")
    public ResponseEntity<Ator> pesquisar(@PathVariable long id) {
        return atorService.pesquisar(id)
            .map(registro -> ResponseEntity.ok().body(registro))
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    @Operation(description = "Create de Atores")
    public Ator create(@RequestBody @Valid Ator ator) {
        return atorService.create(ator);
    }

    @PutMapping("/{id}")
    @Operation(description = "Update de Atores")
    public ResponseEntity<Ator> update(@PathVariable long id, @RequestBody @Valid Ator ator) {

        return atorService.update(id, ator)
            .map(registrobusca -> ResponseEntity.ok().body(registrobusca))
            .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    @Operation(description = "Hard Delete de Atores")
    public ResponseEntity<Void> delete(@PathVariable long id){
        if (atorService.delete(id)) {
            return ResponseEntity.noContent().<Void>build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
