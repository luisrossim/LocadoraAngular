package com.luisn.passatempo.service;

import com.luisn.passatempo.dto.ItemDTO;
import com.luisn.passatempo.mapper.ItemMapper;
import com.luisn.passatempo.exception.RecordNotFoundException;
import com.luisn.passatempo.repository.ItemRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.stream.Collectors;

@Validated
@RequiredArgsConstructor
@Service
public class ItemService {

    private final ItemRepository itemRepository;
    private final ItemMapper itemMapper;

    public List<ItemDTO> list() {
        return itemRepository.findAll().stream()
                .map(itemMapper::toDTO)
                .collect(Collectors.toList());
    }

    public ItemDTO pesquisar(@PathVariable Long id) {
        return itemRepository.findById(id).map(itemMapper::toDTO)
                .orElseThrow(() -> new RecordNotFoundException(id));
    }

    public ItemDTO create(@Valid ItemDTO item) {
        return itemMapper.toDTO(itemRepository.save(itemMapper.toEntity(item)));
    }

    public ItemDTO update(Long id, @Valid ItemDTO item) {
        return itemRepository.findById(id)
                .map(registrobusca -> {
                    registrobusca.setNum_serie(item.num_serie());
                    registrobusca.setDt_aquisicao(item.dt_aquisicao());
                    registrobusca.setTipo(item.tipo());
                    return itemMapper.toDTO(itemRepository.save(registrobusca));
                }).orElseThrow(() -> new RecordNotFoundException(id));
    }

    public void delete(@PathVariable Long id){
        itemRepository.delete(itemRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(id)));
    }

}
