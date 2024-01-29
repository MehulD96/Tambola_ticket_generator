import express from  'express';
import {dbConnection} from './src/config/db.js';
import * as dotenv from "dotenv";
import router from './src/routes/route.js'
dotenv.config()

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/',router);

dbConnection();

app.listen(PORT,()=>{
    console.log(`server is listening at port ${PORT}`);
});