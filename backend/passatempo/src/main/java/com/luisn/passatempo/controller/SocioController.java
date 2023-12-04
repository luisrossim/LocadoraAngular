package com.luisn.passatempo.controller;

import com.luisn.passatempo.dto.SocioDTO;
import com.luisn.passatempo.service.SocioService;
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
@RequestMapping("/api/socio")
@RequiredArgsConstructor
@Tag(name = "SocioController", description = "Fornece o CRUD para gerenciamento de sócios")
public class SocioController {

    private final SocioService socioService;

    @GetMapping
    @Operation(description = "Listar os Sócios")
    public @ResponseBody List<SocioDTO> list() {
        return socioService.list();
    }


    @GetMapping("/{id}")
    @Operation(description = "Pesquisar um Socio pelo ID")
    public SocioDTO pesquisar(@PathVariable Long id) {
        return socioService.pesquisar(id);
    }


    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    @Operation(description = "Create de Sócios")
    public SocioDTO create(@RequestBody @Valid SocioDTO socio) {
        return socioService.create(socio);
    }


    @PutMapping("/{id}")
    @Operation(description = "Update de Sócios e Tornar Sócio Ativo")
    public SocioDTO update(@PathVariable Long id, @RequestBody @Valid SocioDTO socio) {
        return socioService.update(id, socio);
    }


    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    @Operation(description = "Soft Delete de Sócios")
    public void delete(@PathVariable Long id){
        socioService.desativar(id);
    }

}
