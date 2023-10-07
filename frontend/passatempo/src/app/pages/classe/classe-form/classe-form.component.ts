import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertsService } from 'src/app/shared/services/alerts.service';
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
    private alerts: AlertsService,
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
      error => this.handleError(error)
    );
  }

  handleCancel(){
    this.location.back();
  }

  private onSuccess(){
    this.alerts.showSuccess('Classe cadastrada com sucesso')
    this.handleCancel();
  }

  handleError(error: String){
    this.alerts.showError('Erro ao cadastrar classe')
  }


}
