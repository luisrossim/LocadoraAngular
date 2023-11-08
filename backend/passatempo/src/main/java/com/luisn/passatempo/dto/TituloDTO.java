package com.luisn.passatempo.dto;

import com.luisn.passatempo.domain.Classe;
import com.luisn.passatempo.domain.Diretor;

import java.util.List;

public record TituloDTO(
        Long id,
        String name,
        int ano,
        String sinopse,
        String categoria,
        List<AtorDTO> listaAtores,
        DiretorDTO diretor,
        ClasseDTO classe
) { }
