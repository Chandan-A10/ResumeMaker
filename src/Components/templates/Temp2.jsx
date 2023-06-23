import { Row, Col, Divider } from 'antd';

const Template2=({cv})=>{

    return (
        <div>
        <Row justify="space-between">
            <Col span={12} style={{backgroundColor:'#e8f5e9',padding:'40px' }}>
            <div>
                <h1>{cv?.name || 'Jimmy Jackson'}</h1>
                <p>Email: {cv?.email || 'jimmyjk@gmail.com'}</p>
                <p>Phone: {cv?.phone || '123-456-7890'}</p>
            </div>
            </Col>
            <Col span={12} style={{ backgroundColor:'#f3e5f5', padding: '30px' }}>
            <div>
                <h2>Education</h2>
                <div>
                    <h3>{cv?.Institution || "ABC Institute"}</h3>
                    <p>{cv?.Degree || "XYZ Degree"}</p>
                    <p>{cv?.Year || "20XX"}</p>
                </div>
            </div>
            </Col>
        </Row>
        <Divider />
        <div style={{ backgroundColor:'#fffde7',padding:'20px'}}>
            <h2>Experience</h2>
            <div>
                <p>{cv?.experience || 'Worked at ABCDEF company for the past 2 years'}</p>
            </div>
        </div>
        <Divider/>
        <div style={{ backgroundColor:'#fffde7',padding:'20px'}}>
            <h2>Skills</h2>
            <div>
                {cv?.skills?cv.skills.map((x,i)=>{
                    return <p key={i}>{x}</p>
                }):
                <><p>HTML</p><p>JAVA</p><p>JavaScript</p><p>React</p></>
                }
            </div>
        </div>
        </div>
    );
};

export default Template2