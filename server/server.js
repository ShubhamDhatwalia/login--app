import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
const app = express();


// middlewares ----

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');



// http get request ---------

app.get('/', (req, res)=>{
    res.status(201).json("Home Get request");
})


// Start server ------

app.listen(8000, ()=>{
    console.log("Server created");
})