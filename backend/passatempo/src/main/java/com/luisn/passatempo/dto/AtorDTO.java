package com.luisn.passatempo.dto;

import jakarta.validation.constraints.NotNull;

public record AtorDTO(
        Long id,
        @NotNull String name
) { }
