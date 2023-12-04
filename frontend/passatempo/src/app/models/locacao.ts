import { Cliente } from "./cliente";
import { Item } from "./item";

export class Locacao {
   constructor (
      public id?: string,
      public dt_locacao?: Date,
      public dt_devolucaoPrevista?: Date,
      public dtDevolucaoEfetiva?: Date,
      public valor?: number,
      public multa?: number,
      public item?: Item,
      public cliente?: Cliente
   ) { }
}