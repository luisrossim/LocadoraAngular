import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AtorService } from 'src/app/core/services/ator.service';
import { Ator } from 'src/app/models/ator';

@Component({
  selector: 'app-ator-form',
  templateUrl: './ator-form.component.html',
  styleUrls: ['./ator-form.component.css']
})
export class AtorFormComponent {

  atorForm = this.formBuilder.group({
    id: [''],
    name: [''],
  });


  constructor(
    private formBuilder: NonNullableFormBuilder, 
    private atorService: AtorService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute) {
      const ator: Ator = this.route.snapshot.data['ator'];
      this.atorForm.setValue({
        id: ator.id,
        name: ator.name
      });
  }


  handleSubmit(){
    this.atorService.salvar(this.atorForm.value).subscribe(
      resultado => this.onSuccess(), 
      error => this.handleError()
    );
  }

  handleCancel(){
    this.location.back();
  }

  private onSuccess(){
    alert("Ator cadastrado com sucesso!")
    this.handleCancel();
  }

  handleError(){
    alert("Erro ao cadastrar ator!")
  }

}
