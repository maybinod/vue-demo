import request from '@/utils/request'

const getUsers = () =>
  new Promise((resolve, reject) => {
    return request({
      url: '/users',
      method: 'get'
    })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })

export default {
  getUsers
}
