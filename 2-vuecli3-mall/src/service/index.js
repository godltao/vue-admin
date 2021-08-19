import axiosRequest from "network/axios";

export default {
  login: async (param) => {
    return await axiosRequest({
      url: '/login',
      data: param,
      method: 'post',
    }).then(res => res.data).catch(reject => {
      reject()
    })
  },

  goodsList: async (page, size) => {
    return await axiosRequest({
      url: '/goods',
      params: {
        page: page,
        size: size
      },
      methods: 'GET'
    }).then(res => res.data).catch(reject => {
      reject()
    })
  },

  getRouters: async (token) => {

  }
}
