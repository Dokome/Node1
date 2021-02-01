const getList = (author, keyword) => {
    return [{
        id:1,
        title:'标题A',
        content:'内容A',
        creatTime:1612167816759
    },
    {
        id:2,
        title:'标题B',
        content:'内容B',
        creatTime:1612167834599
    }]
}

const getDetail = id => {
    return {
        id:3,
        title:'标题C',
        content:'内容C',
        creatTime:1612169664293
    }
}

const newBlog = (blogData ={}) => {
    console.log('newBlog blogdata...', blogData);
    return {
        id:3
    }
}

const updateBlog = (id, blogData = {}) => {
    console.log(id, blogData);
    return true;
}

const delBlog = id => {
    return true;
}

module.exports = { getList, getDetail, newBlog, updateBlog, delBlog }