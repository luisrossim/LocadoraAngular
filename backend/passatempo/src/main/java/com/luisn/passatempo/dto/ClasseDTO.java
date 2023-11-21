package com.luisn.passatempo.dto;

import jakarta.validation.constraints.NotNull;

public record ClasseDTO(
        Long id,
        @NotNull String name,
        @NotNull float value,
        @NotNull int date
) { }
