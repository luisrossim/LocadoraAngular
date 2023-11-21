package com.luisn.passatempo.mapper;

import java.util.List;

public interface EntidadeMapper<D, E> {

    E toEntity(D dto);

    D toDTO(E entidade);

    List<E> toEntity(List<D> dtos);

    List<D> toDTO(List<E> entidades);

}
