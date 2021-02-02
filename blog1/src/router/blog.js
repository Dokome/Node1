const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require('../controller/blog.js');
const { SuccessModel, ErrorModel } = require('../model/resModel.js');

const handleBlogRouter = (req, res) => {
  const id = req.query.id || '';

  if (req.method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    const blogListData = getList(author, keyword);
    return blogListData.then((result) => {
      return new SuccessModel(result);
    });
  }

  if (req.method === 'POST' && req.path === '/api/blog/new') {
    const newBlogData = newBlog(req.body);
    return newBlogData.then((result) => {
      return new SuccessModel(result);
    });
  }

  if (req.method === 'GET' && req.path === '/api/blog/detail') {
    const blogDetailData = getDetail(id);
    return blogDetailData.then((result) => {
      return new SuccessModel(result);
    });
  }

  if (req.method === 'POST' && req.path === '/api/blog/update') {
    const updateResult = updateBlog(id, req.body);
    return updateResult.then((result) => {
      if (result) {
        return new SuccessModel('更新博客成功');
      } else {
        return new ErrorModel('更新博客失败');
      }
    });
  }

  if (req.method === 'POST' && req.path === '/api/blog/del') {
    let author = 'ZS';
    const delResult = delBlog(id, author);
    return delResult.then((result) => {
      if (result) {
        return new SuccessModel('文章删除成功');
      } else {
        return new ErrorModel('文章删除失败');
      }
    });
  }
};
module.exports = handleBlogRouter;
