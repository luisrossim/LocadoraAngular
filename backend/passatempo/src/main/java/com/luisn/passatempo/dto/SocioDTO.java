package com.luisn.passatempo.dto;

import jakarta.validation.constraints.NotNull;
import java.util.List;

public record SocioDTO (
        Long id,
        String name,
        String dt_nascimento,
        String sexo,
        boolean ativo,
        String CPF,
        String endereco,
        String telefone
) { }
