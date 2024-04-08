const express = require('express');
const connectDB = require('./database');
const routes = require('./src/routes/userRoutes');

//abaixo de PORT
const app = express();
const PORT = 3000;
connectDB();
app.use(express.json());
app.use('/api', routes);
app.listen(PORT, () =>{
  console.log('Servidor rodando na porta ' + PORT, 'http://localhost:' + PORT);
});
