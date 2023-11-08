package com.luisn.passatempo.dto.mapper;

import com.luisn.passatempo.domain.Diretor;
import com.luisn.passatempo.dto.DiretorDTO;
import org.springframework.stereotype.Component;

@Component
public class DiretorMapper {

    public DiretorDTO toDTO(Diretor diretor) {
        if (diretor == null) {return null;}
        return new DiretorDTO(diretor.getId(), diretor.getName());
    }

    public Diretor toEntity(DiretorDTO diretorDTO) {
        if (diretorDTO == null) {return null;}

        Diretor diretor = new Diretor();
        if (diretorDTO.id() != null) {diretor.setId(diretorDTO.id());}
        diretor.setName(diretorDTO.name());
        return diretor;
    }
}
