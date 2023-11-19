package com.luisn.passatempo.mapper;

import com.luisn.passatempo.domain.Item;
import com.luisn.passatempo.dto.ItemDTO;
import org.mapstruct.Mapper;
import java.util.List;

@Mapper(componentModel = "spring")
public interface ItemMapper {

    ItemDTO toDTO(Item item);

    List<ItemDTO> toDTO(List<Item> entidades);

    Item toEntity(ItemDTO dto);

    List<Item> toEntity(List<ItemDTO> dtos);
    
}
