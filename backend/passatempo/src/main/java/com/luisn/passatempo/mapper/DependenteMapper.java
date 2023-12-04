package com.luisn.passatempo.mapper;

import com.luisn.passatempo.domain.Dependente;
import com.luisn.passatempo.dto.DependenteDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DependenteMapper {

    DependenteDTO toDTO(Dependente dependente);

    Dependente toEntity(DependenteDTO dto);

}
