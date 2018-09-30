// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5bb06f38da8da61778f72180')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log('unable to fetch data from the db', err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log('Count Todos');
    console.log(count);
  }, (err) => {
    console.log('unable to fetch data from the db', err);
  });

  db.close();
});
