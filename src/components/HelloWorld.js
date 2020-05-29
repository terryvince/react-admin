import React,{useState} from 'react';

const HelloWorld = (props)=>{
    const [name,setName] = useState('terry');
    return <div onClick={()=>{setName('vince')}}>Hello {name}</div>
}

export default HelloWorld;