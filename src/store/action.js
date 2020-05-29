const actionTypes = {
    TEST:'TEST',
    LOGIN:'login',
    LOGOUT:'logout'
}

export const test = (text='this is a test')=> ({type:actionTypes.TEST,text});
export const logout = (text= '用户退出登录')=> ({type:actionTypes.LOGOUT,text});
export const login = (text='用户登录')=> ({type:actionTypes.LOGIN,text});
export const actions = actionTypes;