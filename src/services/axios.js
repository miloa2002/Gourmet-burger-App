import { api } from '@/api/api'

const addUser = (user) => {
  api.post(`/users`, { user }).then((res) => console.log(res.data))
}

export { addUser }
