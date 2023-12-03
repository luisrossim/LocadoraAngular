package com.luisn.passatempo.dto;

public record ClienteDTO (
        Long id,
        String name,
        String dt_nascimento,
        String sexo,
        boolean ativo
) { }
