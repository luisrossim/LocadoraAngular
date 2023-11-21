package com.luisn.passatempo.domain;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Data
@Entity
public class Item {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String num_serie;

    private String dt_aquisicao;

    private String tipo;

    @ManyToOne
    @JoinColumn(name = "id_titulo")
    private Titulo titulo;
}
