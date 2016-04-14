angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Hectare 1',
    lastText: 'Working',
    qntL: 5 //Variável contendo a quantidade de Litros utilizada pelo Hectare

  }, {
    id: 1,
    name: 'Hectare 2',
    lastText: 'Working',
    qntL: 40
  }, {
    id: 2,
    name: 'Hectare 3',
    lastText: 'Error',
    qntL: 5
  }, {
    id: 3,
    name: 'Hectare 4',
    lastText: 'Working',
    qntL: 90
  }, {
    id: 4,
    name: 'Hectare 5',
    lastText: 'Error',
    qntL: 2
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
