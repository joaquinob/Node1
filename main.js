const express = require('express');
const { connectDB } = require('./src/utils/database');
const routerStudent = require('./src/api/routes/student.routes');


const server = express();
server.use(express.json());
connectDB();
server.use('/student', routerStudent);

const PORT = 3001;
server.listen(PORT, ()=>{
    console.log(`Te has conectado a: http://localhost:${PORT}`);
});
