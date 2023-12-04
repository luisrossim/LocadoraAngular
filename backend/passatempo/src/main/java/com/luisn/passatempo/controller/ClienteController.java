package com.luisn.passatempo.controller;

import com.luisn.passatempo.dto.ClienteDTO;
import com.luisn.passatempo.service.ClienteService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@Validated
@RestController
@RequestMapping("/api/cliente")
@RequiredArgsConstructor
public class ClienteController {

    private final ClienteService clienteService;

    @GetMapping
    @Operation(description = "Listar os Clientes")
    public @ResponseBody List<ClienteDTO> list() {
        return clienteService.list();
    }

}
