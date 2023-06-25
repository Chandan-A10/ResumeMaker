import styles from '../assests/styles/Header.module.css'
import rsm from '../assests/undraw_resume_re_hkth.svg'
const Header=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.left}>
            <p className={styles.heading}>
                Job Winning <span>Resume</span> for Free!
            </p>
            <p className={styles.heading}>
                Make your own free <span>Resume</span>
            </p>
            </div>
            <div className={styles.right}>
                <img src={rsm} alt='resume'/>
            </div>
        </div>
    )
}
export default Header