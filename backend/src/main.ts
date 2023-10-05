import express from 'express';
import { route } from './routes';
import bodyParser from 'body-parser'
import { PrismaClient } from '@prisma/client';
import config from './config/config';

require('dotenv').config({ path: '.env'});

const prisma = new PrismaClient();
prisma.$connect()

//criando backend através do express
const app = express();

app.use(bodyParser.json())
//backend usa rota raiz
app.use('/', route);

//executa o backend na porta mencionada e após, executa a função callback
app.listen(Number(config.api.port), () => {
    console.log('Rodando tá!!!')

})
