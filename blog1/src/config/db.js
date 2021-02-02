const env = process.env.NODE_ENV; //环境参数

//配置
let MYSQL_CONF;

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'blog',
  };
}

if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'blog',
  };
}

module.exports = {
  MYSQL_CONF,
};
