import { API } from '../api'

const checkUser = (user: any) => {
  return new Promise(async (resolve, reject) => {
    const checkUser: any[] = await API.get(`/users?username=${user.username}`)
    if (checkUser.length) {
      reject('Error')
    }

    resolve(true)
  })
}

export const registerUser = async (user: any) =>
  checkUser(user).then(() => API.post('/users', user))
