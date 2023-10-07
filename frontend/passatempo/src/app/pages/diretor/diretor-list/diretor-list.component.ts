import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Diretor } from 'src/app/models/diretor';

@Component({
  selector: 'app-diretor-list',
  templateUrl: './diretor-list.component.html',
  styleUrls: ['./diretor-list.component.css']
})
export class DiretorListComponent {

  @Input() diretores: Diretor[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  constructor(private confirmationService: ConfirmationService){ }


  handleInsert() {
    this.add.emit(true);
  }

  handleEdit(diretor: Diretor){
    this.edit.emit(diretor);
  }

  handleDelete(diretor: Diretor){
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja deletar o diretor ' + `<strong>${diretor.name}</strong>?`,
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.delete.emit(diretor);
      },
    });
  }
}
