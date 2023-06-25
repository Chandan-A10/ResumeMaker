import { Button, Card } from "antd";
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
            <Button className="delete-button" type="danger" onClick={handledelete} shape="circle" icon={<DeleteOutlined  />} />
            <Button className="preview-button" shape="circle" onClick={handlepreview} icon={<ExpandAltOutlined  />} />
          </>
        }
        title={cv.basicinfo.name}
      >
      <p>Email: {cv.basicinfo.email}</p>
      <p>Phone: {cv.basicinfo.phone}</p>
      </Card>
    )
}
export default CvCard;
  