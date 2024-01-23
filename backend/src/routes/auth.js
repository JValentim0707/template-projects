import express from "express";
import Joi from 'joi'
import jwt from "jsonwebtoken";

import CryptoJS from 'crypto-js';

// import validateJWT from '../../middleware/validateJWT'

// import fsPromises from 'fs/promises'

require('dotenv').config()

// Controller Function
import { getUser } from "../controllers/auth";

const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    const schema = Joi.object({
      email: Joi
        .string()
        .email()
        .required(),

      password: Joi
        .string()
        .required(),
    })

    const {value, error} = schema.validate(req.body);

    if (error) return res.status(400).json({'message': error})

    const user = await getUser(value.email)

    if (!user) return res.status(401).json({'message': 'User Not Found'})

    const bytes  = CryptoJS.AES.decrypt(user.password, value.password);
    const validatePassword = bytes.toString(CryptoJS.enc.Utf8);
    
    const validate = validatePassword ? true : false

    if (validate) {
      const accessToken = jwt.sign(
        { email: user.email, role: user.role },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '30s' }
      )

      const refreshToken = jwt.sign(
        { email: user.email, role: user.role },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '30s' }
      )

      const resUSer = {
        name: user.name,
        email: user.email,
        role: user.role
      }

      res.json({ accessToken: accessToken, user: user });
    }

  } catch (error) {
    return res.status(400).json({'message': error})
  }
});

module.exports = router;