import express from 'express';
import {getListlike, getListlikeTypeId} from '../controllers/likeControllers.js';

const likeRoutes = express.Router();

likeRoutes.get("/like/getListlike", getListlike );
likeRoutes.get("/like/getListlike/:userId", getListlikeTypeId);

export default likeRoutes;