import { Component } from '@angular/core';
import { DiretorService } from 'src/app/core/services/diretor.service';
import { Diretor } from 'src/app/models/diretor';

@Component({
  selector: 'app-diretor-list',
  templateUrl: './diretor-list.component.html',
  styleUrls: ['./diretor-list.component.css']
})
export class DiretorListComponent {
  diretores: Diretor[] = []

  constructor(
    private diretorService: DiretorService
  ) {}


  ngOnInit(): void {
    this.fetchDiretores();
  }

  private fetchDiretores(): void {
    this.diretorService.getAll().subscribe({
      next: (resp) => {
        this.diretores = resp;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  
}
