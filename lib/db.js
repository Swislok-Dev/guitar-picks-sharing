import mongoose from 'mongoose';

const connection = {};
const uri = process.env.LOCAL_MONGODB_URI;

async function connect() {
  if (connection.isConnected) {
    console.log('already connected');
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected) {
      console.log('use previous connection');
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose
    .connect(uri)
    .then((connection.isConnecting = true))
    .then(console.log('Connecting to database'));

  if (db.connections[0].readyState) {
    connection.isConnected = true;
    connection.isConnecting = false;
    connection.status = db.connections[0].readyState;
  }
}

async function disconnect() {
  if (process.env.NODE_ENV == 'production') {
    await mongoose.disconnect();
    connection.isConnected = false;
  } else {
    console.log('Development running; not disconnected');
  }
}

const db = { connect, disconnect };
export default db;
