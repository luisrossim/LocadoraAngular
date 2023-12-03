package com.luisn.passatempo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.luisn.passatempo.domain.Socio;
import org.springframework.stereotype.Repository;

@Repository
public interface SocioRepository extends JpaRepository<Socio, Long> { }
