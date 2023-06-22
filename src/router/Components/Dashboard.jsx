import { Button, Card, Col, Row } from "antd"
import { useSelector } from "react-redux"
import {ExpandAltOutlined,PlusCircleOutlined} from '@ant-design/icons'
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"
import { useEffect } from "react"

export const Dashboard=()=>{
    const users=useSelector(state=>state.users)
    const navigator=useNavigate()
    const [search]=useSearchParams()
    const mobile=search.get('mobile')

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
    const preview=()=>{
    }
    const handleClick=()=>{
        navigator({pathname:'/cv',search:createSearchParams({mobile:mobile}).toString()})
    }
    return(
        <>
        <Row gutter={16}>
        {(cv.length===0)?<h1>No data Found</h1>:
        (cv.map((x)=>{
            return (<>
            <Col span={6}>
                <Card extra={<><Button type="text" shape="circle" icon={<ExpandAltOutlined onClick={preview}/>} /></>} headStyle={{fontSize:'30px'}} title={x?.name} style={{height:'40vh',marginTop:'10%',fontSize:'15px'}} bordered={false}>
                <p><b>Email: </b><span>{x?.email || 'example@gmail.com'}</span></p>
                <p><b>Summary: </b><span>{x?.summary || 'write a short summary for job you applying for'}</span></p>
                <p><b>Experience: </b><span>{x?.email || 'write about previous jobs or any other experience'}</span></p>
                <p><b>Skills: </b><span>{x?.skills || 'mention your technical and interpersonal skills'}</span></p>
                <p><b>Skills: </b><span>{x?.skills || '#351,G.F, Barotiwala, Baddi, Himachal'}</span></p>
                <p><b>Contact number: </b><span>{x?.phone || '+91 000-000-0000'}</span></p>
                </Card>
            </Col>
            </>)
        }))
        }
        </Row>
        <PlusCircleOutlined style={{cursor:'pointer',fontSize:'50px',position:'fixed',bottom:50,right:50}} onClick={handleClick} />
        </>
    )
}