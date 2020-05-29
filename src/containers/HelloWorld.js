import React from 'react';
import { connect } from 'react-redux';
import {login} from '../store/action';

let HelloWorld = (props)=>{         //ui组件，纯展示
    // const [name,setName] = useState('terry');
    return <div onClick={props.changeLogin}>用户登录状态：{props.isLogin.toString()}</div>
}

const mapStateToProps = state=>{
    return {
        isLogin:state.isLogin
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        changeLogin: ()=>{dispatch(login('用户登录'))}
    }
}

HelloWorld = connect(mapStateToProps,mapDispatchToProps)(HelloWorld)        //容器组件

export default HelloWorld;