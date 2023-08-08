import classes from './Navbar.module.scss'
import DUMMY_USER_IMAGE from '../../../assets/images/user.png';
import {BiUserCircle} from 'react-icons/bi'
const Navbar=()=>{
    return(
        <nav className={classes.navbar}>
            <div className={classes.container}>
              <div className={classes.logo}>
                Visual Edit
              </div>
              <div className={classes.user}>
                 <p>Ayush Singh</p>
                    <img src={DUMMY_USER_IMAGE} alt="user_image" /> 
              </div>
            </div>
        </nav>
    )
}
export default Navbar;