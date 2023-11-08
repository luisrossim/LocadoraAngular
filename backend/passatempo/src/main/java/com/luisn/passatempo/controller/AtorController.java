package com.luisn.passatempo.controller;

import com.luisn.passatempo.domain.Ator;
import com.luisn.passatempo.service.AtorService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import io.swagger.v3.oas.annotations.Operation;

import java.util.List;


@Validated
@RestController
@RequestMapping("/api/ator")
@RequiredArgsConstructor
@Tag(name = "AtorController", description = "Fornece o CRUD para gerenciamento de atores")
public class AtorController {

    private final AtorService atorService;

    @GetMapping
    @Operation(description = "Listar os Atores")
    public @ResponseBody List<Ator> list() {
        return atorService.list();
    }


    @GetMapping("/{id}")
    @Operation(description = "Pesquisar um Ator pelo ID")
    public Ator pesquisar(@PathVariable Long id) {
        return atorService.pesquisar(id);
    }


    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    @Operation(description = "Create de Atores")
    public Ator create(@RequestBody @Valid Ator ator) {
        return atorService.create(ator);
    }


    @PutMapping("/{id}")
    @Operation(description = "Update de Atores")
    public Ator update(@PathVariable Long id, @RequestBody @Valid Ator ator) {
        return atorService.update(id, ator);
    }


    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    @Operation(description = "Hard Delete de Atores")
    public void delete(@PathVariable Long id){
        atorService.delete(id);
    }

}
