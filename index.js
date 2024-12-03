import express from 'express';
import routes  from './routes/index.js';
import bodyParser from 'body-parser';
const app = express();
const PORT = 5000;
import cors from 'cors';
import mongoose from './utils/database.js';
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.set('view engine', 'handlerbars');

app.use(cors());


app.use('/v1/api',routes);

app.listen(PORT,() => {
    console.info(`http://localhost:`+PORT)
})