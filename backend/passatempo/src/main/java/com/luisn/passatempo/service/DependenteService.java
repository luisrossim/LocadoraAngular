package com.luisn.passatempo.service;


import com.luisn.passatempo.domain.Dependente;
import com.luisn.passatempo.domain.Socio;
import com.luisn.passatempo.dto.DependenteDTO;
import com.luisn.passatempo.exception.FailedException;
import com.luisn.passatempo.exception.RecordNotFoundException;
import com.luisn.passatempo.mapper.DependenteMapper;
import com.luisn.passatempo.repository.DependenteRepository;
import com.luisn.passatempo.repository.SocioRepository;
import jakarta.validation.Valid;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.stream.Collectors;

@Validated
@RequiredArgsConstructor
@Service
public class DependenteService {

    private final DependenteRepository dependenteRepository;
    private final DependenteMapper dependenteMapper;
    private final SocioRepository socioRepository;

    public List<DependenteDTO> list() {
        return dependenteRepository.findAll().stream()
                .map(dependenteMapper::toDTO)
                .collect(Collectors.toList());
    }


    public DependenteDTO pesquisar(@PathVariable Long id) {
        return dependenteRepository.findById(id).map(dependenteMapper::toDTO)
                .orElseThrow(() -> new RecordNotFoundException(id));
    }


    public DependenteDTO create(@Valid DependenteDTO dependente) {
        Socio socio = socioRepository.findById(dependente.socio().id())
                .orElseThrow(() -> new RecordNotFoundException(dependente.socio().id()));

        if(!socio.isAtivo()){
            throw new FailedException("Não é possível realizar o cadastro pois o sócio está desativado"); }

        List<Dependente> dependentesAtivos = socio.getDependentes()
                .stream().filter(Dependente::isAtivo)
                .collect(Collectors.toList());

        if(dependentesAtivos.size() == 3){
            throw new FailedException("Não é possível realizar o cadastro pois o sócio possui 3 dependentes"); }

        return dependenteMapper.toDTO(dependenteRepository.save(dependenteMapper.toEntity(dependente)));
    }


    public DependenteDTO update(Long id, @Valid DependenteDTO dependente) {
        return dependenteRepository.findById(id)
                .map(registrobusca -> {
                    registrobusca = dependenteMapper.toEntity(dependente);
                    return dependenteMapper.toDTO(dependenteRepository.save(registrobusca));
                }).orElseThrow(() -> new RecordNotFoundException(id));
    }


    public void desativar(@PathVariable Long id){
        dependenteRepository.findById(id)
                .map(registro -> {
                    registro.setAtivo(false);
                    return dependenteRepository.save(registro);
                }).orElseThrow(() -> new RecordNotFoundException(id));
    }
}
