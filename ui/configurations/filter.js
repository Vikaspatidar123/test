import Rating from '@mui/material/Rating';
import Checkbox from '@mui/material/Checkbox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from '../Card/Header/styles.module.css'
export const CARD=[
    {
        'head':{
          title:'Popular courses',
          filter:[
            {
                title:<div className={styles.dec}><span>Professional Courses</span><KeyboardArrowDownIcon/></div>
            },
            {
                title:<div className={styles.check}><Checkbox/> <sapn>Free Courses</sapn></div>

            },
            {
                title:<div className={styles.check}><Checkbox/> <sapn>Piad Courses</sapn></div>

            },
            {
                title:<div className={styles.dec}><span className={styles.span}>Sort: </span> <span>Low to High</span> <KeyboardArrowDownIcon/></div>

            }
          ]
        },
        info:[{
            type:'Popular',
            image:"data:image/jpeg;base64,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",
            heading:'Critical Thinking', 
            desc:'Duration : 1hour 12mins',
            price:'$10.90',
            free:false,
            icon:<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png" alt="" width={50} height={15}/>,
            rating:<Rating
            name="simple-controlled"
            value={5}
            />,
            rate:'28,435',
            button_text:'Buy Now',
            addon:'Add'

        },{
            type:'Popular',
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe16otpX-vCBLmD1ATCu21KBF2kxYYKs2BFQ&usqp=CAU",
            heading:'Communication', 
            desc:'Duration : 50mins',
            price:'$18.90',
            free:false,
            icon:<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Khan_Academy_logo_%282018%29.svg/1200px-Khan_Academy_logo_%282018%29.svg.png' alt="" width={100} height={15}/>,
            rating:<Rating
            name="simple-controlled"
            value={4}
            />,
            rate:'43,435',
            button_text:'Buy Now',
            addon:'Added'
        } ,{
            type:'Popular',
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBx8DFjYOTIaQ0HgPs83xJvMsd7c9ZqM0gLuj5pB892KVzwQ2K57YJr-JZbPrtwCrG98&usqp=CAU",
            heading:'Unconscious Bias', 
            desc:'Duration : 25mins',
            price:'$15.90',
            free:true,
            icon:<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Khan_Academy_logo_%282018%29.svg/1200px-Khan_Academy_logo_%282018%29.svg.png' alt="" width={100} height={15}/>,
            rating:<Rating
            name="simple-controlled"
            value={4}
            />,
            rate:'43,435',
            button_text:'Enroll Now',
        } ,{
            type:'Popular',
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe16otpX-vCBLmD1ATCu21KBF2kxYYKs2BFQ&usqp=CAU",
            heading:'Communication', 
            desc:'Duration : 50mins',
            price:'$18.90',
            free:false,
            icon:<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Khan_Academy_logo_%282018%29.svg/1200px-Khan_Academy_logo_%282018%29.svg.png' alt="" width={100} height={15}/>,
            rating:<Rating
            name="simple-controlled"
            value={4}
            />,
            rate:'43,435',
            button_text:'Buy Now',
            addon:'Added'
        } 
    ]
    },{
        'head':{
          title:'Certifications Courses',
          type:true,
          filter:[
            {
                title:<div className={styles.check}><Checkbox/> <sapn>Free Certifications</sapn></div>

            },
            {
                title:<div className={styles.check}><Checkbox/> <sapn>Paid Certifications</sapn></div>

            },
            {
                title:<div className={styles.dec}><span className={styles.span}>Sort: </span> <span>Best Seller</span> <KeyboardArrowDownIcon/></div>

            }
          ]
        },
        info:[{
            type:'Popular',
            image:"https://c8.alamy.com/comp/2CW1TRM/business-people-group-meeting-shot-from-top-view-in-office-profession-businesswomen-businessmen-and-office-workers-working-in-team-conference-with-2CW1TRM.jpg",
            heading:'Statistics', 
            desc:'Duration : 1hour 12mins',
            price:'$10.90',
            free:false,
            icon:<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png" alt="" width={50} height={15}/>,
            rating:<Rating
            name="simple-controlled"
            value={4.5}
            />,
            rate:'43,435',
            button_text:'Buy Now',
            addon:'Add'

        },{
            type:'Best Seller',
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkChxPKqHMNtGZFqE4D__WyfPE7K6fLfHAQw&usqp=CAU",
            heading:'Leadership Skills', 
            desc:'Duration : 50mins',
            price:'$18.90',
            free:false,
            icon:<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Khan_Academy_logo_%282018%29.svg/1200px-Khan_Academy_logo_%282018%29.svg.png' alt="" width={100} height={15}/>,
            rating:<Rating
            name="simple-controlled"
            value={4}
            />,
            rate:'43,435',
            button_text:'Buy Now',
            addon:'Added'
        } ,{
            type:'Popular',
            image:"https://media.istockphoto.com/id/1085389362/photo/business-people-working-in-the-office.jpg?s=612x612&w=0&k=20&c=hvSdhiWmnjfRYHrm15vo0hJ7iLUvaRxNnhw7E0JDRzU=",
            heading:'Team work', 
            desc:'Duration : 25mins',
            price:' $19.90',
            free:false,
            icon:<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Khan_Academy_logo_%282018%29.svg/1200px-Khan_Academy_logo_%282018%29.svg.png' alt="" width={100} height={15}/>,
            rating:<Rating
            name="simple-controlled"
            value={4}
            />,
            rate:'43,435',
            button_text:'Enroll Now',
        } 
    ]
    },
  
]