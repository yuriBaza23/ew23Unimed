import express from "express";
import { mainRouter } from "./mainRoute";

export const route = express.Router();

route.use('/', mainRouter)