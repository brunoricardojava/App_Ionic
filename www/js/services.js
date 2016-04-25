angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Hectare 1',
    lastText: 'Attention',
    qntL: 25, //Variável contendo a quantidade de Litros utilizada pelo Hectare
    qntSensor: 957, //Contem o numero de sensores ativos no hectare selecionado
    lastIrrigation: '04/10/2016', //Contem a data da ultima irrigação feita no hectare selecionado
    nextIrrigation: '04/28/2016', //Contem a data da proxima irrigação a ser feita no hectare selecionado
    luz: 200,  //Luminosidade media do ambiente
    temp: 30,  //Temperatura do ambiente
    umid: 23,  //Umidade do ambiente

  }, {
    id: 1,
    name: 'Hectare 2',
    lastText: 'Attention',
    qntL: 40,
    qntSensor: 968, //Contem o numero de sensores ativos no hectare selecionado
    lastIrrigation: '04/10/2016', //Contem a data da ultima irrigação feita no hectare selecionado
    nextIrrigation: '04/28/2016', //Contem a data da proxima irrigação a ser feita no hectare selecionado
    luz: 200,  //Luminosidade media do ambiente
    temp: 30,  //Temperatura do ambiente
    umid: 23,  //Umidade do ambiente
  }, {
    id: 2,
    name: 'Hectare 3',
    lastText: 'Working',
    qntL: 5,
    qntSensor: 989, //Contem o numero de sensores ativos no hectare selecionado
    lastIrrigation: '04/10/2016', //Contem a data da ultima irrigação feita no hectare selecionado
    nextIrrigation: '04/28/2016', //Contem a data da proxima irrigação a ser feita no hectare selecionado
    luz: 200,  //Luminosidade media do ambiente
    temp: 30,  //Temperatura do ambiente
    umid: 23,  //Umidade do ambiente
  }, {
    id: 3,
    name: 'Hectare 4',
    lastText: 'Critical',
    qntL: 90,
    qntSensor: 1000, //Contem o numero de sensores ativos no hectare selecionado
    lastIrrigation: '04/10/2016', //Contem a data da ultima irrigação feita no hectare selecionado
    nextIrrigation: '04/28/2016', //Contem a data da proxima irrigação a ser feita no hectare selecionado
    luz: 200,  //Luminosidade media do ambiente
    temp: 30,  //Temperatura do ambiente
    umid: 23,  //Umidade do ambiente
  }, {
    id: 4,
    name: 'Hectare 5',
    lastText: 'Working',
    qntL: 2,
    qntSensor: 873, //Contem o numero de sensores ativos no hectare selecionado
    lastIrrigation: '04/10/2016', //Contem a data da ultima irrigação feita no hectare selecionado
    nextIrrigation: '04/28/2016', //Contem a data da proxima irrigação a ser feita no hectare selecionado
    luz: 200,  //Luminosidade media do ambiente
    temp: 30,  //Temperatura do ambiente
    umid: 23,  //Umidade do ambiente
  }];

  return {
    all: function() {
      return chats;
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
