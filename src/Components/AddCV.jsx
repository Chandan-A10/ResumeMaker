import React, { useState } from 'react';
import { Form, Input, Button, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setCv } from '../reducer/user';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import useAuthenticationCheck from '../utils/auth';
import CvModal from './cvModal';
import '../assests/styles/AddCv.css'
import {ClearOutlined,ExpandAltOutlined,RollbackOutlined,SaveOutlined} from '@ant-design/icons'

const ResumeForm = () => {

    const [values, setValues] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const users = useSelector(state => state.users);
    const navigator = useNavigate();
    const [search] = useSearchParams();
    const mobile = search.get('mobile');
    const temp = search.get('temp')
    const [skillData, setSkillData] = useState([]);
    const [form] = Form.useForm();
    const dispatch=useDispatch()

    useAuthenticationCheck(mobile,users)
    const handleSkillAdd=(add)=>{
        setSkillData(prev=>[...prev,'']);
        add()
    }
    const handleSkillChange = (e, index) => {
        const updatedData = [...skillData];
        updatedData[index] = e.target.value;
        setSkillData(updatedData);
        console.log(skillData)
    }
    const handleSkillRemove = (index,remove,name) => {
        const updatedData = [...skillData];
        updatedData.splice(index, 1);
        setSkillData(updatedData);
        remove(name)
    }
    const handleSubmit = (values) => {
        values.id=Date.now()
        values.temp=search.get('temp')
        dispatch(setCv({ mobile, user: values }))
        console.log(values)
        navigator({ pathname: '/dashboard', search: createSearchParams({ mobile }).toString() });
        return
    }

    const handleReset=()=> {
        form.resetFields();
        setValues('')
    }

    const handleCancel=()=>{
        navigator({ pathname: '/dashboard', search: createSearchParams({ mobile }).toString() });
        return
    }

    const changeValue=(_, allValues) => {
        setValues(allValues);
    }

    return (
        <div className='resume-form-container'>
        <Card title="Create Resume" className='resume-form-card'>
            <Form form={form} onValuesChange={changeValue} onFinish={handleSubmit}>

            <Card type="inner" title="Personal Info">
                <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please enter your phone number' }]}>
                    <Input />
                </Form.Item>
            </Card>

            <Card type="inner" className='inner-card' title="Skills">
                <Form.List name="skills">
                {(fields,{add,remove}) => (
                    <>
                    {fields.map((field,index)=>(
                        <Form.Item
                        label={`Skills: ${index+1}`}
                        required={false}
                        key={field.key}
                        >
                        <Form.Item
                            {...field}
                            validateTrigger={['onChange', 'onBlur']}
                            rules={[{ required: true, message: 'Please enter a skill' }]}
                            noStyle
                        >
                            <Input
                            placeholder="Skill"
                            style={{ width: '90%' }}
                            value={skillData[index]}
                            onChange={(e)=>handleSkillChange(e, index)}
                            />
                        </Form.Item>
                        {fields.length>1 && (
                            <Button
                            type="danger"
                            onClick={()=>handleSkillRemove(index,remove,field.name)}
                            >
                            Remove Skill
                            </Button>
                        )}
                        </Form.Item>
                    ))}
                    <Form.Item>
                        <Button type="dashed" onClick={()=>handleSkillAdd(add)} style={{width:'100%'}} block>
                        Add Skill
                        </Button>
                    </Form.Item>
                    </>
                )}
                </Form.List>
            </Card>

            <Card type="inner" className='inner-card' title="Education">
                <Form.Item name='Institution' label="Institution">
                    <Input/>
                </Form.Item>
                <Form.Item name='Degree' label="Degree">
                    <Input/>
                </Form.Item>
                <Form.Item name='Year' label="Year">
                    <Input/>
                </Form.Item>
            </Card>

            <Card type="inner" title="Experience" className='inner-card'>
                <Form.Item name='experience' label="Experience">
                    <Input.TextArea/>
                </Form.Item>
            </Card>

            <Form.Item>
                <Button icon={<ExpandAltOutlined/>} onClick={()=>setIsModalOpen(true)} className='preview-button'>
                Preview
                </Button>
                <Button icon={<SaveOutlined />}  htmlType="submit" className='save-button'>
                Save
                </Button>
                <Button icon={<RollbackOutlined />}  onClick={handleCancel} className='go-back-button'>
                Go Back
                </Button>
                <Button icon={<ClearOutlined />} onClick={handleReset} className='clear-button'>
                Clear
                </Button>
            </Form.Item>
            </Form>
        </Card>
        <CvModal temp={temp} cv={values} open={isModalOpen} closeModal={()=>setIsModalOpen(false)} />
        </div>
    );
};

export default ResumeForm;