import express, {Request, Response} from 'express';
import bodyParser from 'body-parser'
import {productsRoute} from "./routes/products-route";
import {addressesRouter} from "./routes/addresses-route";

const app = express();
const port = 3000;

app.use(bodyParser({}))
app.use('/products', productsRoute)
app.use('/addresses', addressesRouter)

app.listen(port, () => {
    console.log('Your port is ' + port)
})