class RecintosZoo {
  constructor() {
    this.recintos = [
      { numero: 1, bioma: 'savana', tamanhoTotal: 10, animais: [{ especie: 'macaco', quantidade: 3 }] },
      { numero: 2, bioma: 'floresta', tamanhoTotal: 5, animais: [] },
      { numero: 3, bioma: 'savana e rio', tamanhoTotal: 7, animais: [{ especie: 'gazela', quantidade: 1 }] },
      { numero: 4, bioma: 'rio', tamanhoTotal: 8, animais: [] },
      { numero: 5, bioma: 'savana', tamanhoTotal: 9, animais: [{ especie: 'leão', quantidade: 1 }] }
    ];

    this.animaisPermitidos = {
      'leão': { tamanho: 3, biomas: ['savana'] },
      'leopardo': { tamanho: 2, biomas: ['savana'] },
      'crocodilo': { tamanho: 3, biomas: ['rio'] },
      'macaco': { tamanho: 1, biomas: ['savana', 'floresta'] },
      'gazela': { tamanho: 2, biomas: ['savana'] },
      'hipopotamo': { tamanho: 4, biomas: ['savana', 'rio'] }
    };
  }

  analisaRecintos(animal, quantidade) {
    //validando o animal
    if (!this.animaisPermitidos[animal]) {
      return { erro: "Animal inválido", recintosViaveis: null };
    }

    // Validando a quantidade
    if (quantidade <= 0) {
      return { erro: "Quantidade inválida", recintosViaveis: null };
    }

    const infoAnimal = this.animaisPermitidos[animal];
    const recintosViaveis = [];

    for (const recinto of this.recintos) {
      let espacoOcupado = recinto.animais.reduce((total, a) => {
        const info = this.animaisPermitidos[a.especie];
        return total + (info.tamanho * a.quantidade);
      }, 0);

      let espacoDisponivel = recinto.tamanhoTotal - espacoOcupado;

      // Verificando bioma e espaço disponível
      if (infoAnimal.biomas.includes(recinto.bioma) && espacoDisponivel >= (infoAnimal.tamanho * quantidade)) {
        recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoDisponivel - infoAnimal.tamanho * quantidade} total: ${recinto.tamanhoTotal})`);
      }
    }

    if (recintosViaveis.length === 0) {
      return { erro: "Não há recinto viável", recintosViaveis: null };
    }

    return { erro: null, recintosViaveis };
  }
}

export { RecintosZoo as RecintosZoo };
