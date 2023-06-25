import { useState } from 'react'
import styles from './Editor.module.css'
import InputForms from '../InputForms/InputForms'
import Resume from '../Resume/Resume'
import Resume2 from '../Resume/Resume2'
import Resume3 from '../Resume/Resume3'
import Toolbar from '../Toolbar/Toolbar'
import { useDispatch, useSelector } from 'react-redux'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import { setCv } from '../../reducer/user'
import useAuthenticationCheck from '../../utils/auth'
import { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const Editor=()=>{
    const section={
        basicinfo:'Basic Info',
        education:'Education',
        experience:'Experience',
        Skills:'Skills',
        Projects:'Projects'
    }

    const [search]=useSearchParams()
    const navigator=useNavigate()
    const dispatcher=useDispatch()
    const mobile=search.get('mobile')
    const temp=search.get('temp')
    const users=useSelector(state=>state.users)
    useAuthenticationCheck(mobile,users)
    const [fieldvalue,setfieldvalue] = useState({basicinfo:null,education:null,experience:null,Skills:null,Projects:null})
    const putvalues=(key,values)=>{
        setfieldvalue({...fieldvalue,[key]:values})
        console.log(fieldvalue)
    }
    const handleCancel=()=>{
        navigator({ pathname: '/dashboard', search: createSearchParams({ mobile }).toString() });
        console.log('canceled')
        return
    }
    const handleSave=()=>{
        const obj=fieldvalue
        obj.id=Date.now()
        obj.temp=temp
        console.log(obj)
        dispatcher(setCv({mobile:mobile,user:obj}))
        navigator({ pathname: '/dashboard', search: createSearchParams({ mobile }).toString() });
        return
    }

    const resumeRef = useRef(null);
    const handleExportToPDF = () => {
        const options = {
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };

        html2pdf().set(options).from(resumeRef.current).save();
    };

    const handleSaveDraft=()=>{
        const obj=fieldvalue
        obj.id=Date.now()
        obj.isDraft=true
        obj.temp=temp
        console.log(obj)
        dispatcher(setCv({mobile:mobile,user:obj}))
        navigator({ pathname: '/dashboard', search: createSearchParams({ mobile }).toString() });
        return
    }
    
    const handleReset=()=>{
        setfieldvalue({basicinfo:null,education:null,experience:null,Skills:null,Projects:null})
    }
    const [activeSection, setactiveSection] = useState(Object.keys(section)[0])
    return(
        <div style={{display:'flex',flexDirection:'column',gap:'30px',padding:'30px',alignItems:'center'}}>
        <div className={styles.body}>
        <div className={styles.container}>
            <div className={styles.header}>
                {Object.keys(section).map((item,i)=>(
                    <div onClick={()=>setactiveSection(item)} key={i} className={`${styles.section} ${activeSection===item?styles.active:''}`}>
                        {section[item]}
                    </div>
                ))}
            </div>
            <div className=''>
                <InputForms active={activeSection} formval={putvalues} fieldvalue={fieldvalue}/>
            </div>
            </div>
            {parseInt(temp)===1 &&
                <div ref={resumeRef}><Resume3 ref={resumeRef} values={fieldvalue}/></div>
            }
            {parseInt(temp)===2 &&
                <div ref={resumeRef}><Resume ref={resumeRef} values={fieldvalue}/></div>
            }
            {parseInt(temp)===3 &&
                <div ref={resumeRef}><Resume2  values={fieldvalue}/></div>
            }
                <Toolbar handleCancel={handleCancel} handleExportToPDF={handleExportToPDF} handleSave={handleSave} handleReset={handleReset} handleSaveDraft={handleSaveDraft}/>
        </div>

        </div>
    )
}

export default Editor