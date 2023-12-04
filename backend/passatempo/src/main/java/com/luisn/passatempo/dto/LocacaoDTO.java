package com.luisn.passatempo.dto;

import java.util.Date;

public record LocacaoDTO (
        Long id,
        Date dt_locacao,
        Date dt_devolucaoPrevista,
        Date dtDevolucaoEfetiva,
        float valor,
        float multa,
        ItemDTO item,
        ClienteDTO cliente
) { }
