import db from '../../models'

const UserModel = db.User

const getUser = async (email) => {
  const data = await UserModel.findOne({ where: { email: email } })

  if (!data) return null

  return data.dataValues
}

export {
  getUser
}