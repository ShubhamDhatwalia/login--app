import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import  connect  from './database/connection.js';
import router from "./Router/route.js";
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


// ----------Api routes ----------------

app.use('/api', router);



//  Start Server only when valid connection is created

connect("mongodb://localhost:27017/login")
  .then(() => {
    try {
      app.listen(8080, () => {
        console.log("Server created");
      });
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid Database connection");
  });




