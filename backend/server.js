import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import {MongoDB, print, type} from './app/utils/index.js'
import { usersRouter, studentsRouter } from './app/routes/index.js'
import { Exception }  from './app/errors/index.js'
import checkToken from './app/middlewares/auth.js'

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
}))
const PORT = process.env.PORT || 3000;

app.use(checkToken)
app.use(express.json())

// routers
app.use('/users', usersRouter)
app.use('/students', studentsRouter)

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

startServer()
