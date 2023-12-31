package com.luisn.passatempo.domain;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

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
    private String dt_nascimento;

    @Column
    private String sexo;

    @Column
    private boolean ativo;

    @OneToMany(mappedBy = "cliente")
    private List<Locacao> locacoes;
}
