package com.luisn.passatempo.domain;

import jakarta.persistence.*;
import lombok.Data;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Titulo {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private String name;

    private int ano;

    private String sinopse;

    private String categoria;

    @ManyToMany
    @JoinTable(name = "ator_titulo",
            joinColumns = @JoinColumn(name = "id_titulo"),
            inverseJoinColumns = @JoinColumn(name = "id_ator"))
    private List<Ator> listaAtores = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "id_diretor")
    private Diretor diretor;

    @ManyToOne
    @JoinColumn(name = "id_classe")
    private Classe classe;

    @OneToMany(mappedBy = "titulo")
    private List<Item> listaItens;
}
