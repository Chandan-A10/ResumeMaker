import { useState } from 'react';
import { Form, Input, Button, Card } from 'antd';

const ExperienceForm = (props) => {
    const [experienceFields, setExperienceFields] = useState(props.fieldvalue.experience || []);

    const handleAddExperienceField = () => {
        setExperienceFields([...experienceFields, {}]);
    }

    const handleRemoveExperienceField = (index) => {
        const updatedFields = [...experienceFields];
        updatedFields.splice(index, 1);
        setExperienceFields(updatedFields);
    }

    const handleChange = (index, field, e) => {
        const updatedFields = [...experienceFields];
        updatedFields[index][field] = e.target.value;
        setExperienceFields(updatedFields);
        props.formval(props.active,experienceFields)
    }

    return (
        <div style={{ maxHeight:'400px' , overflow: 'auto' }}>
        <Form initialValues={props.fieldvalue.experience}>
        {experienceFields.map((field, index) => (
            <div key={index}>
                <Card type='inner' title='Experience'>
            <Form.Item label="Company" >
                <Input
                placeholder='ABC Corporations'
                defaultValue={experienceFields[index]?.company}
                name={`company_${index}`}
                onChange={(e) => handleChange(index, 'company', e)}
                />
            </Form.Item>
            <Form.Item label="Position">
                <Input
                    defaultValue={experienceFields[index]?.position}
                placeholder='Backend Developer'
                name={`position_${index}`}
                onChange={(e) => handleChange(index, 'position', e)}
                />
            </Form.Item>
            <Form.Item label="Duration">
                <Input
                defaultValue={experienceFields[index]?.duration}
                placeholder='2 years'
                name={`duration_${index}`}
                onChange={(e) => handleChange(index, 'duration', e)}
                />
            </Form.Item>
            {index > 0 && (
                <Button type="danger" onClick={() => handleRemoveExperienceField(index)}>
                Remove
                </Button>
            )}
            </Card>
            <hr />
            </div>
        ))}
        <Button type='dashed' style={{width:'100%'}} onClick={handleAddExperienceField}>Add Experience</Button>
        </Form>
        </div>
    )
}

export default ExperienceForm;
