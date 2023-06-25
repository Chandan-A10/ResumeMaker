import { Form, Input,Button } from 'antd'
import React, { useState } from 'react'

const SkillForm=(props)=> {
    const [skillData, setSkillData] = useState(props.fieldvalue.Skills || []);

    const handleSkillChange=(e,index)=>{
        const updatedData = [...skillData];
        updatedData[index] = e.target.value;
        setSkillData(updatedData);
        props.formval(props.active,skillData)
    }

    const handleSkillRemove=(index, remove, name)=>{
        const updatedData = [...skillData];
        updatedData.splice(index, 1);
        setSkillData(updatedData);
        remove(name)
    }
    
    const handleSkillAdd=(add)=>{
        setSkillData(prev=>[...prev,'']);
        add()
    } 
    return (
        <div>
            <Form style={{marginLeft:'10px',marginRight:'10px'}} initialValues={props.fieldvalue.Skills}>
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
                            defaultValues={skillData[index]}
                            placeholder="HTML"
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
        </Form>
        </div>
  )
}

export default SkillForm