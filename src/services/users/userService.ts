import { API } from '../api'

const checkUser = (user: IUser) => {
  return new Promise(async (resolve, reject) => {
    const checkUser: IUser[] = await API.get(`/users?username=${user.username}`)
    if (checkUser.length) {
      reject('Error')
    }

    resolve(true)
  })
}

export const registerUser = async (user: IUser) =>
  checkUser(user).then(() => API.post('/users', user))

export const loginUser = async (user: IUser): Promise<IUser> => {
  return new Promise(async (resolve, reject) => {
    const findUser: IUser[] = await API.get(
      `/users?username=${user.username}&password=${user.password}`
    )

    if (!findUser.length) {
      reject()
    }

    resolve(findUser[0])
  })
}
