import { api } from '@/api/api'

export default {
  addUser(user) {
    return api.post('/users', user)
  },
  getUsers() {
    return api.get('/users')
  }
}
