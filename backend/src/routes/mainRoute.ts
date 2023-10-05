import express, { Request, Response, request } from "express";

export const mainRouter = express.Router();

mainRouter.get('/', (_: Request, res: Response) => {
    res.json({
        project: 'Hackathon Unimed EW23',
        accountable: {
        name: "Yuri Baza",
            contact: "yuribaza@newhappen.com.br"
        },
        devs: [
        {
            name: "William Wallace",
            contact: "williamwtr@outlook.com"
        },
        {
            name: "Pedro Gradella",
            contact: "unbigou@gmail.com"
        }
        ]
    })
})