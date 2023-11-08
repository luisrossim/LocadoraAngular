package com.luisn.passatempo.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import java.util.List;

@Data
@Entity
public class Classe {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(nullable = false)
    private String name;

    @NotNull
    @Column(nullable = false)
    private float value;

    @NotNull
    @Column(nullable = false)
    private int date;

    @OneToMany(mappedBy = "classe")
    private List<Titulo> listaTitulos;
}
