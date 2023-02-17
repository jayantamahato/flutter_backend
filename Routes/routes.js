import express, { Router } from "express";
import { account, makeTransaction, transaction,signIn } from "../userControl/userController.js";
const app = express();
const route = express.Router();

route.get('/', (req, res) => {
    res.send('hello');
})

//adding new account
route.post('/account', account);
//sign in
route.post('/signin',signIn);
// adding transaction
route.post('/maketransaction', makeTransaction);
//fetch all transaction
route.get('/transactions',transaction)

export default route;
