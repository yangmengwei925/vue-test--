

const asideList = [
    {
        name: '试题管理',
        id: 0,
        // meta: {
        //     author: ['管理员', '出题者']
        // },
        children: [
            {
                id: 0,
                name: '添加试题',
                path: '/home/AddExam',
                // meta: {
                //     author: ['管理员', '出题者']
                // }
            },
            {
                id: 1,
                name: '试题分类',
                path: '/home/TextType',
                // meta: {
                //     author: ['管理员', '出题者']
                // }
            },
            {
                id: 2,
                name: '查看试题',
                path: '/home/Looktest',
                // meta: {
                //     author: ['管理员', '出题者']
                // }
            }
        ]
    },
    {
        name: '用户管理',
        id: 1,
        // meta: {
        //     author: ['管理员']
        // },
        children: [
            {
                id: 0,
                name: '添加用户',
                path: '/home/addUser',
                // meta: {
                //     author: ['管理员']
                // }
            },
            {
                id: 1,
                name: '用户展示',
                path: '/home/UserShow',
                // meta: {
                //     author: ['管理员']
                // }
            }
        ]
    },
    {
        name: '考试管理',
        id: 2,
        // meta: {
        //     author: ['管理员']
        // },
        children: [
            {
                id: 0,
                name: '添加考试',
                path: '/home/addTest',
                // meta: {
                //     author: ['管理员']
                // }
            },
            {
                id: 1,
                name: '试卷列表',
                path: '/home/TestList',
                // meta: {
                //     author: ['管理员']
                // }
            }
        ]
    },
    {
        name: '班级管理',
        id: 3,
        // meta: {
        //     author: ['管理员', '出题者']
        // },
        children: [
            {
                id: 0,
                name: '班级管理',
                path: '/home/classmanage',
                // meta: {
                //     author: ['管理员', '出题者']
                // }
            },
            {
                id: 1,
                name: '教室管理',
                path: '/home/classroommanage',
                // meta: {
                //     author: ['管理员', '出题者']
                // }
            },
            {
                id: 2,
                name: '学生管理',
                path: '/home/studentmanage',
                // meta: {
                //     author: ['管理员', '出题者']
                // }
            }
        ]
    },
    {
        name: '阅卷管理',
        id: 4,
        // meta: {
        //     author: ['管理员']
        // },
        children: [
            {
                id: 0,
                name: '待批班级',
                path: '/home/AwaitingApprovalClass',
                // meta: {
                //     author: ['管理员']
                // }
            }
        ]
    },





]

export default asideList;