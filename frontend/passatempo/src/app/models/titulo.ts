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
["Suspense","Terror","Comédia","Ação",
"Aventura","Drama", "Comédia Romântica", "Ficção Científica"]

export const categorias = [
   {id: '1', name: 'Suspense'},
   {id: '2', name: 'Terror'},
   {id: '3', name: 'Comédia'},
   {id: '4', name: 'Ação'},
   {id: '5', name: 'Aventura'},
   {id: '6', name: 'Drama'},
   {id: '7', name: 'Comédia Romântica'},
   {id: '8', name: 'Ficção Científica'}
 ]
 