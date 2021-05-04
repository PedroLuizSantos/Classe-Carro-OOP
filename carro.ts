class Carro {
  private _nome: string;
  private _modelo: string;
  private _preco: number;

  mostrarNome() {
    this._nome = "Audi T6";
    console.log(this._nome);
  }

  get nome(): string {
    return this._nome;
  }

  set modelo(modelo: string) {
    this._modelo = "Sedan";
  }
}
