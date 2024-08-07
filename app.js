import express from "express";
import mongoose from "mongoose";

import connectDB from "./config/db.js";

import StudentRouter from './Routes/studentRouter.js';
import MarkRouter from './Routes/markRouter.js';
import viewRouter from './Routes/viewRouter.js'

const app = express();

//  template engine
app.set('view engine', 'ejs');
app.set('views', './views');


// DataBase
connectDB();


app.get('/api',(req,res) => {
    res.status(200).json({
        status:'Success',
        message:"API HOT 🔥"
    })
})

app.use('/',viewRouter)

app.use('/api/v1/students',StudentRouter);
app.use('/api/v1/marks',MarkRouter);


const PORT = 8000;

app.listen(PORT,() => {
    console.log(`server running port ${PORT}`)
})