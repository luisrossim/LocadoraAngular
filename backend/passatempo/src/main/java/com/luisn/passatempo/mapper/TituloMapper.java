package com.luisn.passatempo.mapper;


import com.luisn.passatempo.domain.Titulo;
import com.luisn.passatempo.dto.TituloDTO;
import org.mapstruct.Mapper;
import java.util.List;

@Mapper(componentModel = "spring")
public interface TituloMapper {

    TituloDTO toDTO(Titulo titulo);

    Titulo toEntity(TituloDTO dto);

}
