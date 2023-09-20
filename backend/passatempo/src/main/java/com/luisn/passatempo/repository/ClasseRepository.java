package com.luisn.passatempo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.luisn.passatempo.domain.Classe;
import org.springframework.stereotype.Repository;

@Repository
public interface ClasseRepository extends JpaRepository<Classe, Long> { }
