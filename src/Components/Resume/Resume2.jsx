import React from 'react';
import styles from './Resume2.module.css';
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
            <MailOutlined />
            <p className={styles.link}>{props.values.basicinfo?.email || 'foo@gmail.com'}</p>
            <MobileOutlined />
            <p className={styles.link}>{props.values.basicinfo?.phone || '000-000-0000'}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.body}>
        <div className={styles.leftSection}>
          <p className={styles.sectionHeading}>Experience</p>
          <ul>
            {props.values?.experience?.map((x, i) => {
              return (
                <li key={i}>
                  <strong>Company:</strong> {x.company}<br />
                  <strong>Position:</strong> {x.position}<br />
                  <strong>Duration:</strong> {x.duration}
                </li>
              );
            }) || (
              <li>
                <strong>Company:</strong> ABC Corp<br />
                <strong>Position:</strong> Backend Developer<br />
                <strong>Duration:</strong> 3 years
              </li>
            )}
          </ul>
          <hr />
          <br />
          <p className={styles.sectionHeading}>Projects</p>
          <ul>
            {props.values?.projects?.map((x, i) => {
              return (
                <li key={i}>
                  <strong>Title:</strong> {x.title}<br />
                  <strong>Description:</strong> {x.description}<br />
                  <strong>Date:</strong> {x.date}
                </li>
              );
            }) || (
              <li>
                <strong>Title:</strong> E-commerce Website<br />
                <strong>Description:</strong> Using MERN stack<br />
                <strong>Date:</strong> 02/02/2022
              </li>
            )}
          </ul>
        </div>
        <div className={styles.rightSection}>
          <p className={styles.sectionHeading}>Education</p>
          <ul>
            {props.values?.education?.map((x, i) => {
              return (
                <li key={i}>
                  <strong>Institution:</strong> {x.institute}<br />
                  <strong>Degree:</strong> {x.degree}<br />
                  <strong>Year:</strong> {x.year}
                </li>
              );
            }) || (
              <li>
                <strong>Institution:</strong> MIT University<br />
                <strong>Degree:</strong> Btech (CSE)<br />
                <strong>Year:</strong> 2020
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className={styles.skills}>
        <p className={styles.sectionHeading}>Skills</p>
        <ul>
          {props.values?.skills?.map((x, i) => {
            return <li key={i}>{x}</li>;
          }) || (
            <>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
