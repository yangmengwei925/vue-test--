import axios from '../utils/http.js'
export function Login(user_name,user_pwd){
    return axios.post('/user/login',{user_name,user_pwd})
}

export function getUserInfo() {
    return axios.get('user/userInfo')
}

//班级管理
export function addclass() {
    return axios.get('/manger/grade')
}
//教室管理-教室添加
export function addclassroom(room_text) {
    return axios.post('/manger/room',room_text)
}

//添加班级
export function newAddclass(grade_name,room_id,subject_id){
    return axios.post('/manger/grade',{
        grade_name,
        room_id,
        subject_id
    })
}
//获取全部教室
export function GainFn() {
    return axios.get('/manger/room')
}

//获取已经分配教室的班级
export function Gainaddclass() {
    return axios.get('/manger/grade')
}

//修改班级信息

export function ChangeclassMessage(grade_id,grade_name,subject_id,room_id){
    return axios.put('/manger/grade/update',{
        grade_id,grade_name,subject_id,room_id
    })
}


//删除班级
export function Deleteclass(newroomid){
    return axios.delete('/manger/grade/delete',{data:{grade_id:newroomid}})
}

//教室获取
export function acquireClassroom() {
    return axios.get('/manger/room')
}

//添加教室
export function addClassroom(room_text){
    return axios.post('/manger/room',{room_text})
    
}

//学生管理-添加学生（获取全部数据）
export function studentM(){
    return axios.get('/manger/student')
}
//学生管理-获取全部班级
export function classAll(){
    return axios.get('/manger/grade')
}

//学生管理-获取所有已分班学生接口
export function NewStudent(){
    return axios.get('/manger/student/new')
}
//学生管理-删除学生
export function deleteStudent(student_id){
    return axios.delete(`/manger/student/${student_id}`)
}

//删除教室
export function DeleteFn(newid) {
    return axios.delete('/manger/room/delete',{data:{room_id:newid}})
}

//试题管理-获取试题类型
export function getQuestionsType(){
    return axios.get('/exam/getQuestionsType')
}
//试题管理-获取所有课程
export function subject(){
    return axios.get('/exam/subject')
}

//试题管理-获取所有的考试类型
export function examType(){
    return axios.get('/exam/examType')
}

//试题管理-获取所有试题
export function question(){
    return axios.get('/exam/questions/new')
}

//试题管理-查看试题-按条件获取试题
export function conditions(query){
    return axios.get('/exam/questions/condition',{params:query})
}
//试题管理-更新试题
export function upData( questions_id,title,questions_stem,questions_answer,subject_id,questions_type_id,exam_id){
    return axios.put('/exam/questions/update',{
        questions_id,
          title,
          questions_stem,
          questions_answer,
          subject_id,
          questions_type_id,
          exam_id
    })
}

//添加试题接口
    export function addtestquestions(questions_type_id,questions_stem,subject_id,exam_id,user_id,questions_answer,title) {
    return axios.post('/exam/questions',
    {
            // type,
            questions_type_id,
            questions_stem,
            subject_id,
            exam_id,
            user_id,
            questions_answer,
            // type,
            title
        }
    
    
    )
}
//获取身份信息 添加用户
export function gainbody() {
    return axios.get('/user/identity')    
}

//根据用户id，返回该用户的视图权限
export function gainviewpermission() {
    return axios.get('/user/view_authority')        
}

//获取api接口权限数据
export function apiportPermission() {
    return axios.get('/user/api_authority')            
}

//添加用户
export function adduser(user_name,user_pwd,identity_id) {
    console.log(user_name,user_pwd,identity_id)
    return axios.post('/user',{
        user_name,user_pwd,identity_id
    })            
}

//添加身份
export function addbody(newbody) {
    console.log(newbody)
    return axios.get('/user/identity/edit',
    {params:{identity_text:newbody}})
}

//添加api接口权限
export function addPermission(input,input2,input3) {
    return axios.get('/user/authorityApi/edit',
    {params:{
        api_authority_text:input,
        api_authority_url:input2,
        api_authority_method:input3
    }}
    )
}

//添加视图接口权限
export function addview(newtext,newview) {
    return axios.get('/user/authorityView/edit',
    {params:{
        view_authority_text:newtext,
        view_id:newview
    }}
    )
}

//给身份设定api接口权限
export function settingPermission(newbodyid,newapiid) {
    return axios.post('/user/setIdentityApi',{
        identity_id:newbodyid,
        api_authority_id:newapiid
    })
}

//给身份设定视图权限
export function addbodyview(newbodyid,newviewid){
     return axios.post('/user/setIdentityView',{
        identity_id:newbodyid,
        view_authority_id:newviewid
     })
}

//展示用户数据
export function showuser() {
    return axios.get('/user/user')
}

//更新用户数据
export function updateuserFn(newuserid,newusername,newuserpwd,bodyid) {
    return axios.put('/user/user',{
        user_id:newuserid,
        user_name:newusername,
        user_pwd:newuserpwd,
        identity_id:bodyid
    })
}
//展示用户数据
export function zhanshi() {
    return axios.get('/user/user')
}
//试题管理-按条件获取试题
export function condition(){
    return axios.get('/exam/questions/condition',{questions_id,questions_id,subject_id,exam_id})
}

//考试管理-试卷列表
export function examList(){
    return axios.get("/exam/exam")
}
//考试管理-试卷列表-试卷详情
export function examDetail(id){
    return axios.get(`/exam/exam/${id}`)
}
//考试管理-添加试题-创建试卷
export function addExam(query){
    return axios.post('/exam/exam',query)
}
//考试管理-添加试题-更新试卷
export function newTextList(ids){
    return axios.put(`/exam/exam/${ids}`)
}
//身份和api接口的关系
export function bodyandapiguanxi() {
    return axios.get('/user/identity_api_authority_relation')
}

//展示身份和视图权限关系
export function bodyandviewguanxi() {
    return axios.get('/user/identity_view_authority_relation')
}
//阅卷管理-待批班级-获取学生试卷列表
export function studentList(){
    return axios.get('/exam/student')
}

//获取用户id
export function yonghuid() {
    return axios.get('/user/user')
}

//删除试卷
export function deletetest() {
    return axios.delete('/exam/exam/w5tcy-g2dts')
}





