import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  constructor(){ }


  handleInsert() {
    this.add.emit(true);
  }

  handleEdit(diretor: Diretor){
    this.edit.emit(diretor);
  }

  handleDelete(diretor: Diretor){
    this.delete.emit(diretor);
  }
}
