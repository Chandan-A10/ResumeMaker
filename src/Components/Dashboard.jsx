import { Row } from "antd"
import CvCard from "./cvCard"
import CvModal from "./cvModal"
import {  useState } from "react"
import useAuthenticationCheck from "../utils/auth"
import { reqLoggout, deletecv } from "../reducer/user"
import { useDispatch, useSelector } from "react-redux"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"
import {PlusCircleOutlined,LogoutOutlined } from '@ant-design/icons'

export const Dashboard=()=>{
    const [values, setvalues] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const users=useSelector(state=>state.users)
    const navigator=useNavigate()
    const [search]=useSearchParams()
    const mobile=search.get('mobile')
    const dispatch=useDispatch()

    useAuthenticationCheck(mobile,users)

    const cvList = users.find(user => user.mobile === mobile)?.cvs || [];

    const previewCV=(e,x)=>{
        setvalues(x)
        setIsModalOpen(true)
    };

    const createCV=()=>{
        navigator({pathname:'/cv',search:createSearchParams({mobile:mobile}).toString()})
    }
    const logout=()=>{
        dispatch(reqLoggout(mobile))
        navigator('/')
    }
    const deleteCV=(e,id)=>{
        dispatch(deletecv({mobile,id:id}))
    }
    return(
        <>
        <Row gutter={16}>
        {(cvList.length===0)?<h1>No data Found</h1>:(
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
        </Row>
        <CvModal cv={values} open={isModalOpen} closeModal={() => setIsModalOpen(false)} />
        <PlusCircleOutlined style={{cursor:'pointer',fontSize:'50px',position:'fixed',bottom:50,right:50}} onClick={createCV} />
        <LogoutOutlined  style={{cursor:'pointer',fontSize:'50px',position:'fixed',bottom:120,right:50}} onClick={logout} />
        </>
    )
}