const primeiroNome:string = "Clayton";
const diaDoMes:number = 15;
const hojeFezSol:boolean = true;

type Cachorrro = {
    nome: string;
    idade: number;
    raça: string;
    grandePorte: boolean;
    donos: string;
  }
  
  interface Animais {
    tipo: string;
    bipede: boolean;
    asas: boolean;
    região: string;
  }

  type Gato = {
    caracteristica: string;
    cor?: string;
  }
