import express from 'express';
// import {getListlike, getListlikeTypeId} from '../controllers/likeControllers.js';
// import addcomment from '../controllers/addcommentControllers.js';
// import userorders from '../controllers/addcommentControllers.js';
import userorder from '../controllers/user_orderControllers.js';

const user_orders = express.Router();

user_orders.post("/userorders/:userid/:foodid", userorder);

export default user_orders;