package com.luisn.passatempo.mapper;

import com.luisn.passatempo.domain.Ator;
import com.luisn.passatempo.dto.AtorDTO;
import org.mapstruct.Mapper;
import java.util.List;

@Mapper(componentModel = "spring")
public interface AtorMapper {

    AtorDTO toDTO(Ator ator);

    Ator toEntity(AtorDTO dto);

}
