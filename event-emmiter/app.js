import EventEmitter from "node:events";

//cerate server

function createServer() {
  const eventEmitter = new EventEmitter();

  // connecct user

  function connect(user) {
    console.log(`${user} just connected`);

    eventEmitter.emit("userConnected", user);
  }

  // disconnect user

  function disconnect(user) {
    console.log(`${user} just disconnected`);

    eventEmitter.emit("userDisconnected", user);
  }

  return {
    connect,
    disconnect,
    on: eventEmitter.on.bind(eventEmitter),
    emit: eventEmitter.emit.bind(eventEmitter),
  };
}

// creste server instance

const chatServer = createServer();

// registering listeners

chatServer.on("userConnected", (user) => {
  console.log(`Welcome ${user}`);
});

chatServer.on("userDisconnected", (user) => {
  console.log(`Goodbye ${user}`);
});


// simulate evenst

chatServer.connect("Nazmul");

chatServer.disconnect("Nazmul");
