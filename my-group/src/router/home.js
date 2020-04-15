import Home from '../views/Home.vue'
export default [
     {
      path:'/home',
      redirect:'/home/AddExam'
    },
    {
      path: '/home',
      name: 'home',
      // meta:{
      //   author:['管理员','浏览者','出题者']
      // },
      component: Home,
      children:[
        {
          //班级管理
          path:'/home/Classmanage',
          name:'Classmanage',
          // meta:{
          //   author:['管理员','出题者','浏览者']
          // },
          component:()=>import('../views/home/ClassRoomMamagement/Classmanage.vue'),
        },
        {
          //教室管理
          path:'/home/Classroommanage',
          name:'Classroommanage',
          // meta:{
          //   author:['管理员','出题者','浏览者']
          // },
          component:()=>import('../views/home/ClassRoomMamagement/Classroommanage.vue'),
        },
        {
          //学生管理
          path:'/home/Studentmanage',
          name:'Studentmanage',
          // meta:{
          //   author:['管理员','出题者','浏览者']
          // },
          component:()=>import('../views/home/ClassRoomMamagement/Studentmanage.vue'),
        },
        {
          //待批班级
          path:'/home/AwaitingApprovalClass',
          name:'AwaitingApprovalClass',
          // meta:{
          //   author:['管理员']
          // },
          component:()=>import('../views/home/LookTest/AwaitingApprovalClass.vue'),
        },
        {
          //阅卷管理-批卷详情
          path:'/home/AwaitingApprovalClass/detail',
          // meta:{
          //   author:['管理员']
          // },
          component:()=>import('../views/home/LookTest/detail/detail.vue')
        },
        {
          //试卷列表
          path:'/home/TestList',
          name:'TestList',
          // meta:{
          //   author:['管理员']
          // },
          component:()=>import('../views/home/TestManagement/TestList.vue'),
        },
        {
          //试卷列表-试卷详情
          path:'/home/TestList/detail',
          // meta:{
          //   author:['管理员']
          // },
          component:()=>import('../views/home/TestManagement/Detail/detail.vue')
        },
        {
          //添加考试
          path:'/home/addTest',
          name:'addTest',
          // meta:{
          //   author:['管理员']
          // },
          component:()=>import('../views/home/TestManagement/addTest.vue'),
        },
        {
          //创建试卷
          path:'/home/createText',
          name:'createText',
          // meta:{
          //   author:['管理员']
          // },
          component:()=>import('../views/home/TestManagement/createText.vue')
        },
        {
          //添加试题
          path:'/home/AddExam',
          name:'AddExam',
          // meta:{
          //   author:['管理员','出题者','浏览者']
          // },
          component:()=>import('../views/home/TestQuestionManagement/AddExam.vue'),
        },
        {
          //查看试题
          path:'/home/Looktest',
          name:'Looktest',
          // meta:{
          //   author:['管理员','出题者','浏览者']
          // },
          component:()=>import('../views/home/TestQuestionManagement/Looktest.vue'),
        },
        {
          //查看试题-编辑试题
          path:'/home/Looktest/redactText',
          // meta:{
          //   author:['管理员','出题者','浏览者']
          // },
          component:()=>import('../views/home/TestQuestionManagement/Detail/redactText.vue')
        },
        {
          //查看试题-试题详情
          path:'/home/looktest/detail',
          // meta:{
          //   author:['管理员','浏览者','出题者']
          // },
          component:()=>import('../views/home/TestQuestionManagement/Detail/Detail.vue')
        },
        {
          //试题分类
          path:'/home/TextType',
          name:'TextType',
          // meta:{
          //   author:['管理员','出题者','浏览者']
          // },
          component:()=>import('../views/home/TestQuestionManagement/TextType.vue'),
        },
        {
          //用户展示
          path:'/home/UserShow',
          name:'UserShow',
          // meta:{
          //   author:['管理员']
          // },
          component:()=>import('../views/home/UserManagement/UserShow.vue'),
          children:[
            // {
            //   path:'/home/UserShow',
            //   redirect:'/home/UserShow/userdata'
            // },
            {
              path:'/home/UserShow/userdata',
              component:()=>import('../views/home/UserManagement/tabsix/userdata.vue'),
              
          // meta:{
          //   author:['管理员']
          // },
            },
            {
              path:'/home/UserShow/bodydata',
              component:()=>import('../views/home/UserManagement/tabsix/bodydata.vue'),
              // meta:{
              //   author:['管理员']
              // },
            },
            {
              path:'/home/UserShow/apijiekou',
              component:()=>import('../views/home/UserManagement/tabsix/apijiekou.vue'),
              // meta:{
              //   author:['管理员']
              // },
            },
            {
              path:'/home/UserShow/bodyandapi',
              component:()=>import('../views/home/UserManagement/tabsix/bodyandapi.vue'),
              // meta:{
              //   author:['管理员']
              // },
            },
            {
              path:'/home/UserShow/viewjiekou',
              component:()=>import('../views/home/UserManagement/tabsix/viewjiekou.vue'),
              // meta:{
              //   author:['管理员']
              // },
            },
            {
              path:'/home/UserShow/bodyandview',
              component:()=>import('../views/home/UserManagement/tabsix/bodyandview.vue'),
              // meta:{
              //   author:['管理员']
              // },
            }

          ]
        },
        {
          //添加用户
          path:'/home/addUser',
          name:'addUser',
          component:()=>import('../views/home/UserManagement/addUser.vue'),
          // meta:{
          //   author:['管理员']
          // },
        },
        
      ]
    }
    
]