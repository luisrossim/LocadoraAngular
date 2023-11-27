package com.luisn.passatempo.domain;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Data
@Entity
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Temporal(TemporalType.DATE)
    private Date dt_nascimento;

    @Column
    private String sexo;

    @Column
    private boolean ativo;

}
