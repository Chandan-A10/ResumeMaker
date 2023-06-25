import Modal from "antd/es/modal/Modal";
import {  useState } from "react"
import SelectionModel from "./SelectionModal";
import Resume from "./Resume/Resume";
import Resume2 from "./Resume/Resume2";
import Resume3 from "./Resume/Resume3";

const CvModal = ({temp,cv,open,closeModal}) => {
    const [TempOpen, setTempOpen] = useState(false);
    const template=cv?.temp || temp
    return(
      <>
      <Modal
        open={open}
        onOk={closeModal}
        onCancel={closeModal}
        cancelButtonProps={{ disabled: true }}
        width={'700px'}
      >
        {parseInt(template)===1 && <Resume3 values={cv}></Resume3>}
        {parseInt(template)===2 && <Resume values={cv}></Resume>}
        {parseInt(template)===3 && <Resume2 values={cv}></Resume2>}
      </Modal>
      <SelectionModel open={TempOpen} closeModal={()=>setTempOpen(false)}></SelectionModel>
      </>
    )
};
export default CvModal  