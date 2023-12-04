import { Socio } from "./socio";

export class Dependente {
   constructor (
      public id?: string,
      public name?: string,
      public dt_nascimento?: string,
      public sexo?: string,
      public ativo?: boolean,
      public socio?: Socio,
   ) { }
}