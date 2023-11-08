package com.luisn.passatempo.controller;

import com.luisn.passatempo.domain.Diretor;
import com.luisn.passatempo.service.DiretorService;
import jakarta.validation.Valid;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import io.swagger.v3.oas.annotations.Operation;

import java.util.List;

@Validated
@RestController
@RequestMapping("/api/diretor")
@RequiredArgsConstructor
@Tag(name = "DiretorController", description = "Fornece o CRUD para gerenciamento de diretores")
public class DiretorController {

    private final DiretorService diretorService;

    @GetMapping
    @Operation(description = "Listar os Diretores")
    public @ResponseBody List<Diretor> list() {
        return diretorService.list();
    }

    @GetMapping("/{id}")
    @Operation(description = "Pesquisar um Diretor pelo ID")
    public Diretor pesquisar(@PathVariable Long id) {
        return diretorService.pesquisar(id);
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    @Operation(description = "Create de Diretores")
    public Diretor create(@RequestBody @Valid Diretor diretor) {
        return diretorService.create(diretor);
    }

    @PutMapping("/{id}")
    @Operation(description = "Update de Diretores")
    public Diretor update(@PathVariable Long id, @RequestBody @Valid Diretor diretor) {
        return diretorService.update(id, diretor);
    }


    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    @Operation(description = "Hard Delete de Diretores")
    public void delete(@PathVariable Long id){
        diretorService.delete(id);
    }
}
