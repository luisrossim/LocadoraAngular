import { Component } from '@angular/core';
import { AtorService } from 'src/app/core/services/ator.service';
import { Ator } from 'src/app/models/ator'

@Component({
  selector: 'app-ator-list',
  templateUrl: './ator-list.component.html',
  styleUrls: ['./ator-list.component.css']
})
export class AtorListComponent {
  atores: Ator[] = []

  constructor(
    private atorService: AtorService
  ) {}


  ngOnInit(): void {
    this.fetchAtores();
  }

  private fetchAtores(): void {
    this.atorService.getAll().subscribe({
      next: (resp) => {
        this.atores = resp;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
