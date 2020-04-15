

import {getUserInfo} from '../api/index.js'
import {getRouter,getAside} from '../utils/getAuthorRouter'
import routers from '../router/home';
import Router from '../router/router';
import cookie from 'js-cookie';
import asideList from '../router/aisde';
const state = {
    routerList:[],
    asideList:[]
}
const mutations = {
setRouterList(state,value){
    state.routerList=value
},
setAsideList(state,value){
    state.asideList=getAside(value,asideList);

}
}
const actions = {
// async getData(context){

// }
async getUserInfo({commit}){
    let res = await getUserInfo()
    console.log(res.data.data)
    cookie.set("userId", res.data.data.identity_id);
    let resRouter = getRouter(res.data.data.identity_text,routers);
    commit('setAsideList',res.data.data.identity_text)
    commit('setRouterList',resRouter)
    Router.addRoutes(resRouter);
    console.log('res',resRouter)
} 

    
}
export default {
    namespaced: true,
    state,
    mutations,
    actions


}