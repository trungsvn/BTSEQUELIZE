import express from 'express';
// import {getListlike, getListlikeTypeId} from '../controllers/likeControllers.js';
import addcomment from '../controllers/addcommentControllers.js';

const addcomments = express.Router();

addcomments.post("/addcomment/:userid", addcomment);

export default addcomments;