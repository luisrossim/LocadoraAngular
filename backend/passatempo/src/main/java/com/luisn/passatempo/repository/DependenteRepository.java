package com.luisn.passatempo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.luisn.passatempo.domain.Dependente;
import org.springframework.stereotype.Repository;

@Repository
public interface DependenteRepository extends JpaRepository<Dependente, Long> { }