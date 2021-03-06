const { exec } = require('../db/mysql');

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1`;
  if (author) {
    sql += ` and author = '${author}'`;
  }
  if (keyword) {
    sql += ` and title like '%${keyword}%'`;
  }
  sql += ` order by createtime desc`;
  return exec(sql);
};

const getDetail = (id) => {
  let sql = `select * from blogs where id = ${id}`;
  return exec(sql).then((rows) => {
    return rows[0];
  });
};

const newBlog = (blogData = {}) => {
  const title = blogData.title;
  const author = blogData.author;
  const content = blogData.content;
  const createtime = Date.now();
  let sql = `insert into blogs (title,author,content,createtime) values ('${title}','${author}','${content}','${createtime}')`;
  return exec(sql).then((insertData) => {
    console.log('insert data is ', insertData);
    return {
      id: insertData.insertId,
    };
  });
};

const updateBlog = (id, blogData = {}) => {
  const content = blogData.content;
  const title = blogData.title;
  let sql = `update blogs set title='${title}',content='${content}' where id=${id}`;
  return exec(sql).then((updateData) => {
    console.log('updateData is ', updateData);
    if (updateData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

const delBlog = (id, author) => {
  let sql = `delete from blogs where id=${id} and author='${author}'`;
  return exec(sql).then((result) => {
    console.log('delData is ', result);
    if (result.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

module.exports = { getList, getDetail, newBlog, updateBlog, delBlog };
