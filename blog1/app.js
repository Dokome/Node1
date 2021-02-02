const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');
const querystring = require('querystring');
const { resolve } = require('path');
const { rejects } = require('assert');

//用于处理POST DATA
const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({});
      return;
    }
    if (req.headers['content-type'] !== 'application/json') {
      resolve({});
      return;
    }
    let postData = '';
    req.on('data', (chunk) => {
      postData += chunk.toString();
    });
    req.on('end', () => {
      if (!postData) {
        resolve({});
      }
      resolve(JSON.parse(postData));
    });
  });
};

const serverHandle = (req, res) => {
  //设置返回格式JSON
  res.setHeader('Content-type', 'application/json');
  const url = req.url;
  req.path = url.split('?')[0];

  req.query = querystring.parse(url.split('?')[1]);
  getPostData(req).then((postData) => {
    req.body = postData;

    //处理Blog路由
    const blogResult = handleBlogRouter(req, res);
    if (blogResult) {
      blogResult.then((blogData) => {
        res.end(JSON.stringify(blogData, null, 2));
      });
      return;
    }

    //处理User路由
    const userResult = handleUserRouter(req, res);
    if (userResult) {
      userResult.then((userData) => {
        res.end(JSON.stringify(userData, null, 2));
      });
      return;
    }

    res.writeHead(404, { 'Content-type': 'text/plain' });
    res.write('404 Not Found\n');
    res.end();
  });
};

module.exports = serverHandle;
