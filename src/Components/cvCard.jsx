import { Button, Col, Card } from "antd";
import {ExpandAltOutlined, DeleteOutlined} from '@ant-design/icons'
import '../assests/styles/dashboard.css'
const CvCard = ({ cv, deleteCv, previewCv }) => {
    const handledelete=()=>{
       deleteCv(cv.id)
    }
    const handlepreview=()=>{
      previewCv(cv)
   }
    return(
      <Card className="resume-card"
        extra={
          <>
            <Button className="delete-button" type="danger"  shape="circle" icon={<DeleteOutlined onClick={handledelete} />} />
            <Button className="preview-button" shape="circle" icon={<ExpandAltOutlined onClick={handlepreview} />} />
          </>
        }
        title={cv.name}
      >
      <p>Email: {cv.email}</p>
      <p>Phone: {cv.phone}</p>
      </Card>
    )
}
export default CvCard;
  