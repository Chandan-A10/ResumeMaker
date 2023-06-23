import { Button, Col, Card } from "antd";
import {ExpandAltOutlined, DeleteOutlined} from '@ant-design/icons'

const CvCard = ({ cv, deleteCv, previewCv }) => (
    <Col span={6}>
      <Card
        extra={
          <>
            <Button type="text" shape="circle" icon={<DeleteOutlined onClick={() => deleteCv(cv.id)} />} />
            <Button type="text" shape="circle" icon={<ExpandAltOutlined onClick={() => previewCv(cv)} />} />
          </>
        }
        headStyle={{ fontSize: '30px' }}
        title={cv.name}
        style={{ marginTop: '10%', fontSize: '15px' }}
        bordered={false}
      >
      </Card>
    </Col>
);
export default CvCard;
  