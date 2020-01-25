import socketio from 'socket.io-client';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const socket = socketio(BASE_URL, {
  autoConnect: false,
});

function subscribetoNewDevs(subscribeFunction) {
  socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs,
  };

  socket.connect();
}

function disconnect() {
  if(socket.connected) {
    socket.disconnect();
  }
}

export {
  connect,
  disconnect,
  subscribetoNewDevs,
};