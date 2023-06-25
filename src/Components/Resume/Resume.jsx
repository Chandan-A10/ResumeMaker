import React from 'react'
import styles from './Resume.module.css'
import { MailOutlined, MobileOutlined } from '@ant-design/icons'

const Resume=( props)=> {
  return(
    <div className={styles.container}>
        <div className={styles.header}>
            <p className={styles.heading}>{props.values.basicinfo?.name || 'John Doe'}</p>
            <p className={styles.subheading}>{props.values.basicinfo?.title || 'Full Stack Developer'}</p>
            <div className={styles.links}>
                <MailOutlined />
                <a className={styles.link}>
                    {props.values.basicinfo?.email || 'foo@gmail.com'}
                </a>
                <MobileOutlined />
                <a className={styles.link}>
                    {props.values.basicinfo?.phone || '000-000-0000'}
                </a>
            </div>
        </div>
        <hr/>
        <div className={styles.body}>
        <div className={styles.section}>
          <p className={styles.right_heading}>Experience</p>
          <ul>
            {props.values?.experience?.map((x,i)=>{
                return <li key={i}>Company : {x.company}<br/>Position : {x.position}<br/>Duration : {x.duration}</li>
            }) || <li>Company : ABC Corp<br/>Position&nbsp;&nbsp; : Backend Developer<br/>Duration&nbsp; : 3years</li>}
          </ul>
          <hr/>
          <br/>
          <p className={styles.right_heading}>Projects</p>
          <ul>
            {props.values?.Projects?.map((x,i)=>{
                return <li key={i}>Title : {x.title}<br/>Descrption : {x.description}<br/>Date : {x.date}</li>
            }) || <li>Title : E-commerce Website<br/>Description : using MERN stack<br/>Date : 02/02/2022</li>}
          </ul>
          <hr/>
          <br/>
          <p className={styles.right_heading}>Education</p>
          <ul>
            {props.values?.education?.map((x,i)=>{
                return <li key={i}>Institution : {x.institute}<br/>Degree : {x.degree}<br/>Year : {x.year}</li>
            }) || <li>Institution : MIT University<br/>Degree&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Btech (CSE)<br/>
            Year&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 2020</li>}
          </ul>
        </div>
        <div className={styles.right_section}>
          <p className={styles.right_heading}>Skills</p>
          <ul>
            {props.values?.Skills?.map((x,i)=>{
                return <li key={i}>{x}</li>
            }) || <><li>HTML</li><li>CSS</li><li>React</li></>}
          </ul>
          <hr/>
        </div>
        </div>
    </div>
  )
}

export default Resume