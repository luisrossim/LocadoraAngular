import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import { DiretorService } from 'src/app/core/services/diretor.service';
import { Diretor } from 'src/app/models/diretor';

@Component({
  selector: 'app-diretor-form',
  templateUrl: './diretor-form.component.html',
  styleUrls: ['./diretor-form.component.css']
})
export class DiretorFormComponent {
  
  diretorForm = this.formBuilder.group({
    id: [''],
    name: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder, 
    private diretorService: DiretorService,
    private location: Location,
    private router: Router,
    private alerts: AlertsService,
    private route: ActivatedRoute) {
      const diretor: Diretor = this.route.snapshot.data['diretor'];
      this.diretorForm.setValue({
        id: diretor.id,
        name: diretor.name
      });
  }


  handleSubmit(){
    this.diretorService.salvar(this.diretorForm.value).subscribe(
      resultado => this.onSuccess(), 
      error => this.handleError(error)
    );
  }

  handleCancel(){
    this.location.back();
  }

  private onSuccess(){
    this.alerts.showSuccess('Diretor cadastrado com sucesso')
    this.handleCancel();
  }

  handleError(error: String){
    this.alerts.showError('Erro ao cadastrar diretor')
  }


}
