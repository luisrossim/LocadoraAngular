package com.luisn.passatempo.dto.mapper;


import com.luisn.passatempo.domain.Ator;
import com.luisn.passatempo.domain.Classe;
import com.luisn.passatempo.domain.Diretor;
import com.luisn.passatempo.domain.Titulo;
import com.luisn.passatempo.dto.AtorDTO;
import com.luisn.passatempo.dto.ClasseDTO;
import com.luisn.passatempo.dto.DiretorDTO;
import com.luisn.passatempo.dto.TituloDTO;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class TituloMapper {

    public TituloDTO toDTO(Titulo titulo) {
        if (titulo == null) {return null;}

        List<AtorDTO> listaAtores = titulo.getListaAtores()
                .stream()
                .map(ator -> new AtorDTO(ator.getId(), ator.getName()))
                .collect(Collectors.toList());


        DiretorDTO diretor = new DiretorDTO(titulo.getDiretor().getId(), titulo.getDiretor().getName());
        ClasseDTO classe = new ClasseDTO(titulo.getClasse().getId(), titulo.getClasse().getName(),
                titulo.getClasse().getValue(), titulo.getClasse().getDate());

        return new TituloDTO(
                titulo.getId(), titulo.getName(),
                titulo.getAno(), titulo.getSinopse(),
                titulo.getCategoria(), listaAtores,
                diretor, classe);
    }

    public Titulo toEntity(TituloDTO tituloDTO) {
        if (tituloDTO == null) {return null;}

        Titulo titulo = new Titulo();
        if (tituloDTO.id() != null) {titulo.setId(tituloDTO.id());}

        titulo.setName(tituloDTO.name());
        titulo.setAno(tituloDTO.ano());
        titulo.setSinopse(tituloDTO.sinopse());
        titulo.setCategoria(tituloDTO.categoria());

        List<Ator> listaAtores = tituloDTO.listaAtores().stream().map(atorDTO -> {
            var ator = new Ator();
            ator.setId(atorDTO.id());
            ator.setName(atorDTO.name());
            return ator;
        }).collect(Collectors.toList());
        titulo.setListaAtores(listaAtores);

        var diretor = new Diretor();
        diretor.setId(tituloDTO.diretor().id());
        diretor.setName(tituloDTO.diretor().name());
        titulo.setDiretor(diretor);

        var classe = new Classe();
        classe.setId(tituloDTO.classe().id());
        classe.setName(tituloDTO.classe().name());
        classe.setValue(tituloDTO.classe().value());
        classe.setDate(tituloDTO.classe().date());
        titulo.setClasse(classe);

        return titulo;
    }

}
