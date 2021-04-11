import { instanceAxios } from "./axios-config"



// mock request, only for test
export const authAPI = {
  auth: () => {
    return instanceAxios.get('todos')
      .then(data => data.data)
  }
}
