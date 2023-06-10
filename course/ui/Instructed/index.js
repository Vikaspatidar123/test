
import styles from './styles.module.css'
import Button from '@mui/material/Button';
import {POPULAR} from '../configurations/popuar'
import StarIcon from '@mui/icons-material/Star';
import Plant from '../assets/plant.svg'
const Instructed=()=>{
    return<div className={styles.container}>
        <div className={styles.head}>Instructed Courses</div>
        <div className={styles.box}>
        <div className={styles.desc}> Want someone to instruct you? No worries, here we introduce our CourseMania’s 
        online Tutors to assist & guide you in your professional Path </div>
        <Button variant="contained" className={styles.button}>Find a Tutor</Button>
        </div>

        <div className={styles.meet}>Meet Our Popular Tutors</div>
        <div className={styles.card}>
            {(POPULAR||[]).map((item)=>{
                return <div>
                    <img src={item.image} alt='' className={styles.image}/>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.work}>{item.work}</div>
                    <div className={styles.courses}>{item.Courses}</div>
                    <div className={styles.star}>
                        <StarIcon  sx={{ color: '#DAC34A' }}/>
                        <span className={styles.ratind}>{item.rating}</span>
                        <span className={styles.rate}>({item.rate})</span>
                    </div>
                </div>
            })}
        </div>
           <Plant/>
    </div>
}
export default Instructed;