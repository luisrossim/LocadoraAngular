import { Titulo } from "./titulo";

export class Item {
   constructor (
      public id?: string,
      public num_serie?: string,
      public dt_aquisicao?: string,
      public tipo?: string,
      public titulo?: Titulo
   ) {}
}