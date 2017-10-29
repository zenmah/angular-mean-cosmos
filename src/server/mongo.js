const mongoose = require('mongoose');
/**
 * Set to Node.js native promises
 * Per http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

const env = require('./env/environment');

function getMongoUri(connection){
  // eslint-disable-next-line max-len
  return `mongodb://${connection.accountName}:${connection.key}@${connection.accountName}.documents.azure.com:${connection.cosmosPort}/${connection.databaseName}?ssl=true`; //&replicaSet=globaldb`;
}

function connect() {
  mongoose.set('debug', true);
  console.log(getMongoUri(env.scriptsDb));
  return mongoose.connect(getMongoUri(env.scriptsDb), { useMongoClient: true });
 }

module.exports = {
  connect,
  mongoose
};
