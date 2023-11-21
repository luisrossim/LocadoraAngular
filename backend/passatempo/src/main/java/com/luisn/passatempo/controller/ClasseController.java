package com.luisn.passatempo.controller;

import com.luisn.passatempo.domain.Classe;
import com.luisn.passatempo.dto.ClasseDTO;
import com.luisn.passatempo.service.ClasseService;
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
@RequestMapping("/api/classe")
@RequiredArgsConstructor
@Tag(name = "ClasseController", description = "Fornece o CRUD para gerenciamento de classes")
public class ClasseController {

    private final ClasseService classeService;

    @GetMapping
    @Operation(description = "Listar as Classes")
    public @ResponseBody List<ClasseDTO> list() {
        return classeService.list();
    }

    @GetMapping("/{id}")
    @Operation(description = "Pesquisar uma Classe pelo ID")
    public ClasseDTO pesquisar(@PathVariable Long id) {
        return classeService.pesquisar(id);
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    @Operation(description = "Create de Classes")
    public ClasseDTO create(@RequestBody @Valid ClasseDTO classe) {
        return classeService.create(classe);
    }

    @PutMapping("/{id}")
    @Operation(description = "Update de Classes")
    public ClasseDTO update(@PathVariable Long id, @RequestBody @Valid ClasseDTO classe) {
        return classeService.update(id, classe);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    @Operation(description = "Hard Delete de Classes")
    public void delete(@PathVariable Long id){
        classeService.delete(id);
    }
}
