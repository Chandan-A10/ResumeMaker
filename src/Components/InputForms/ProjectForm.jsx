import { useState } from 'react';
import { Form, Input, Button, Card } from 'antd';

const ProjectForm=( props )=>{
    const [projectFields, setProjectFields] = useState(props.fieldvalue.Projects || []);

    const handleAddProjectField=()=>{
        setProjectFields([...projectFields, {}]);
    }

    const handleRemoveProjectField = (index) => {
        const updatedFields = [...projectFields];
        updatedFields.splice(index, 1);
        setProjectFields(updatedFields);
    }

    const handleChange = (index, field, e) => {
        const updatedFields = [...projectFields];
        updatedFields[index][field] = e.target.value;
        setProjectFields(updatedFields);
        props.formval(props.active,projectFields)

    }

    return (
        <div style={{ maxHeight: '400px', overflow: 'auto' }}>
        <Form initialValues={props.fieldvalue.Projects}>
            {projectFields.map((field, index) => (
            <div key={index}>
                <Card type='inner' title='Project'>
                <Form.Item label="Title">
                    <Input
                    defaultValue={projectFields[index]?.title}
                    placeholder='E-commerce Website'
                    style={{ marginLeft: '43px', width: '90%' }}
                    name={`title_${index}`}
                    onChange={(e) => handleChange(index, 'title', e)}
                    />
                </Form.Item>
                <Form.Item label="Description" >
                    <Input
                    defaultValue={projectFields[index]?.description}
                    placeholder='Project Description'
                    name={`desc_${index}`}
                    onChange={(e) => handleChange(index, 'description', e)}
                    />
                </Form.Item>
                <Form.Item label="Date">
                    <Input
                    defaultValue={projectFields[index]?.date}
                    type='date'
                    style={{ width: '92%', marginLeft: '40px' }}
                    name={`date_${index}`}
                    onChange={(e) => handleChange(index, 'date', e)}
                    />
                </Form.Item>
                {index > 0 && (
                    <Button type="danger" onClick={() => handleRemoveProjectField(index)}>
                    Remove
                    </Button>
                )}
                </Card>
                <hr />
            </div>
            ))}
            <Button type='dashed' style={{ width: '100%' }} onClick={handleAddProjectField}>
            Add Projects
            </Button>
        </Form>
        <br />
        </div>
    )
}

export default ProjectForm;