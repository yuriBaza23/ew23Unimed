import express from "express";
import { mainRouter } from "./mainRoute";
import { adminRoute } from "./adminRoute";
import { authRoute } from "./authRoute";

export const route = express.Router();

route.use('/', mainRouter);
route.use('/admin', adminRoute);
route.use('/auth', authRoute)