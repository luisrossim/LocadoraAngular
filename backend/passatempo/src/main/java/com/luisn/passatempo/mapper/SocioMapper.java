package com.luisn.passatempo.mapper;

import com.luisn.passatempo.domain.Socio;
import com.luisn.passatempo.dto.SocioDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface SocioMapper {

    SocioDTO toDTO(Socio socio);

    Socio toEntity(SocioDTO dto);

}
