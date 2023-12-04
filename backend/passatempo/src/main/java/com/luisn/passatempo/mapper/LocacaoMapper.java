package com.luisn.passatempo.mapper;

import com.luisn.passatempo.domain.Locacao;
import com.luisn.passatempo.dto.LocacaoDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LocacaoMapper {

    LocacaoDTO toDTO(Locacao locacao);

    Locacao toEntity(LocacaoDTO dto);

}
