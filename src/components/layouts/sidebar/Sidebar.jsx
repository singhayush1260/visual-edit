import classes from "./Sidebar.module.scss";
import {AiOutlineCloseCircle, AiOutlineMenuFold, AiOutlineHome, AiOutlinePhone, AiOutlineSetting, AiFillLeftCircle, AiFillRightCircle} from 'react-icons/ai';
import {TbPhotoUp} from 'react-icons/tb';
import {BsInfoSquare} from 'react-icons/bs';
import {CiLogout} from 'react-icons/ci';
import DUMMY_USER_IMAGE from '../../../assets/images/user.png';
import { useState } from "react";
const Sidebar = () => {

  const[expandSidebar, setExpandSidebar]=useState(true);
  const[isMobile, setIsMobile]=useState(false);

  return (
   <>
   <div className={` ${classes.sidebar} ${expandSidebar  ? classes.expanded_sidebar : classes.contracted_sidebar}` }>
    {  expandSidebar && <AiFillLeftCircle className={classes.close} onClick={()=>setExpandSidebar(!expandSidebar)}/>}
    {  !expandSidebar && <AiFillRightCircle className={classes.open} onClick={()=>setExpandSidebar(!expandSidebar)}/>}
    <div className={classes.logo}>
       {expandSidebar && <h2>Visual Edit</h2> }
       {!expandSidebar && <h2>VE</h2>}
    </div>
    <div className={classes.menus}>
        <div className={classes.active}> <AiOutlineHome/><span>Editor</span></div>
        <div> <TbPhotoUp/> <span>Editor</span> </div>
        <div> <BsInfoSquare/> <span>Editor</span></div>
        <div> <AiOutlinePhone/><span>Editor</span></div>
    </div>
    <div className={classes.account}>
      <div className={classes.user_dp}> 
      <img src={DUMMY_USER_IMAGE} alt="user_dp" />
       </div>
      <div> <AiOutlineSetting/><span>Editor</span></div>
      <div> <CiLogout/> <span>Editor</span></div>
    </div>
   </div>
    

   </>
    );
};
export default Sidebar;
