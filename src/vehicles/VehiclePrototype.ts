export default abstract class VehiclePrototype {
    private _model: String;
    private _factory: String;
    private _categoria: String;
    private _ano: Date;
    constructor(modelo: String, factory: String, categoria: String, ano: Date) {
        this._ano = ano;
        this._categoria = categoria;
        this._factory = factory;
        this._model = modelo;
    }

    getModel(): String {
        return this._model;
    }

    setModel(value: String) {
        this._model = value;
    }

    getFactory(): String {
        return this._factory;
    }

    setFactory(value: String) {
        this._factory = value;
    }

    getCategoria(_categoria: String) {
        return this._categoria;
    }

    setCategoria(value: String) {
        this._categoria = value;
    }

    getAno(_ano: Date) {
        return this._ano;
    }

    setAno(value: Date) {
        this._ano = value;
    }

    clonar() {}
    clonarDeep(){}
}
