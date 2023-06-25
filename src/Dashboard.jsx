import { Button, Empty, Menu, Row } from "antd"
import {  AppstoreOutlined, MailOutlined, SettingOutlined  } from '@ant-design/icons'
import CvCard from "./Components/cvCard"
import CvModal from "./Components/cvModal"
import {  useState } from "react"
// import useAuthenticationCheck from "./utils/auth"
import { reqLoggout, deletecv } from "./reducer/user"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import {PlusCircleOutlined,LogoutOutlined } from '@ant-design/icons'
import SelectionModel from "./Components/SelectionModal"
import { loginStyles } from "./assests/styles/loginStyle"

export const Dashboard=()=>{
    const [values, setvalues] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [TempOpen, setTempOpen] = useState(false);
    const users=useSelector(state=>state.users)
    const navigator=useNavigate()
    const [search]=useSearchParams()
    const mobile=search.get('mobile')
    const dispatch=useDispatch()

    // useAuthenticationCheck(mobile,users)

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
          icon: <MailOutlined />,
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
        <Menu onClick={onClick}  mode="horizontal" items={items}></Menu>
        <Row gutter={16}>
        <div className="resume-dashboard">
        {(cvList.length===0)?<Empty/>:(
            cvList.map((x)=>(
                <CvCard
                key={x.id}
                cv={x}
                deleteCv={deleteCV}
                previewCv={previewCV}
                >
                </CvCard>
            ))
        )}
        </div>
        </Row>
        <CvModal cv={values} open={isModalOpen} closeModal={()=>setIsModalOpen(false)} />
        <PlusCircleOutlined style={{cursor:'pointer',fontSize:'50px',position:'fixed',bottom:50,right:50}} onClick={chooseTemp} />
        <SelectionModel open={TempOpen} closeModal={()=>setTempOpen(false)}></SelectionModel>
        </>
        
    )
}