package com.luisn.passatempo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.luisn.passatempo.domain.Diretor;
import org.springframework.stereotype.Repository;

@Repository
public interface DiretorRepository extends JpaRepository<Diretor, Long> { }

