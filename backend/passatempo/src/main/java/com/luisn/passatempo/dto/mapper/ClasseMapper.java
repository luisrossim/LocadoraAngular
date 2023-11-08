package com.luisn.passatempo.dto.mapper;

import com.luisn.passatempo.domain.Classe;
import com.luisn.passatempo.dto.ClasseDTO;
import org.springframework.stereotype.Component;

@Component
public class ClasseMapper {

    public ClasseDTO toDTO(Classe classe) {
        if (classe == null) {return null;}
        return new ClasseDTO(classe.getId(), classe.getName(), classe.getValue(), classe.getDate());
    }

    public Classe toEntity(ClasseDTO classeDTO) {
        if (classeDTO == null) {return null;}

        Classe classe = new Classe();
        if (classeDTO.id() != null) {classe.setId(classeDTO.id());}
        classe.setName(classeDTO.name());
        classe.setValue(classeDTO.value());
        classe.setDate(classeDTO.date());
        return classe;
    }
}
