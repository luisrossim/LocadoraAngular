package com.luisn.passatempo.dto;

import java.util.Date;

public record ItemDTO(
        Long id,
        String num_serie,
        String dt_aquisicao,
        String tipo,
        TituloDTO titulo
) { }
