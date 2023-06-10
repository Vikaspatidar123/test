import Header from './Header';
import styles from './styles.module.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {Container,StyledCarousel} from './styles'
import {CARD} from '../configurations/filter'
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
    autoplay: true,

  };

const ICON_MAPPING={
    Add: <AddIcon sx={{ color: '#fff'}}/>,
   false:null,
   Added: <DoneIcon sx={{ color: '#fff'}}/>
}

const Cards=()=>{
    return <Container className={styles.container}>
       {CARD.map((x)=>{return(<> 
       <Header item={x.head}/>
        <StyledCarousel {...settings} className={styles.car}>
            {
               ( x.info||[]).map( (item, i) => {
                    return (
                        <div className={styles.main_card}>
                        <Card className={styles.card}>
                            <CardMedia
                            component="img"
                            height="194"
                            image={item.image}
                            alt="dish"
                  />
                  <div className={styles.tag_container}>
                    <div className={styles.container_tag}>
                        <span className={styles.padding_left}>{item.type}</span>
                    </div>
                    </div>
                   <CardContent>
                   <div className={styles.card_dec}> 
                   <div className={styles.top_card}>
                    <div>
                    <div className={styles.title}>{item.heading}</div>
                    <div className={styles.dur}>{item.desc}</div>
                    </div>
                    {item?.addon && <div>
                  <div className={`${styles.add_icon}  ${item?.addon==='Added' && styles.done}` }>{ICON_MAPPING[item?.addon]}</div>
                  <div className={`${styles.addone} ${item?.addon==='Add' && styles.add}`}>{item?.addon}</div>
                    </div>}
                    </div>
                    <span className={`${!item.free ? styles.charg:styles.changes}`}>{item.price}</span>{item.free &&<span className={styles.free}>*Free</span>}
                    <div className={styles.icons}>{item.icon}</div>
                    <div className={styles.reating}>
                    {item.rating}
                    <span className={styles.ret}>({item.rate}) </span>
                    </div>
                  
                    </div> 
                    <div className={
                        styles.button
                    }>
                    <Button variant="contained" className={`${item.button_text==='Buy Now'?styles.but: styles.button_txt}`}>{item.button_text}</Button>
                    </div>
                </CardContent>
                        </Card>
                        <div className={styles.view}>View more Info </div>
                        </div>
                    )
                })
            }
        </StyledCarousel>
        </>
        )})}
    </Container>
}
export default Cards;