import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasseService } from 'src/app/core/services/classe.service';
import { Classe } from 'src/app/models/classe';

@Component({
  selector: 'app-classe-form',
  templateUrl: './classe-form.component.html',
  styleUrls: ['./classe-form.component.css']
})
export class ClasseFormComponent {
  
  classeForm = this.formBuilder.group({
    id: [''],
    name: [''],
    value: [''],
    date: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder, 
    private classeService: ClasseService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute) {
      const classe: Classe = this.route.snapshot.data['classe'];
      this.classeForm.setValue({
        id: classe.id,
        name: classe.name,
        value: classe.value,
        date: classe.date
      });
  }


  handleSubmit(){
    this.classeService.salvar(this.classeForm.value).subscribe(
      resultado => this.onSuccess(), 
      error => this.handleError()
    );
  }

  handleCancel(){
    this.location.back();
  }

  private onSuccess(){
    alert("Classe cadastrada com sucesso!")
    this.handleCancel();
  }

  handleError(){
    alert("Erro ao cadastrar classe!")
  }


}
