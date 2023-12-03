package com.luisn.passatempo.controller;

import com.luisn.passatempo.dto.DependenteDTO;
import com.luisn.passatempo.service.DependenteService;
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
@RequestMapping("/api/dependente")
@RequiredArgsConstructor
@Tag(name = "DependenteController", description = "Fornece o CRUD para gerenciamento de dependentes")
public class DependenteController {

    private final DependenteService dependenteService;

    @GetMapping
    @Operation(description = "Listar os Dependentes")
    public @ResponseBody List<DependenteDTO> list() {
        return dependenteService.list();
    }


    @GetMapping("/{id}")
    @Operation(description = "Pesquisar um Dependente pelo ID")
    public DependenteDTO pesquisar(@PathVariable Long id) {
        return dependenteService.pesquisar(id);
    }


    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    @Operation(description = "Create de Dependentes")
    public DependenteDTO create(@RequestBody @Valid DependenteDTO dependente) {
        return dependenteService.create(dependente);
    }


    @PutMapping("/{id}")
    @Operation(description = "Update de Dependentes")
    public DependenteDTO update(@PathVariable Long id, @RequestBody @Valid DependenteDTO dependente) {
        return dependenteService.update(id, dependente);
    }


    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    @Operation(description = "Hard Delete de Dependentes")
    public void delete(@PathVariable Long id){
        dependenteService.delete(id);
    }

}
