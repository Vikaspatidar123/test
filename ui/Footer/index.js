import styles from './styles.module.css'
const Nav=[' About us', 'Contact us', 'Careers' ,'Blog ']
const Teach=[ 'Udemy Business', 'Teach on Udemy' ,'Get the app' ]
const Help=['Help and Support ','Privacy policy']
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer=()=>{
    return <div className={styles.container}>
        <div className={styles.main}>
      <div>  
      {Nav.map((item)=>{
        return (<div className={styles.item}>{item}</div>)
      })}
      </div>
      <div>
       {Teach.map((tech)=>{
        return (<div className={styles.item}>{tech}</div>)
      })}
      </div>
      <div>
      {Help.map((help)=>{
        return (<div className={styles.item}>{help}</div>)
      })}
      </div>
      </div>
      <div className={styles.follow}>
        <div className={styles.box}>
        <div>Follow Us:</div>
        <InstagramIcon/>
        <FacebookIcon/>
        <TwitterIcon/>
        <YouTubeIcon/>
        </div>
      </div>
    </div>
}
export default Footer