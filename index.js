var Utente = /** @class */ (function () {
    function Utente(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    Utente.prototype.prenotaMezzo = function (mezzo) {
        if (mezzo.stato === 'disponibile') {
            mezzo.assegnaUtente(this);
            console.log("".concat(this.nome, " ").concat(this.cognome, " ha prenotato un/a ").concat(mezzo.tipo));
        }
        else {
            console.log("Il mezzo non è disponibile");
        }
    };
    return Utente;
}());
var Mezzo = /** @class */ (function () {
    function Mezzo(tipo, id) {
        this.tipo = tipo;
        this.id = id;
        this.stato = 'disponibile';
        this.utente = null;
    }
    Mezzo.prototype.assegnaUtente = function (utente) {
        this.stato = 'inUso';
        this.utente = utente;
        console.log("assegato utente: ".concat(this.utente.nome));
    };
    return Mezzo;
}());
var Citta = /** @class */ (function () {
    function Citta(nome) {
        this.nome = nome;
        this.mezziDisponibili = [];
    }
    Citta.prototype.aggiungiMezzo = function (mezzo) {
        this.mezziDisponibili.push(mezzo);
        console.log("aggiunto mezzo: ".concat(mezzo.tipo));
    };
    return Citta;
}());
//Test 
var roma = new Citta('roma');
var milano = new Citta('milano');
var bici1 = new Mezzo('bici', 'B123');
var monopattino1 = new Mezzo('monopattino', 'a123');
var mario = new Utente('Mario', 'Rossi', 'mario@example.com', 'carta');
var luca = new Utente('Luca', 'Bianchi', 'luca@examplexample.com', 'paypal');
roma.aggiungiMezzo(bici1);
milano.aggiungiMezzo(monopattino1);
mario.prenotaMezzo(bici1);
luca.prenotaMezzo(monopattino1);
