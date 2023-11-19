package com.luisn.passatempo.controller;

import com.luisn.passatempo.dto.ItemDTO;
import com.luisn.passatempo.service.ItemService;
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
@RequestMapping("/api/item")
@RequiredArgsConstructor
@Tag(name = "ItemController", description = "Fornece o CRUD para gerenciamento de itens")
public class ItemController {

    private final ItemService itemService;

    @GetMapping
    @Operation(description = "Listar os Itens")
    public @ResponseBody List<ItemDTO> list() {
        return itemService.list();
    }


    @GetMapping("/{id}")
    @Operation(description = "Pesquisar um Item pelo ID")
    public ItemDTO pesquisar(@PathVariable Long id) {
        return itemService.pesquisar(id);
    }


    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    @Operation(description = "Create de Itens")
    public ItemDTO create(@RequestBody @Valid ItemDTO item) {
        return itemService.create(item);
    }


    @PutMapping("/{id}")
    @Operation(description = "Update de Itens")
    public ItemDTO update(@PathVariable Long id, @RequestBody @Valid ItemDTO item) {
        return itemService.update(id, item);
    }


    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    @Operation(description = "Hard Delete de Itens")
    public void delete(@PathVariable Long id){
        itemService.delete(id);
    }
}
