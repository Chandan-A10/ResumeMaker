import { useState } from 'react';
import { Form, Card, Input, Button } from 'antd';

const EducationForm = (props) => {
  const [educationFields, setEducationFields] = useState(props.fieldvalue.education || []);

  const handleAddEducationField = () => {
    setEducationFields([...educationFields, {}]);
  };

  const handleRemoveEducationField = (index) => {
    const updatedFields = [...educationFields];
    updatedFields.splice(index, 1);
    setEducationFields(updatedFields);
  };

  const handleChange = (index, field, e) => {
    const updatedFields = [...educationFields];
    updatedFields[index][field] = e.target.value;
    setEducationFields(updatedFields);
    props.formval(props.active, educationFields);
  };

  return (
    <div style={{ maxHeight: '400px', overflow: 'auto' }}>
      <Form>
        {educationFields.map((field, index) => (
          <div key={index}>
            <Card type="inner" title="Education">
              <Form.Item label="Institute">
                <Input
                  placeholder="MIT University"
                  style={{ width: '97%', marginLeft: '14px' }}
                  name={`institute_${index}`}
                  defaultValue={educationFields[index]?.institute}
                  onChange={(e) => handleChange(index, 'institute', e)}
                />
              </Form.Item>
              <Form.Item label="Degree">
                <Input
                  placeholder="Btech (CSE)"
                  style={{ width: '96%', marginLeft: '20px' }}
                  name={`degree_${index}`}
                  defaultValue={educationFields[index]?.degree}
                  onChange={(e) => handleChange(index, 'degree', e)}
                />
              </Form.Item>
              <Form.Item label="Year">
                <Input
                  placeholder="2020"
                  style={{ width: '92%', marginLeft: '40px' }}
                  name={`year_${index}`}
                  defaultValue={educationFields[index]?.year}
                  onChange={(e) => handleChange(index, 'year', e)}
                />
              </Form.Item>
              {index > 0 && (
                <Button type="danger" onClick={() => handleRemoveEducationField(index)}>
                  Remove
                </Button>
              )}
            </Card>
            <hr />
          </div>
        ))}
        <Button type="dashed" style={{ width: '100%' }} onClick={handleAddEducationField}>
          Add Education
        </Button>
      </Form>
    </div>
  );
};

export default EducationForm;
