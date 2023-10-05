import express from 'express';
import { route } from './routes';
import bodyParser from 'body-parser'
import { PrismaClient } from '@prisma/client';
import config from './config/config';
import cors from 'cors'

require('dotenv').config({ path: '.env'});

const prisma = new PrismaClient();
prisma.$connect()

//criando backend através do express
const app = express();

app.use(bodyParser.json())
  
app.use(cors(config.cors))

//backend usa rota raiz
app.use('/', route);

app.options('*', cors(config.cors))

//executa o backend na porta mencionada e após, executa a função callback
app.listen(Number(config.api.port), () => {
    console.log('Rodando tá!!!')

})
