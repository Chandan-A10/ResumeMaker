import Modal from "antd/es/modal/Modal";
import Template1 from "./templates/Temp1"
import Template2 from "./templates/Temp2";
import { Button } from "antd";
import {  useState } from "react"
import SelectionModel from "./SelectionModal";

const CvModal = ({temp,cv,open,closeModal}) => {
    const [TempOpen, setTempOpen] = useState(false);
    const chooseTemp=()=>{
        setTempOpen(true)
    }
    const template=cv?.temp || temp
    return(
      <>
      <Modal
        open={open}
        onOk={closeModal}
        onCancel={closeModal}
        cancelButtonProps={{ disabled: true }}
      >
        {(parseInt(template)===1 || parseInt(template)===3) ? <Template2 cv={cv}/>:<Template1 cv={cv}></Template1>}
        {cv?.temp || 
        <Button onClick={chooseTemp}>Change Template</Button>
        }
      </Modal>
      <SelectionModel open={TempOpen} closeModal={()=>setTempOpen(false)}></SelectionModel>
      </>
    )
};
export default CvModal  