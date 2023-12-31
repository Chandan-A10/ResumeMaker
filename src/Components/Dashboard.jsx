import { Menu, Row } from "antd"
import CvModal from "./cvModal"
import {  useState } from "react"
import useAuthenticationCheck from "../utils/auth"
import { reqLoggout, deletecv } from "../reducer/user"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import {PlusCircleOutlined,LogoutOutlined, AppstoreOutlined,PaperClipOutlined } from '@ant-design/icons'
import SelectionModel from "./SelectionModal"
import Published from "./Published"
import Draft from './Draft.jsx'

export const Dashboard=()=>{
    const [values, setvalues] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [TempOpen, setTempOpen] = useState(false);
    const users=useSelector(state=>state.users)
    const navigator=useNavigate()
    const [search]=useSearchParams()
    const mobile=search.get('mobile')
    const dispatch=useDispatch()

    useAuthenticationCheck(mobile,users)

    const cvList = users.find(user => user.mobile === mobile)?.cvs || [];

    const previewCV=(x)=>{
        setvalues(x)
        setIsModalOpen(true)
    };
    const logout=()=>{
        dispatch(reqLoggout(mobile))
        navigator('/')
    }
    const deleteCV=(id)=>{
        dispatch(deletecv({mobile,id:id}))
    }
    const chooseTemp=()=>{
        setTempOpen(true)
    }

    const [current, setCurrent] = useState('pb');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const items = [
        {
          label: 'My Published Resume',
          key: 'pb',
          icon: <PaperClipOutlined />,
        },
        {
          label: 'Draft Box',
          key: 'draft',
          icon: <AppstoreOutlined />,
        },
        {
          label: (
            <span onClick={logout}>
              Logout
            </span>
          ),
          key: 'alipay',
          icon: <LogoutOutlined />,
        },
      ];
    return(
        <>
        <Menu onClick={onClick}  mode="horizontal" items={items} style={{ lineHeight:'60px',backgroundColor: '#edfdff'}}></Menu>
        <Row gutter={16}>
        {current==='pb' && <Published cvList={cvList} deleteCV={deleteCV} previewCV={previewCV}/>}
        {current==='draft' && <Draft cvList={cvList} deleteCV={deleteCV} previewCV={previewCV}/>}  
        </Row>
        <CvModal cv={values} open={isModalOpen} closeModal={()=>setIsModalOpen(false)} />
        <PlusCircleOutlined style={{cursor:'pointer',fontSize:'50px',position:'fixed',bottom:50,right:50}} onClick={chooseTemp} />
        <SelectionModel open={TempOpen} closeModal={()=>setTempOpen(false)}></SelectionModel>
        </>
        
    )
}