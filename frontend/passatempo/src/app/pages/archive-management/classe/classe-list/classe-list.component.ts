import { Component } from '@angular/core';
import { ClasseService } from 'src/app/core/services/classe.service';
import { Classe } from 'src/app/models/classe';

@Component({
  selector: 'app-classe-list',
  templateUrl: './classe-list.component.html',
  styleUrls: ['./classe-list.component.css']
})
export class ClasseListComponent {
  classes: Classe[] = []

  constructor(
    private classeService: ClasseService
  ) {}


  ngOnInit(): void {
    this.fetchClasses();
  }

  private fetchClasses(): void {
    this.classeService.getAll().subscribe({
      next: (resp) => {
        this.classes = resp;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  
}
