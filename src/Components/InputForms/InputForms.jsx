import React from 'react'
import { Card,Form,Input } from 'antd'
import EducationForm from './EducationForm'
import ExperienceForm from './Experience'
import SkillForm from './SkillForm'
import ProjectForm from './ProjectForm'

const InputForms=( props )=> {
    console.log(props.fieldvalue)
    const changeValue=(_,allValues)=>{
        props.formval(props.active,allValues)

    }
    return (
        <div>
            {props.active==='basicinfo' &&
                <Form onValuesChange={changeValue} initialValues={props.fieldvalue.basicinfo} >
                <Card type="inner" title="Personal Info">
                    <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
                        <Input placeholder='Example, John Doe' />
                    </Form.Item>

                    <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter your job' }]}>
                        <Input placeholder='Example, Full Stack Developer' />
                    </Form.Item>

                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
                        <Input placeholder='Example, foo@gmail.com' />
                    </Form.Item>

                    <Form.Item  label="Phone" name="phone" rules={[{ required: true, message: 'Please enter your phone number' }]}>
                        <Input  placeholder='123-456-7890'/>
                    </Form.Item>
                </Card>
                </Form>
            }
            {props.active==='education' && <EducationForm formval={props.formval} active={props.active} fieldvalue={props.fieldvalue}/>}
            {props.active==='experience' && <ExperienceForm formval={props.formval} active={props.active} fieldvalue={props.fieldvalue}/>}
            {props.active==='Skills' && <SkillForm formval={props.formval} active={props.active} fieldvalue={props.fieldvalue}/>}
            {props.active==='Projects' && <ProjectForm formval={props.formval} active={props.active} fieldvalue={props.fieldvalue}/>}
        </div>
    )
}

export default InputForms