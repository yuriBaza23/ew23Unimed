import dotenv from 'dotenv'

dotenv.config()

export default {
  env: process.env.NODE_ENV,
  api: {
    port: process.env.PORT || '3333',
    key: process.env.API_KEY || 'e693fe84b1f0fa7fe0c8abfd9f29cd9b3f7c443b'
  },
  cors: {
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: '*',
    preflightContinue: false,
  }
}