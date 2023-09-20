import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  constructor(){ }

  handleInsert() {
    this.add.emit(true);
  }

  handleEdit(classe: Classe){
    this.edit.emit(classe);
  }

  handleDelete(classe: Classe){
    this.delete.emit(classe);
  }
  
}
