import express from "express";
import { mainRouter } from "./mainRoute";
import { adminRoute } from "./adminRoute";
import { authRoute } from "./authRoute";
import { illnessRoute } from "./illnessRoute";
import { addressRoute } from "./addressRoute";
import { patientRoute } from "./patientRoute";

export const route = express.Router();

route.use('/', mainRouter);
route.use('/admin', adminRoute);
route.use('/auth', authRoute);
route.use('/illness', illnessRoute);
route.use('/address', addressRoute);
route.use('/patient', patientRoute)