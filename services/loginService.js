import http from "./httpService";

const serverRoute = "/api/user";

const LoginService = {
  async getUserByIds(ids) {
    return http.post(`${serverRoute}getUserByIds`, {
      userId: ids,
    }).then(res => res.data);
  },
};



export default LoginService;
