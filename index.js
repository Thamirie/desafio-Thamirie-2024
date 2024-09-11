import { RecintosZoo } from './recintos-zoo.js';

// Função principal para realizar os testes
function executarTeste(animal, quantidade) {
  const zoo = new RecintosZoo();
  const resultado = zoo.analisaRecintos(animal, quantidade);

  if (resultado.erro) {
    console.log(`Erro: ${resultado.erro}`);
  } else {
    console.log(`Recintos viáveis para ${quantidade} ${animal}(s):`);
    resultado.recintosViaveis.forEach(recinto => {
      console.log(recinto);
    });
  }
}

// Testes com diferentes entradas, todas as letras minúsculas!

executarTeste('macaco', 2);
executarTeste('macaco', 2); 
executarTeste('leão', 1);
executarTeste('crocodilo', 1);
executarTeste('unicórnio', 1); 
executarTeste('macaco', 10);
