angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Hectare 1',
    lastText: 'Working',
    qntL: 25, //Variável contendo a quantidade de Litros utilizada pelo Hectare
    qntSensor: 9, //Contem o numero de sensores ativos no hectare selecionado
    lastIrrigation: '10/04/2016', //Contem a data da ultima irrigação feita no hectare selecionado
    nextIrrigation: '28/04/2016', //Contem a data da proxima irrigação a ser feita no hectare selecionado
    luz: 200,  //Luminosidade media do ambiente
    temp: 30,  //Temperatura do ambiente
    umid: 23,  //Umidade do ambiente

  }, {
    id: 1,
    name: 'Hectare 2',
    lastText: 'Working',
    qntL: 40,
    qntSensor: 9, //Contem o numero de sensores ativos no hectare selecionado
    lastIrrigation: '10/04/2016', //Contem a data da ultima irrigação feita no hectare selecionado
    nextIrrigation: '28/04/2016', //Contem a data da proxima irrigação a ser feita no hectare selecionado
    luz: 200,  //Luminosidade media do ambiente
    temp: 30,  //Temperatura do ambiente
    umid: 23,  //Umidade do ambiente
  }, {
    id: 2,
    name: 'Hectare 3',
    lastText: 'Error',
    qntL: 5,
    qntSensor: 9, //Contem o numero de sensores ativos no hectare selecionado
    lastIrrigation: '10/04/2016', //Contem a data da ultima irrigação feita no hectare selecionado
    nextIrrigation: '28/04/2016', //Contem a data da proxima irrigação a ser feita no hectare selecionado
    luz: 200,  //Luminosidade media do ambiente
    temp: 30,  //Temperatura do ambiente
    umid: 23,  //Umidade do ambiente
  }, {
    id: 3,
    name: 'Hectare 4',
    lastText: 'Working',
    qntL: 90,
    qntSensor: 9, //Contem o numero de sensores ativos no hectare selecionado
    lastIrrigation: '10/04/2016', //Contem a data da ultima irrigação feita no hectare selecionado
    nextIrrigation: '28/04/2016', //Contem a data da proxima irrigação a ser feita no hectare selecionado
    luz: 200,  //Luminosidade media do ambiente
    temp: 30,  //Temperatura do ambiente
    umid: 23,  //Umidade do ambiente
  }, {
    id: 4,
    name: 'Hectare 5',
    lastText: 'Error',
    qntL: 2,
    qntSensor: 9, //Contem o numero de sensores ativos no hectare selecionado
    lastIrrigation: '10/04/2016', //Contem a data da ultima irrigação feita no hectare selecionado
    nextIrrigation: '28/04/2016', //Contem a data da proxima irrigação a ser feita no hectare selecionado
    luz: 200,  //Luminosidade media do ambiente
    temp: 30,  //Temperatura do ambiente
    umid: 23,  //Umidade do ambiente
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
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
