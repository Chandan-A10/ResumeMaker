import React, { useState } from 'react';
import { Modal } from 'antd';
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"
import temp1 from '../assests/tempImages/temp1.png'
import temp2 from "../assests/tempImages/temp2.png";

const SelectionModel=({open,closeModal}) => {
    const navigator=useNavigate()
    const [search]=useSearchParams()
    const mobile=search.get('mobile')
    const [selectedTemp, setSelectedTemp] = useState(null);

    const handleImageClick=(temp)=>{
        setSelectedTemp(temp);
    };
    const handleConfirm=()=>{
        console.log(selectedTemp)
        navigator({pathname:'/cv',search:createSearchParams({mobile:mobile,temp:selectedTemp}).toString()})
        closeModal()
        return
    };
    return (
        <Modal title='Choose template' open={open} onCancel={closeModal} onOk={handleConfirm}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <img
            src={temp1}
            alt="Image 1"
            style={{width:'30%',border:selectedTemp==='1'?'2px solid black':'none'}}
            onClick={()=>handleImageClick('1')}
            />
            <img
            src={temp2}
            alt="Image 2"
            style={{width:'30%',border:selectedTemp==='2'?'2px solid black':'none'}}
            onClick={() => handleImageClick('2')}
            />
            <img
            src={temp1}
            alt="Image 3"
            style={{width:'30%',border:selectedTemp==='3'?'2px solid black':'none'}}
            onClick={() => handleImageClick('3')}
            />
        </div>
        </Modal>
    );
};

export default SelectionModel