import React from 'react';
import { Card, List } from 'antd';

const Template1=({cv}) => {
    const dataSource=[
        'Javascript',
        'HTML',
        'Python',
        'Ç/C++'
    ]
    let educationData=[
        'Institution: '+(cv?.Institution || ' enter institution'),
        'Degree: '+(cv?.Degree || ' enter degree'),
        'Year: '+(cv?.Year || ' enter year'),
    ]
    return (
        <div>
        <Card title={cv?.name || "Jimmy Jackson - Software Developer"}>
            <Card type="inner" title="Personal Information">
            <p>Name: {cv?.name || 'Jimmy Jackson'}</p>
            <p>Email: {cv?.email || 'jimmyjk@gmail.com'}</p>
            <p>Phone: {cv?.phone || '123-456-7890'}</p>
            </Card>
            <Card type="inner" title="Skills">
            <List
                bordered
                dataSource={cv?.skills || dataSource}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
            </Card>
            <Card type="inner" title="Education">
            <List
                bordered
                dataSource={educationData}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
            </Card>
            <Card type="inner" title="Experience">
                <p>{cv?.experience || 'Worked at ABC company'} </p>
            </Card>
        </Card>
        </div>
    );
};

export default Template1;