import styles from './styles.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Checkbox from '@mui/material/Checkbox';

const MAPPING={
    arrow:<KeyboardArrowDownIcon/>,
    checkbox:<Checkbox/>
}
const Header =({item})=>{
    return <div className={styles.container}>
        <div className={styles.head}>{item.title}</div>
        <div className={styles.filter}>
           {item.filter.map((info)=> <div>{info.title}</div>)}
        </div>
    </div>
}
export default Header