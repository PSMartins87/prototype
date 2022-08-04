import FiatPrototype from "./vehicles/FiatPrototype";
import volksPrototype from "./vehicles/volksPrototype";
const fiat = new FiatPrototype("uno","branco","passeio","1999");
const volks = new volksPrototype("Gol","preto","passeio","2017");
const fiat4 = fiat.clonar();
fiat4._ano = "2001"
fiat4._color= "verde";
console.log(fiat._ano);
console.log(fiat._categoria);
console.log(fiat._color);
console.log(fiat._model);
console.log(fiat4._ano);
console.log(fiat4._categoria);
console.log(fiat4._color);
console.log(fiat4._model);
console.log(volks);
