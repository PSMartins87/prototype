import IPrototype from "../Prototype/IPrototype";

export default class volksPrototype implements IPrototype {
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
    
    clonar(): volksPrototype {
        return this;
    }
    clonarDeep(): this {
        const newCar = Object.assign({}, this);
        return newCar;
    }
}
