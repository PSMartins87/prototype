import FiatPrototype from "./vehicles/FiatPrototype";
//import volksPrototype from "./vehicles/volksPrototype";
const fiat = new FiatPrototype("uno","branco","passeio","1999");
const fiat1 = fiat.clonar();
const fiat2 = fiat.clonarDeep();
fiat1._ano = "2018"
fiat1._color= "branco";
fiat1._categoria ="passeio";
fiat1._model = "Strada";
fiat2._ano = "2019"
fiat2._color= "preto";
fiat2._categoria ="passeio";
fiat2._model = "Toro";
console.log("Fiat original");
console.log("modelo",fiat._model);
console.log("ano",fiat._ano);
console.log("cor",fiat._color);
console.log("tipo",fiat._categoria);
console.log();
console.log("Fiat shallow copy");
console.log("modelo",fiat1._model);
console.log("ano",fiat1._ano);
console.log("cor",fiat1._color);
console.log("tipo",fiat1._categoria);
console.log();
console.log("Fiat deep copy");
console.log("modelo",fiat2._model);
console.log("ano",fiat2._ano);
console.log("cor",fiat2._color);
console.log("tipo",fiat2._categoria);

