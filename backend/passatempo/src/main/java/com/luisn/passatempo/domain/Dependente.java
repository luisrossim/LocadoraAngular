package com.luisn.passatempo.domain;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Dependente extends Cliente {

    @ManyToOne
    @JoinColumn(name = "id_socio")
    private Socio socio;

}
