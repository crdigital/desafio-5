const primeiroNome: string = "Clayton";
const diaDoMes: number = 15;
const hojeFezSol: boolean = true;

type Cachorro = {
    nome: string;
    idade: Date;
    raça: string;
    grandePorte: boolean;
    donos: string[];
  }
  
  interface Animais {
    tipo: string;
    bipede: boolean;
    asas: boolean;
    região: StaticRange;
  }

  const dog: Partial<Cachorro> = {}

//   const dog: Omit<Cachorro, "grandePorte"> = {}
