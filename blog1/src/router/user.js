const { userLogin } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel'); 

const handleUserRouter = (req, res) => {

    const { username, password } = req.body;
    if (req.method === 'POST' && req.path === '/api/user/login') {
        const loginResult = userLogin(username, password);
        if (loginResult) {
            return new SuccessModel('登录成功');
        } else {
            return new ErrorModel('账号或密码错误');
        }
    }

}
module.exports = handleUserRouter;