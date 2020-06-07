import React from 'react';
import { Spin, Space } from 'antd';

const Loadding = (props)=>{
    return (<div className="full-container flex-main-center mask">
        <Space size="middle">
            <Spin size="large" tip="加载中..."/>
        </Space>
    </div>)
}

export default Loadding;