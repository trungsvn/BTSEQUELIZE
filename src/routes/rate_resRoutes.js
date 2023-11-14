import express from 'express';
import { getRate_res, getRate_resTypeId } from '../controllers/rate_resController.js';

const rate_resRoutes = express.Router();

rate_resRoutes.get("/like/getListrate_res", getRate_res );
rate_resRoutes.get("/like/getListrate_res/:userId", getRate_resTypeId);

export default rate_resRoutes;