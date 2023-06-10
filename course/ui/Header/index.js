
import { HEADER } from '../configurations/header'
import styles from './styles.module.css'
import {useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header=()=>{
    const [active,setActive]=useState('Home')
    return <div className={styles.container}>
        <div className={styles.main}>
        <div className={styles.course}>CourseMania</div>
        <div className={styles.sub_heading}>
        {(HEADER||[]).map((item)=>{
        return(
            <> 
            <div>
                <div className={styles.title} onClick={()=>{setActive(item.title)}}>{item.title} {item?.option&&<KeyboardArrowDownIcon/>} </div>
                <div className={active === item.title && styles.line}/>
                </div>
            </>
        )}
        )}
        </div>
        <div className={styles.last}>
        <div className={styles.login}>Login</div>
        <Button variant="contained" className={styles.button}>Register</Button>
        <div className={styles.icon}><ShoppingCartIcon sx={{ color: '#0E8585',fontSize: 30 }}/></div>
        </div>
        </div>
    </div>
}
export default Header