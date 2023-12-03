package com.luisn.passatempo.controller;

import com.luisn.passatempo.dto.LocacaoDTO;
import com.luisn.passatempo.service.LocacaoService;
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
@RequestMapping("/api/locacao")
@RequiredArgsConstructor
@Tag(name = "LocacaoController", description = "Fornece o CRUD para gerenciamento de locações")
public class LocacaoController {

    private final LocacaoService locacaoService;

    @GetMapping
    @Operation(description = "Listar as Locações")
    public @ResponseBody List<LocacaoDTO> list() {
        return locacaoService.list();
    }


    @GetMapping("/{id}")
    @Operation(description = "Pesquisar uma Locação pelo ID")
    public LocacaoDTO pesquisar(@PathVariable Long id) {
        return locacaoService.pesquisar(id);
    }


    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    @Operation(description = "Create de Locações")
    public LocacaoDTO create(@RequestBody @Valid LocacaoDTO locacao) {
        return locacaoService.create(locacao);
    }


    @PutMapping("/{id}")
    @Operation(description = "Update de Locações")
    public LocacaoDTO update(@PathVariable Long id, @RequestBody @Valid LocacaoDTO locacao) {
        return locacaoService.update(id, locacao);
    }


    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    @Operation(description = "Hard Delete de locações")
    public void delete(@PathVariable Long id){
        locacaoService.cancelar(id);
    }

}
