import IPrototype from "../Prototype/IPrototype";
export default class FiatPrototype implements IPrototype {
    _model: String;
    _color: String;
    _categoria: String;
    _ano: String;
    constructor(modelo: String, color: String, categoria: String, ano: String) {
        this._ano = ano;
        this._categoria = categoria;
        this._color = color;
        this._model = modelo;
    }

    clonar(): FiatPrototype {
        return this;
    }
    clonarDeep(): this {
        const newCar = Object.assign({}, this);
        return newCar;
    }
}
