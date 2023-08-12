import classes from "../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import {BiChevronDown} from 'react-icons/bi';
//import classes from './style.scss'
import { useState } from "react";
const Adjustment=()=>{

const[expand, setExpand]=useState(false);

    return(
        <div className={classes.edit_container}>
         <div className={classes.edit_container__title} onClick={()=>setExpand(!expand)}>
            <small>Adjustements</small>
            <BiChevronDown/>
         </div>
         {
            expand && <div className={classes.expanded_edit_container}>
               <div className={classes.expanded_edit_container__adjustement} >
               <div className={classes.slider_wrapper}>
               <small>Brightness</small>
               <input type="range" min={1} step={0.1} />
            </div>
            <div className={classes.slider_wrapper}>
               <small>Contrast</small>
               <input type="range" min={1} step={0.1} />
            </div>
            <div className={classes.slider_wrapper}>
               <small>Hue</small>
               <input type="range" min={1} step={0.1} />
            </div>
            <div className={classes.slider_wrapper}>
               <small>Saturation</small>
               <input type="range" min={1} step={0.1} />
            </div>
               </div>
             </div>
         }
      </div>
    )
}
export default Adjustment;