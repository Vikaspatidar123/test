
import styles from './styles.module.css'
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import { CONTROL } from '../configurations/company';
import {back} from '../assets/back.svg'
const Search=()=>{
    return <div className={styles.container} style={{ backgroundImage: `url(${back})` }}>
        <div>
        <div className={styles.input_box}>
        <OutlinedInput startAdornment={<SearchIcon sx={{ color: '#0E8585'}} />} placeholder="Search for courses"  className={styles.input}  sx={{
      "& fieldset": { border: 'none' },
    }}/>
        </div>

        <div className={styles.des_box} >
         <span className={styles.des}> Explore what professionals like you are learning the most</span>
        </div>
        </div>
        <div className={styles.fot}>
          {CONTROL.map((item)=>{
            return(
                <div>
                    {item.title} 
                </div>
            )
          })}
        </div>
        </div>
}
export default Search;