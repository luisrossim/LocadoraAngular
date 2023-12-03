package com.luisn.passatempo.mapper;

import com.luisn.passatempo.domain.Cliente;
import com.luisn.passatempo.dto.ClienteDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ClienteMapper {

    ClienteDTO toDTO(Cliente cliente);

    Cliente toEntity(ClienteDTO dto);

}
