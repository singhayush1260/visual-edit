import classes from "./Sidebar.module.scss";
import {AiOutlineCloseCircle, AiOutlineMenuFold, AiOutlineHome, AiOutlinePhone, AiOutlineSetting, AiFillLeftCircle, AiFillRightCircle} from 'react-icons/ai';
import {TbPhotoUp} from 'react-icons/tb';
import {BsInfoSquare} from 'react-icons/bs';
import {CiLogout} from 'react-icons/ci';
import DUMMY_USER_IMAGE from '../../../assets/images/user.png';
import { useState } from "react";
import { motion } from "framer-motion";
const Sidebar = () => {

  const[expandSidebar, setExpandSidebar]=useState(false);
  const[isMobile, setIsMobile]=useState(false);

  return (
   <>
   <motion.div 
   className={` ${classes.sidebar} 
   ${ expandSidebar ? classes.expanded_sidebar : classes.contracted_sidebar}`}
      initial={{x:'900px'}} 
      animate={{x:'-5px'}} 
      exit={{x:0}}
      transition={{ duration: 1.1 }}
   >
    {  expandSidebar && <AiFillLeftCircle className={classes.close} onClick={()=>setExpandSidebar(!expandSidebar)}/>}
    {  !expandSidebar && <AiFillRightCircle className={classes.open} onClick={()=>setExpandSidebar(!expandSidebar)}/>}
    <div className={classes.logo}>
       {expandSidebar && <h2>Visual Edit</h2> }
       {!expandSidebar && <h2>VE</h2>}
    </div>
    <div className={classes.menus}>
        <div className={classes.active}> <AiOutlineHome/><span>Home</span></div>
        <div> <TbPhotoUp/> <span>Editor</span> </div>
        <div> <BsInfoSquare/> <span>Info</span></div>
        <div> <AiOutlinePhone/><span>Contact</span></div>
    </div>
    <div className={classes.account}>
      <div className={classes.user_dp}> 
      <img src={DUMMY_USER_IMAGE} alt="user_dp" />
       </div>
      <div> <AiOutlineSetting/><span>Setting</span></div>
      <div> <CiLogout/> <span>Logout</span></div>
    </div>
   </motion.div>
   </>
    );
};
export default Sidebar;
