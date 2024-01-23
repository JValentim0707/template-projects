import jwt, { decode } from "jsonwebtoken";

require('dotenv').config()

const validateJWT = (req, res, next) => {
  const authHeader = req.headers['authorization']
  console.log('chegamo', req.headers)
  // if (!authHeader) return res.sendStatus(401).json({'message': 'Token Expired'})
  // console.log(authHeader)
  // const token = authHeader.split(' ')[1]
  // jwt.verify(
  //   token,
  //   process.env.ACCESS_TOKEN,
  //   (err, decoded) => {
  //     if (err) return res.sendStatus(403)
  //     req.user = decoded.email
  //     next()
  //   }
  // )

}

module.exports = validateJWT