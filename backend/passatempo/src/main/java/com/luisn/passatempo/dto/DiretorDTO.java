package com.luisn.passatempo.dto;

import jakarta.validation.constraints.NotNull;

public record DiretorDTO(
        Long id,
        @NotNull String name
) { }
