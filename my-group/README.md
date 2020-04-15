# exam

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# GIT
重新创建
### 首先要明白四个空间：远程仓库，本地仓库，本地缓存区，本地工作区；
####远程仓库：
    该仓库是一个集中的数据仓库，正常情况下，所有参与开发的人员的代码最后都会提交到该仓库的自己的分支上，再由具有合并权限的人员来合并所有分支；

####本地仓库：
	一般来说，本地仓库是由开发人员通过clone复制远程仓库中的某个分支的数据到本地而产生的，但git不是集中式的版本控制，而是分布式的版本控制，他们的区别就是，分布式版本控制中每一个仓库都能具有远程仓库的作用，而集中式的版本控制中远程仓库是不能被其他参与开发的人备份的；

####本地缓存：
	在本地修改数据后（一般是指我们在编辑器中修改某个文件），git监测到该数据与本地数据仓库的数据不一致，会提示将该修改增加（add）到缓存区，缓存区中的文件可以用来与本地仓库中的文件进行比较（difftool），这个用处目前感觉主要用于当我们修改很多文件时，最后不记得自己修改了那些文件，如果没有缓存区，我们直接提交的话，很容易会导致很多疏忽。我们在编辑器中修改了文件后（本地工作区），本地缓存中不包含我们的修改的，只有当我们把本次的修改add到缓存区的时候，缓存区中才有本次的修改，这表明我们的每一次修改都必须手动add到本地缓存中才能在使用commit命令时将其添加到本地仓库。

####本地工作区：
	也就是我们的编辑器的空间；
	
##分支命名规则
1.主分支：master
2.CICD： autoDeploy
3.开发分支：develop
4.功能分支：feature-分支名称/功能名称 (例： git checkout -b feature-autoMLlist)
5.分支发布：release-日期
6.bug 分支修复：bugfix-日期
##分支开发节点
	鉴于此后在代码管理流程上，需按严格要求执行，所以在每日开发的功能或者bug必须于当日完成以及提交pull request,便于代码review。
##开发流程
> 在develop分支，多人需要开发不同的功能，这里就会用到feature分支。团队中的每个人都从Github克隆一个项目，然后新建自己的feature分支。

* git clone xxxx.git
* git checkout develop
* git checkout -b feature-×× develop    # 从develop分支新建并检出feature分支）
> 这里可以进行一些功能开发，并不断的add和commit
* git checkout develop    # 切换回develop分支
* git pull origin develop    # 更新远端代码，看develop分支是否有更新（无更新）
* git checkout feature-××    # 切换回feature分支
* git rebase develop    # 合并develop分支到feature分支，并解决冲突（无冲突）
* git checkout develop    # 切换回develop分支
* git merge --no-ff feature-hu    # 合并feature分支到develop分支
* git push origin develop   # 推送develop分支到远端

###下面遇到冲突解决
#####对于团队其他成员开发，操作如下，并打算在上面提交后进行push操作
* git checkout -b feature-zz develop    # 从develop分支新建并检出feature分支
> 这里可以进行一些功能开发，并不断的add和commit
* git checkout develop    # 切换回develop分支
* git pull origin develop    # 更新远端代码，看develop分支是否有更新（有更新）
* git checkout feature-××    # 切换回feature分支
* git rebase develop    # 合并develop分支到feature分支，并解决冲突（有冲突）
> 这里需要进行冲突解决
* git add .    # 解决完冲突之后执行add操作
* git rebase --continue    # 继续刚才的rebase操作
* git checkout develop    # 切换回develop分支
* git merge --no-ff feature-××    # 合并feature分支到develop分支（无冲突）
* git push origin develop   # 推送develop分支到远端
