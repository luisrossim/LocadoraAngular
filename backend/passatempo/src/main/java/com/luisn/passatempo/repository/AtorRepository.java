package com.luisn.passatempo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.luisn.passatempo.domain.Ator;
import org.springframework.stereotype.Repository;

@Repository
public interface AtorRepository extends JpaRepository<Ator, Long> { }
