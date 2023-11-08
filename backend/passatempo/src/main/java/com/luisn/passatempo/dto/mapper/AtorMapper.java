package com.luisn.passatempo.dto.mapper;

import com.luisn.passatempo.domain.Ator;
import com.luisn.passatempo.dto.AtorDTO;
import org.springframework.stereotype.Component;

@Component
public class AtorMapper {

    public AtorDTO toDTO(Ator ator) {
        if (ator == null) {return null;}
        return new AtorDTO(ator.getId(), ator.getName());
    }

    public Ator toEntity(AtorDTO atorDTO) {
        if (atorDTO == null) {return null;}

        Ator ator = new Ator();
        if (atorDTO.id() != null) {ator.setId(atorDTO.id());}
        ator.setName(atorDTO.name());
        return ator;
    }

}
