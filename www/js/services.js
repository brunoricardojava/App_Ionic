angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Sensor 1',
    lastText: 'Working',
    face: 'img/sensor.png'
  }, {
    id: 1,
    name: 'Sensor 2',
    lastText: 'Working',
    face: 'img/sensor.png'
  }, {
    id: 2,
    name: 'Sensor 3',
    lastText: 'Error',
    face: 'img/sensor.png'
  }, {
    id: 3,
    name: 'Sensor 4',
    lastText: 'Working',
    face: 'img/sensor.png'
  }, {
    id: 4,
    name: 'Sensor 5',
    lastText: 'Error',
    face: 'img/sensor.png'
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
