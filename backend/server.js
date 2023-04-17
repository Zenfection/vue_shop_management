import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import {MongoDB, print, type} from '@utils'
import { usersRouter, categoriesRouter, productsRouter } from './app/routes/index.js'
import { Exception }  from './app/errors/index.js'
import checkToken from './app/middlewares/auth.js'

const app = express();
app.use(helmet())   //? bảo mật với headers bằng middleware

app.use(cors({    //? bảo mật chính sách request
  origin: process.env.FRONTEND_URL.split(','), // allow to server to accept request from different origin
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept'],

}))
const PORT = process.env.PORT || 3000;

app.use(checkToken)
app.use(express.json())

// routers
app.use('/users', usersRouter)
app.use('/categories', categoriesRouter)
app.use('/products', productsRouter)

const handleMongoDBError = (error) => {
  const { code } = error;
  if (code == 8000) {
      throw new Exception(Exception.DB_USERNAME_PASSWORD);
  } else if (code == 'ENOTFOUND') {
      throw new Exception(Exception.DB_CONNECTION_STRING);
  }
  throw new Exception(Exception.DB_CONNECTION);
};

const startServer = async() => {
  try {
      await MongoDB.connect(process.env.MONGODB_URI, () => {
        print('Connected to MongoDB', type.SUCCESS)
      })
      
      app.listen(PORT, () => {
        print(`Server is running on port ${PORT}`, type.SUCCESS)
      })
  } catch (error) {
      handleMongoDBError(error);
  }
}

await startServer()
