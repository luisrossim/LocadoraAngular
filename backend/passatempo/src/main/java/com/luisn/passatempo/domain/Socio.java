package com.luisn.passatempo.domain;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Data
@Entity
public class Socio extends Cliente {

    @Column
    private String CPF;

    @Column
    private String endereco;

    @Column
    private String telefone;

    @OneToMany(mappedBy = "socio", cascade = CascadeType.ALL)
    private List<Dependente> dependentes;

}
