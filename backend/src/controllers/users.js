import db from '../../models'

import { uuid } from 'uuidv4';

import CryptoJS from 'crypto-js';

const UserModel = db.User

const getAllUsers = async () => {
  const data = await UserModel.findAll( {  attributes: {exclude: ['password']} })

  if (!data) return []

  return JSON.stringify(data)
}

const createUser = async (name, password, roleDescription, email, role, user_image) => {

  const cryptoPassword =  CryptoJS.AES.encrypt('User Password', password).toString()
  console.log('image', user_image)

  const data = await UserModel.create( { 
    id: uuid(),
    name, 
    password: cryptoPassword,
    role_description: roleDescription,
    email,
    role,
    status: true,
    user_image,
    created_at: new Date(),
    updated_at: new Date(),
  })

  if (!data) return []

  return JSON.stringify(data)
}

const updateUser = async (userId, name, password, roleDescription, email, role, user_image) => {

  let passwordCrypt

  if (password && password !== '') CryptoJS.AES.encrypt('User Password', password).toString()
  try {

    await UserModel.update(
      { 
        name,
        password: passwordCrypt,
        role_description: roleDescription,
        email,
        role,
        user_image
      }, {
      where: {
        id: userId
      }
    });
  
    if (!data) return []
  
    // return JSON.stringify(data)
  } catch (error) {
    console.log('error', error)
    
  }

}

const removeUsers = async (userId) => {

  const data = await UserModel.destroy({
    where: {
      id: userId
    }
  });

  if (!data) return []

  return JSON.stringify(data)
}

export {
  getAllUsers,
  createUser,
  updateUser,
  removeUsers
}