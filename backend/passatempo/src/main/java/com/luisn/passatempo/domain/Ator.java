package com.luisn.passatempo.domain;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Ator {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String name;

}
