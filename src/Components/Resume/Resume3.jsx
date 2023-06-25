import React from 'react';
import styles from './Resume3.module.css';
import { MailOutlined, MobileOutlined } from '@ant-design/icons';

const Resume = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <p className={styles.heading}>{props.values.basicinfo?.name || 'John Doe'}</p>
          <p className={styles.subheading}>{props.values.basicinfo?.title || 'Full Stack Developer'}</p>
        </div>
        <div className={styles.right}>
          <div className={styles.links}>
            <p className={styles.link}>
              <MailOutlined />
              {props.values.basicinfo?.email || 'foo@gmail.com'}
            </p>
            <p className={styles.link}>
              <MobileOutlined />
              {props.values.basicinfo?.phone || '000-000-0000'}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.body}>
        <div className={styles.leftSection}>
          <div className={styles.section}>
            <p className={styles.sectionHeading}>Experience</p>
            <ul>
              {props.values?.experience?.map((x, i) => (
                <li key={i}>
                  Company: {x.company}
                  <br />
                  Position: {x.position}
                  <br />
                  Duration: {x.duration}
                </li>
              )) || (
                <li>
                  Company: ABC Corp
                  <br />
                  Position: Backend Developer
                  <br />
                  Duration: 3 years
                </li>
              )}
            </ul>
          </div>
          <div className={styles.section}>
            <p className={styles.sectionHeading}>Projects</p>
            <ul>
              {props.values?.Projects?.map((x, i) => (
                <li key={i}>
                  Title: {x.title}
                  <br />
                  Description: {x.description}
                  <br />
                  Date: {x.date}
                </li>
              )) || (
                <li>
                  Title: E-commerce Website
                  <br />
                  Description: using MERN stack
                  <br />
                  Date: 02/02/2022
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.section}>
            <p className={styles.sectionHeading}>Education</p>
            <ul>
              {props.values?.education?.map((x, i) => (
                <li key={i}>
                  Institution: {x.institute}
                  <br />
                  Degree: {x.degree}
                  <br />
                  Year: {x.year}
                </li>
              )) || (
                <li>
                  Institution: MIT University
                  <br />
                  Degree: Btech (CSE)
                  <br />
                  Year: 2020
                </li>
              )}
            </ul>
          </div>
          <div className={styles.section}>
            <p className={styles.sectionHeading}>Skills</p>
            <ul>
              {props.values?.Skills?.map((x, i) => (
                <li key={i}>{x}</li>
              )) || (
                <>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
