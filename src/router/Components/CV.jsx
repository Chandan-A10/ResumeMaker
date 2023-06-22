import {  Form, Input, Modal, Button } from "antd"
import { loginStyles } from "../../assests/styles/loginStyle"
import { useState } from "react";
import {ExpandAltOutlined,CloseCircleOutlined,CheckCircleOutlined,UndoOutlined} from '@ant-design/icons'
import { useNavigate, useSearchParams,createSearchParams } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setCv } from "../../reducer/user";

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
  };

export const CV=()=>{
    const dispatch=useDispatch()
    const [form]=Form.useForm();
    const users=useSelector(state=>state.users)
    const navigator=useNavigate()
    const [search]=useSearchParams()
    const mobile=search.get('mobile')
    const [values, setvalues] = useState(null)

    useEffect(()=>{
        let flag=true;
        if(mobile){
            users.forEach((x)=>{
                if(x.mobile===mobile && x.isAuth){
                    console.log('passed')
                    flag=false;
                }
            })
        }
        (flag)?navigator('/'):flag=false
    },[])


    const changevalue=(changedvalue,allvalues)=>{
        setvalues(allvalues)
    }
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCancel = () => {
        navigator({pathname:'/dashboard',search:createSearchParams({mobile:mobile}).toString()})
    }
    const handleReset = () => {
        form.resetFields()
        setvalues('')
    };
    const onFinish = (val) =>{
        dispatch(setCv({mobile:mobile,user:val.user}))
        console.log(users)
    }
    return(
        <>
        <div style={loginStyles.container}>
        <Form name="form" form={form} onValuesChange={changevalue} onFinish={onFinish} style={{ maxWidth: 600 }} validateMessages={validateMessages} >
            <Form.Item name={['user','name']} label="Name" rules={[{required: true}]}>
                <Input />
            </Form.Item>
            
            <Form.Item name={['user', 'email']} label="Email" rules={[{type: 'email',},]}>
                <Input />
            </Form.Item>
            
            <Form.Item name={['user', 'summary']} label="Summary">
                <Input.TextArea />
            </Form.Item>
            
            <Form.Item name={['user', 'experience']} label="Experience">
                <Input.TextArea />
            </Form.Item>
            
            <Form.Item name={['user', 'skills']} label="Skills">
                <Input.TextArea />
            </Form.Item>
            
            <Form.Item name={['user', 'address']} label="Address">
                <Input.TextArea />
            </Form.Item>
            
            <Form.Item name={['user', 'phone']} label="Phone Number" rules={[{required: true,message: 'Please input your phone number!',},]}>
                <Input addonBefore='+91' style={{ width: '100%',}}/>
            </Form.Item>
            
            <Form.Item>
                <Button size="large" icon={<ExpandAltOutlined/>} onClick={()=>setIsModalOpen(true)}/>
                <Button size="large" style={{marginLeft:'17%'}} icon={<CloseCircleOutlined/>} onClick={handleCancel}/>
                <Button size="large" htmlType='Submit' style={{marginLeft:'17%'}} icon={<CheckCircleOutlined/>}/>
                <Button size="large" style={{marginLeft:'17%'}} icon={<UndoOutlined/>} onClick={handleReset}/>
            </Form.Item>

        </Form>

            <Modal title={values?.user?.name || 'Name Here'} open={isModalOpen} onOk={()=>setIsModalOpen(false)} onCancel={()=>setIsModalOpen(false)} cancelButtonProps={{disabled:true}}>
                <p><b>Email: </b><span>{values?.user?.email || 'example@gmail.com'}</span></p>
                <p><b>Summary: </b><span>{values?.user?.summary || 'write a short summary for job you applying for'}</span></p>
                <p><b>Experience: </b><span>{values?.user?.email || 'write about previous jobs or any other experience'}</span></p>
                <p><b>Skills: </b><span>{values?.user?.skills || 'mention your technical and interpersonal skills'}</span></p>
                <p><b>Skills: </b><span>{values?.user?.skills || '#351,G.F, Barotiwala, Baddi, Himachal'}</span></p>
                <p><b>Contact number: </b><span>{values?.user?.phone || '+91 000-000-0000'}</span></p>
            </Modal>
            
        </div>
        </>
    )
}