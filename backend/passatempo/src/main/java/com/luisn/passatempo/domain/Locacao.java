package com.luisn.passatempo.domain;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Data
@Entity
public class Locacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.DATE)
    private Date dt_locacao;

    @Temporal(TemporalType.DATE)
    private Date dt_devolucaoPrevista;

    @Temporal(TemporalType.DATE)
    private Date dtDevolucaoEfetiva;

    @Column
    private float valor;

    @Column
    private float multa;

    @ManyToOne
    @JoinColumn(name = "id_item")
    private Item item;

    @ManyToOne
    @JoinColumn(name = "id_cliente")
    private Cliente cliente;

}
