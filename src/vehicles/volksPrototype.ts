import IPrototype from "../Prototype/IPrototype";

export default class volksPrototype implements IPrototype {
    private _model: String;
    private _color: String;
    private _categoria: String;
    private _ano: String;
    constructor(modelo: String, color: String, categoria: String, ano: String) {
        this._ano = ano;
        this._categoria = categoria;
        this._color = color;
        this._model = modelo;
    }
    getModel(): String {
        return this._model;
    }

    setModel(value: String) {
        this._model = value;
    }

    getcolor(): String {
        return this._color;
    }

    setcolor(value: String) {
        this._color = value;
    }

    getCategoria(_categoria: String) {
        return this._categoria;
    }

    setCategoria(value: String) {
        this._categoria = value;
    }

    getAno(_ano: String) {
        return this._ano;
    }

    setAno(value: String) {
        this._ano = value;
    }
    clonar(): volksPrototype {
        const newCar = new volksPrototype(
            this._model,
            this._ano,
            this._color,
            this._categoria,
        );
        return newCar;
    }
}
