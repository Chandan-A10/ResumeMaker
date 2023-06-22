import { Button, Card, Col, Modal, Row } from "antd"
import { useDispatch, useSelector } from "react-redux"
import {ExpandAltOutlined,PlusCircleOutlined,LogoutOutlined,DeleteOutlined } from '@ant-design/icons'
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { reqLoggout, deletecv } from "../../reducer/user"

export const Dashboard=()=>{
    const [values, setvalues] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const users=useSelector(state=>state.users)
    const navigator=useNavigate()
    const [search]=useSearchParams()
    const mobile=search.get('mobile')
    const dispatch=useDispatch()

    useEffect(()=>{
        let flag=true;
        if(mobile){
            users.forEach((x)=>{
                if(x.mobile===mobile && x.isAuth){
                    console.log('passed')
                    flag=false;
                }
            })
        }
        (flag)?navigator('/'):flag=false
    },[])

    let cv=[];
    users.forEach((x)=>{
        if(x.mobile===mobile){
            console.log(x)
            cv=x.cvs
        }
    })
    const preview=(e,x)=>{
        setvalues(x)
        setIsModalOpen(true)
    }
    const handleClick=()=>{
        navigator({pathname:'/cv',search:createSearchParams({mobile:mobile}).toString()})
    }
    const logout=()=>{
        dispatch(reqLoggout(mobile))
        navigator('/')
    }
    const deletebtn=(e,id)=>{
        dispatch(deletecv({mobile,id:id}))
    }
    return(
        <>
        <Row gutter={16}>
        {(cv.length===0)?<h1>No data Found</h1>:
        (cv.map((x)=>{
            return (<>
            <Col span={6}>
                <Card extra={<><Button type="text" shape="circle" icon={<DeleteOutlined onClick={(e)=>deletebtn(e,x.id)}/>} /><Button type="text" shape="circle" icon={<ExpandAltOutlined onClick={(e)=>preview(e,x)}/>} /></>} headStyle={{fontSize:'30px'}} title={x?.name} style={{marginTop:'10%',fontSize:'15px'}} bordered={false}>
                
                </Card>
            </Col>
            </>)
        }))
        }
        </Row>
        <Modal title={values?.name || 'Name Here'} open={isModalOpen} onOk={()=>setIsModalOpen(false)} onCancel={()=>setIsModalOpen(false)} cancelButtonProps={{disabled:true}}>
                <p><b>Email: </b><span>{values?.email || 'example@gmail.com'}</span></p>
                <p><b>Summary: </b><span>{values?.summary || 'write a short summary for job you applying for'}</span></p>
                <p><b>Experience: </b><span>{values?.email || 'write about previous jobs or any other experience'}</span></p>
                <p><b>Skills: </b><span>{values?.skills || 'mention your technical and interpersonal skills'}</span></p>
                <p><b>Address: </b><span>{values?.address || '#351,G.F, Barotiwala, Baddi, Himachal'}</span></p>
                <p><b>Contact number: </b><span>{values?.phone || '+91 000-000-0000'}</span></p>
        </Modal>
        <PlusCircleOutlined style={{cursor:'pointer',fontSize:'50px',position:'fixed',bottom:50,right:50}} onClick={handleClick} />
        <LogoutOutlined  style={{cursor:'pointer',fontSize:'50px',position:'fixed',bottom:120,right:50}} onClick={logout} />
        </>
    )
}