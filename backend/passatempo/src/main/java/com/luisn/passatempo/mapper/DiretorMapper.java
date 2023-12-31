package com.luisn.passatempo.mapper;

import com.luisn.passatempo.domain.Diretor;
import com.luisn.passatempo.dto.DiretorDTO;
import org.mapstruct.Mapper;
import java.util.List;

@Mapper(componentModel = "spring")
public interface DiretorMapper {

    DiretorDTO toDTO(Diretor diretor);

    Diretor toEntity(DiretorDTO dto);

}
