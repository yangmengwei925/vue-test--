import Vue from 'vue'
import Router from 'vue-router'
import cookie from 'js-cookie';
import store from '../store/store';
console.log(store)
Vue.use(Router)

 let router=new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path:'/',
    //   redirect:'/login'
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: ()=>import('../views/Login.vue')
    // },
//  {
//    path:'/home',
//    redirect:'/home/AddExam'
//  },
//  {
//    path: '/home',
//    name: 'home',
//  component: ()=>import('./views/Home.vue'),
//    children:[
//         {
//           //班级管理
//           path:'/home/Classmanage',
//           name:'Classmanage',
//           component:()=>import('./views/home/ClassRoomMamagement/Classmanage.vue'),
//         },
//         {
//           //教室管理
//           path:'/home/Classroommanage',
//           name:'Classroommanage',
//           component:()=>import('./views/home/ClassRoomMamagement/Classroommanage.vue'),
//         },
//         {
//           //学生管理
//           path:'/home/Studentmanage',
//           name:'Studentmanage',
//           component:()=>import('./views/home/ClassRoomMamagement/Studentmanage.vue'),
//         },
//         {
//           //待批班级
//           path:'/home/AwaitingApprovalClass',
//           name:'AwaitingApprovalClass',
//           component:()=>import('./views/home/LookTest/AwaitingApprovalClass.vue'),
//         },
//         {
//           //阅卷管理-批卷详情
//           path:'/home/AwaitingApprovalClass/detail',
//           component:()=>import('./views/home/LookTest/detail/detail.vue')
//         },
//         {
//           //试卷列表
//           path:'/home/TestList',
//           name:'TestList',
//           component:()=>import('./views/home/TestManagement/TestList.vue'),
//         },
//         {
//           //试卷列表-试卷详情
//           path:'/home/TestList/detail',
//           component:()=>import('./views/home/TestManagement/Detail/detail.vue')
//         },

//         {
//           //添加考试
//           path:'/home/addTest',
//           name:'addTest',
//           component:()=>import('./views/home/TestManagement/addTest.vue'),
//         },
//         {
//           //创建试卷
//           path:'/home/createText',
//           name:'createText',
//           component:()=>import('./views/home/TestManagement/createText.vue')
//         },
//         {
//           //添加试题
//           path:'/home/AddExam',
//           name:'AddExam',
//           component:()=>import('./views/home/TestQuestionManagement/AddExam.vue'),
//         },
//         {
//           //查看试题
//           path:'/home/Looktest',
//           name:'Looktest',
//           component:()=>import('./views/home/TestQuestionManagement/Looktest.vue'),
//         },
//         {
//           //查看试题-编辑试题
//           path:'/home/Looktest/redactText',
//           component:()=>import('./views/home/TestQuestionManagement/Detail/redactText.vue')
//         },
//         {
//           //查看试题-试题详情
//           path:'/home/looktest/detail',
//           component:()=>import('./views/home/TestQuestionManagement/Detail/Detail.vue')
//         },
//         {
//           //试题分类
//           path:'/home/TextType',
//           name:'TextType',
//           component:()=>import('./views/home/TestQuestionManagement/TextType.vue'),
//         },
//         {
//           //用户展示
//           path:'/home/UserShow',
//           name:'UserShow',
//           component:()=>import('./views/home/UserManagement/UserShow.vue'),
//           children:[
//             {
//               path:'/home/UserShow',
//               redirect:'/home/UserShow/userdata'
//             },
//             {
//               path:'/home/UserShow/userdata',
//               component:()=>import('./views/home/UserManagement/tabsix/userdata.vue'),
//             },
//             {
//               path:'/home/UserShow/bodydata',
//               component:()=>import('./views/home/UserManagement/tabsix/bodydata.vue'),
//             },
//             {
//               path:'/home/UserShow/apijiekou',
//               component:()=>import('./views/home/UserManagement/tabsix/apijiekou.vue'),
//             },
//             {
//               path:'/home/UserShow/bodyandapi',
//               component:()=>import('./views/home/UserManagement/tabsix/bodyandapi.vue'),
//             },
//             {
//               path:'/home/UserShow/viewjiekou',
//               component:()=>import('./views/home/UserManagement/tabsix/viewjiekou.vue'),
//             },
//             {
//               path:'/home/UserShow/bodyandview',
//               component:()=>import('./views/home/UserManagement/tabsix/bodyandview.vue'),
//             }

//           ]
//         },
//         {
//           //添加用户
//           path:'/home/addUser',
//           name:'addUser',
//           component:()=>import('./views/home/UserManagement/addUser.vue'),
//         },
        
//       ]
//     }
   
  ]
})
// router.beforeEach((to, from, next) => {
//     if(cookie.get('userId')){
//       if(store.state.Login.routerList.length===0){
//         store.dispatch('Login/getUserInfo').then(()=>{
//           next({path:to.path})
//         })
//       }else{
//         next()
//       }
//     }else{
//       if(to.path==='/login'){
//         next()
//       }else{
//         next('/login')
//       }
//     }
  
// })


export default router;