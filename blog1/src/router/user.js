const handleUserRouter = (req, res) => {

     if (req.method === 'POST' && req.path === '/api/user/login') {
        return {
            msg:'这是删除博客的接口'
        } 
    }
}
module.exports = handleUserRouter;