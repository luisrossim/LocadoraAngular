import { Ator } from "./ator";
import { Classe } from "./classe";
import { Diretor } from "./diretor";

export class Titulo {
   constructor (
      public id?: string,
      public name?: string,
      public ano?: number,
      public sinopse?: string,
      public categoria?: string,
      public listaAtores?: Ator[],
      public diretor?: Diretor,
      public classe?: Classe
   ) {}
}