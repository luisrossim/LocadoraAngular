package com.luisn.passatempo.repository;

import com.luisn.passatempo.domain.Item;
import com.luisn.passatempo.domain.Locacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocacaoRepository extends JpaRepository<Locacao, Long> {
    Locacao findByItemAndDtDevolucaoEfetivaIsNull(Item item);
}
