import express from "express";
import Joi from 'joi'

import jwt from "jsonwebtoken";

require('dotenv').config()

// Controller Function
import { getAllUsers, createUser, removeUsers, updateUser } from "../controllers/users";

const router = express.Router();

router.get('/all', async (req, res) => {

  const allUsers = await getAllUsers()

  res.send(JSON.parse(allUsers));
});

router.post("/create", async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi
      .string()
      .required(),

      email: Joi
        .string()
        .email()
        .required(),

      password: Joi
        .string()
        .required(),

      roleDescription: Joi
        .string()
        .required(),

      userImage: Joi
        .any()
    })

    const {value, error} = schema.validate(req.body);

    const fullName = `${value.firstName} ${value.lastName}`

    console.log('value', value)

    const resData = await createUser(fullName, value.password, value.roleDescription, value.email, value.role, value.userImage)

    return res.status(200).json({'message': 'Success'})


  } catch (error) {
    return res.status(400).json({'message': error})
  }
});

router.put("/update/:userId", async (req, res, next) => {
  try {
    console.log('tes', req.body)
    const schema = Joi.object({
      name: Joi
      .string(),

      email: Joi
        .string()
        .email(),

      password: Joi
        .string(),

      roleDescription: Joi
        .string(),

      userImage: Joi
        .any(),
    })

    const {value, error} = schema.validate(req.body);

    const { userId } = req.params

    const fullName = `${value.firstName} ${value.lastName}`

    const resData = await updateUser(userId, fullName, value.password, value.roleDescription, value.email, value.role, value.userImage)

    return res.status(200).json({'message': 'Success'})

  } catch (error) {
    return res.status(400).json({'message': error})
  }
});

router.delete('/remove/:userId', async (req, res) => {

  console.log('delete', req.params)

  const { userId } = req.params

  const messageDelete = await removeUsers(userId)

  return res.status(200).json({'message': 'Success'})
});
module.exports = router;