const MongoClient = require("mongodb").MongoClient;

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log("DB is already initialized.");
    return callback(null, _db);
  }
  MongoClient.connect("mongodb+srv://raeckton:Re0800704!@cluster0.4j78u.mongodb.net/Cards")
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};





const getDb = () => {
  if (!_db) {
    throw Error("DB not initialized");
  }
  return _db;
};

module.exports = { initDb, getDb };