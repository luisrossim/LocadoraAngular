import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Ator } from 'src/app/models/ator';

@Component({
  selector: 'app-ator-list',
  templateUrl: './ator-list.component.html',
  styleUrls: ['./ator-list.component.css']
})
export class AtorListComponent {

  @Input() atores: Ator[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  constructor(
    private confirmationService: ConfirmationService,
  ){ }

  handleInsert() {
    this.add.emit(true);
  }

  handleEdit(ator: Ator){
    this.edit.emit(ator);
  }

  handleDelete(ator: Ator){
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja deletar o ator ' + `<strong>${ator.name}</strong>?`,
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.delete.emit(ator);
      },
  });
  }

}
