let carro_1 = new Carro();
carro_1.mostrarNome();

const resultado: HTMLElement = document.getElementById("Resultado");
resultado.innerHTML = "carro: " + carro_1.nome;
