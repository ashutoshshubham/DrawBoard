const express = require('express');          //method to import any package, here express is imported

//import userRouter
const userRouter = require('./routers/userRouter');



const cors = require('cors')         //to allow request from frontend to backend









//initilizing express
const app = express();                 
const port = 5000;                    //can be anything at the place of 5000







//middlewares

app.use(cors({
    origin : ['http://localhost:3000']
}));

app.use(express.json());                 //convert data from json to js
app.use('/user', userRouter);            //sending request to userRouter





//to start express server
app.listen(port, () => {console.log('express server started')});