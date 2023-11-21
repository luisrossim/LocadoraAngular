package com.luisn.passatempo.controller;

import com.luisn.passatempo.dto.TituloDTO;
import com.luisn.passatempo.service.TituloService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Validated
@RestController
@RequestMapping("/api/titulo")
@RequiredArgsConstructor
@Tag(name = "TituloController", description = "Fornece o CRUD para gerenciamento de titulos")
public class TituloController {

    private final TituloService tituloService;

    @GetMapping
    @Operation(description = "Listar os Titulos")
    public @ResponseBody List<TituloDTO> list() {
        return tituloService.list();
    }


    @GetMapping("/{id}")
    @Operation(description = "Pesquisar um Titulo pelo ID")
    public TituloDTO pesquisar(@PathVariable Long id) {
        return tituloService.pesquisar(id);
    }


    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    @Operation(description = "Create de Titulos")
    public TituloDTO create(@RequestBody @Valid TituloDTO titulo) {
        return tituloService.create(titulo);
    }


    @PutMapping("/{id}")
    @Operation(description = "Update de Titulos")
    public TituloDTO update(@PathVariable Long id, @RequestBody @Valid TituloDTO titulo) {
        return tituloService.update(id, titulo);
    }


    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    @Operation(description = "Hard Delete de Titulos")
    public void delete(@PathVariable Long id){
        tituloService.delete(id);
    }
}
