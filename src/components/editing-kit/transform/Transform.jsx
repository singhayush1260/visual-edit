import classes from "../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import { BsCrop } from "react-icons/bs";
import { TbResize } from "react-icons/tb";
import {BiChevronDown, BiChevronUp} from 'react-icons/bi';
import { AiOutlineRotateRight } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import Crop from "./crop/Crop";
import Resize from "./resize/Resize";
import RotateSlider from "./rotate-slider/RotateSlider";
import { useState } from "react";
const Transform = () => {

  const [showExpanded, setShowExpanded] = useState({ showCropButton:false, showResizeButton: false, showRotationSlider: false });
  const { showPreview } = useSelector((state) => state.transformationReducer);
  const[expand, setExpand]=useState(false);
  const dispatch = useDispatch();

  const getCropped = () => {

  }
//dispatch({ type: 'transform', payload: { buttonType: 'crop', value: true } })
  return (
    <div className={classes.edit_container}>
      <div className={classes.edit_container__title} onClick={()=>setExpand(!expand)}>
            <small>Transform</small>
          { !expand &&  <BiChevronDown/> }
          { expand &&  <BiChevronUp/> }         
       </div>
       <div className={classes.expanded_edit_container}>
       { expand && <div className={classes.edit_controller}>
          <Crop/>
          <Resize/>
          <RotateSlider/>
        </div>}
       </div>
    </div>
  );
};
export default Transform;


/*

import classes from "../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import { BsCrop } from "react-icons/bs";
import { TbResize } from "react-icons/tb";
import {BiChevronDown} from 'react-icons/bi';
import { AiOutlineRotateRight } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import CropButton from "./crop-button/CropButton";
import ResizeButton from "./resize-button/ResizeButton";
import RotateSlider from "./rotate-slider/RotateSlider";
import { useState } from "react";
const Transform = () => {

  const [showExpanded, setShowExpanded] = useState({ showCropButton:false, showResizeButton: false, showRotationSlider: false });
  const { showPreview } = useSelector((state) => state.transformationReducer);
  const[expand, setExpand]=useState(false);
  const dispatch = useDispatch();

  const getCropped = () => {

  }
//dispatch({ type: 'transform', payload: { buttonType: 'crop', value: true } })
  return (
    <div className={classes.edit_container}>
      <div className={classes.edit_container__title} onClick={()=>setExpand(!expand)}>
            <small>Transform</small>
            <BiChevronDown/>
         </div>
       <div className={classes.expanded_edit_container}>
       {
        expand && <div className={classes.edit_controller}>
        <button title="Crop"   onClick={() => setShowExpanded({ ...showExpanded, showCropButton: !showExpanded.showCropButton }) }> <BsCrop /> </button>
        <button title="Resize" onClick={() => setShowExpanded({ ...showExpanded, showResizeButton: !showExpanded.showResizeButton })}> <TbResize />  </button>
        <button title="Rotate" onClick={() => setShowExpanded({ ...showExpanded, showRotationSlider: !showExpanded.showRotationSlider })}> <AiOutlineRotateRight /> </button>
      </div>
      //  showExpanded.showCropButton && <CropButton/> 
      // {showExpanded.showResizeButton && <ResizeButton/>}
      // {showExpanded.showRotationSlider && <RotateSlider/>}
       }
       </div>
    </div>
  );
};
export default Transform;

*/