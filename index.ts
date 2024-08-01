  type metodoPagamento = "carta" | "paypal" | "contanti";
  type stato = 'disponibile' | 'inUso';
  type  mezzo = 'bici' | 'scooter' | 'monopattino';

  
  interface IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: metodoPagamento;
    prenotaMezzo(mezzo: IMezzo): void;
  }
  
  interface IMezzo {
    tipo: mezzo;
    id: string;
    stato: stato;
    assegnaUtente(utente: IUtente): void;
  }
  
  interface ICitta {
    nome: string;
    mezziDisponibili: IMezzo[];
    aggiungiMezzo(mezzo: IMezzo): void;
  }
  
  class Utente implements IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: metodoPagamento; 
  
    constructor(nome: string, cognome: string, email: string, metodoPagamento: metodoPagamento) {
      this.nome = nome;
      this.cognome = cognome;
      this.email = email;
      this.metodoPagamento = metodoPagamento;
    }
  
    prenotaMezzo(mezzo: IMezzo) {
      if (mezzo.stato === 'disponibile') {
        mezzo.assegnaUtente(this);
        console.log(`${this.nome} ${this.cognome} ha prenotato un/a ${mezzo.tipo}`);
      } else {
        console.log("Il mezzo non è disponibile");
      }
    }
  }
  
  class Mezzo implements IMezzo {
    tipo: mezzo;
    id: string;
    stato:  stato;
    utente: IUtente | null;
  
    constructor(tipo: any, id: string) {
      this.tipo = tipo;
      this.id = id;
      this.stato = 'disponibile';
      this.utente = null;
    }
  
    assegnaUtente(utente: IUtente) {
      this.stato = 'inUso';
      this.utente = utente;
      console.log(`assegato utente: ${this.utente.nome}`)
    }
  }
  
  class Citta implements ICitta {
    nome: string;
    mezziDisponibili: Mezzo[];
  
    constructor(nome: string) {
      this.nome = nome;
      this.mezziDisponibili = [];
    }
  
    aggiungiMezzo(mezzo: Mezzo) {
      this.mezziDisponibili.push(mezzo);
      console.log(`aggiunto mezzo: ${mezzo.tipo}`);
    }
  }

//Test 
const roma = new Citta('roma');
const milano = new Citta('milano');
const bici1 = new Mezzo('bici', 'B123');
const monopattino1 = new Mezzo('monopattino', 'a123');
const mario = new Utente('Mario', 'Rossi', 'mario@example.com', 'carta');
const luca = new Utente('Luca', 'Bianchi', 'luca@examplexample.com', 'paypal');

roma.aggiungiMezzo(bici1);
milano.aggiungiMezzo(monopattino1);
mario.prenotaMezzo(bici1);
luca.prenotaMezzo(monopattino1);