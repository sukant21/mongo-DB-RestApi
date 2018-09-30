// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    text: 'eat dinner'
  }, {
    $set : {
      completed: false
    }
  }, {
      returnOriginal: false
    }
  ).then((result) => {
    console.log(result);
  });

  db.close();
});
