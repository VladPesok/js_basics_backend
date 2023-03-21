import express from 'express';
import bodyParser from 'body-parser';

import selfRouter from './routers/self.mjs'

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', selfRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})