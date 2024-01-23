import express from 'express'
import cors from 'cors'
import db from '../../models/index.js'

const { User } = require('../../models');
import { Sequelize } from 'sequelize'

// Routes
import authRoute from './auth'
import usersRooute from './users.js'

const app = express()

app.use(cors( {
  origin: ' http://localhost:5173'
}))

app.use(express.json())

app.use("/auth", authRoute);
app.use("/users", usersRooute);

const test = async () => {
  try {
    console.log('Sequelize', db.sequelize.models)
    await db.sequelize.authenticate();
    // const user = await User.find()
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
test() 


export default app


