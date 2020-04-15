const getRouter = (author,routes) =>{//返回当前用户信息返回的路由模块
    let authorRouter = routes.filter(item => item.meta.author.indexOf(author) > -1);
    authorRouter.forEach(item => {
        if(item.children){
            item.children = getRouter(author,item.children)
        }
        
    })
    return authorRouter
}

const getAside = (author,asideList) =>{//返回当前用户信息返回的路由模块
    let authorAside = asideList.filter(item => item.meta.author.indexOf(author) > -1);
    authorAside.forEach(item => {
        if(item.children){
            item.children = getAside(author,item.children)
        }
        
    })
    return authorAside
}




export {
    getRouter,
    getAside
}