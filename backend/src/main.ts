import express from 'express';
import bodyParser from 'body-parser';
import { route } from './routes';
import cors from 'cors'

const prisma = new PrismaClient();
prisma.$connect()

const app = express();

app.use(bodyParser.json())

app.use(cors(config.cors))

app.use('/', route)

app.options('*', cors(config.cors))

app.listen(Number(config.api.port), () => {
  console.log('🚀 Backend Rodando...')
})