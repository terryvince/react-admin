import { combineReducers } from 'redux';
import {test,logout,actions} from './action';

function changeTest(state='test',action=test()){
    switch(action.type){
        case actions.TEST: return 'change test'
        default: return state
    }
}
function changeLogin(state=true,action=logout()){
    switch(action.type){
        case actions.LOGIN: return true
        case actions.LOGOUT: return false
        default: return state
    }
}

export default combineReducers({
    test:changeTest,
    isLogin:changeLogin
})