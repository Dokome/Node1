const { userLogin } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleUserRouter = (req, res) => {
  const { username, password } = req.body;
  if (req.method === 'POST' && req.path === '/api/user/login') {
    const loginResult = userLogin(username, password);
    return loginResult.then((data) => {
      if (data.username) {
        return new SuccessModel(`欢迎您,${data.realname}`);
      } else {
        return new ErrorModel('账号或密码错误');
      }
    });
  }
};
module.exports = handleUserRouter;
