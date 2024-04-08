const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://dbUser:D5i4e3123-g4o5@cluster0.o6epbot.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao banco de dados');} catch(error) {
    console.error('conexao zoada', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;