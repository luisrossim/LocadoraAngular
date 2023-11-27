package com.luisn.passatempo.mapper;

import com.luisn.passatempo.domain.Item;
import com.luisn.passatempo.dto.ItemDTO;
import org.mapstruct.Mapper;
import java.util.List;

@Mapper(componentModel = "spring")
public interface ItemMapper {

    ItemDTO toDTO(Item item);

    Item toEntity(ItemDTO dto);
    
}
