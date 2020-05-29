import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 16,
    },
};

const Login = (props)=>{
    
    const onFinish = values => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    
    return (<div className="login-wrap">
        <div className="login-title-wrap flex-main-center">
            <div className="flex-main-start">
                <img src="../asserts/logo.jpg" className="logo-size" alt="logo"></img>
                <span className="login-title">xxx 管理系统</span>
            </div>
        </div>
        <div className="login-form-wrap flex-main-center width-full">
        <Form className="login-form"
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label="用户名"
                labelAlign="left"
                name="username"
                rules={[
                {
                    required: true,
                    message: '请输入用户名',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="密码"
                labelAlign="left"
                name="password"
                rules={[
                {
                    required: true,
                    message: '请输入密码',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>记住密码</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button className="login-btn" type="primary" htmlType="submit">登录</Button>
            </Form.Item>
            </Form>
        </div>
    </div>)
}
export default Login;