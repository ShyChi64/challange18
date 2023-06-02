const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  
  await Thought.deleteMany({});

  
  await User.deleteMany({});

 
  const users = [
      {
          username: "John",
          email: "john@hotmail.com"
      },
      {
          username: "Mary",
          email: "mary@gmail.com"
      }
  ];


  const thoughts = [
      {
          thoughtText: "One day I...",
          username: "Patrick"
      },
      {
          thoughtText: "Why must this happen ...",
          username: "Cassandra"
      }
  ]

 
  await User.collection.insertMany(users);

  
  await Thought.collection.insertMany(thoughts);

  
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});