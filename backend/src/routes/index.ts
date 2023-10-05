import express from "express";
import { mainRouter } from "./mainRoute";
import { adminRoute } from "./adminRoute";
import { authRoute } from "./authRoute";
import { serviceRoute } from "./serviceRoute";
import { addressRoute } from "./addressRoute";

export const route = express.Router();

route.use('/', mainRouter);
route.use('/admin', adminRoute);
route.use('/auth', authRoute);
route.use('/service', serviceRoute);
route.use('/address', addressRoute);