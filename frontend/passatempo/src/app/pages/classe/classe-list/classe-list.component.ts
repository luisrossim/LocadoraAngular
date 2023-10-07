import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Classe } from 'src/app/models/classe';

@Component({
  selector: 'app-classe-list',
  templateUrl: './classe-list.component.html',
  styleUrls: ['./classe-list.component.css']
})
export class ClasseListComponent {

  @Input() classes: Classe[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  constructor(private confirmationService: ConfirmationService){ }

  handleInsert() {
    this.add.emit(true);
  }

  handleEdit(classe: Classe){
    this.edit.emit(classe);
  }

  handleDelete(classe: Classe){
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja deletar a classe ' + `<strong>${classe.name}</strong>?`,
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.delete.emit(classe);
      },
    });
  }
  
}
