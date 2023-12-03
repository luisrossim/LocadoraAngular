package com.luisn.passatempo.dto;

import com.luisn.passatempo.domain.Socio;
import jakarta.validation.constraints.NotNull;

public record DependenteDTO (
        Long id,
        String name,
        String dt_nascimento,
        String sexo,
        boolean ativo,
        SocioDTO socio
) { }