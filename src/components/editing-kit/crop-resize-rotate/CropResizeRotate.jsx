import classes from "../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import { BsCrop } from "react-icons/bs";
import { TbResize } from "react-icons/tb";
import { AiOutlineRotateRight } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import CircularSlider from '@fseehawer/react-circular-slider';
import { useState } from "react";
const CropResizeRotate = () => {

  const[showExpanded, setShowExpanded]=useState(false);
  const { showPreview }=useSelector((state) => state.transformationReducer)
  const dispatch=useDispatch();

  const getCropped=()=>{
    
  }

  const handleRotate=(degree)=>{
   dispatch({type:'rotate',payload:degree})
  }
  
  return (
    <div className={classes.edit_container}>
      <small>Crop/ Resize/ Rotate</small>
       <div className={classes.edit_controller}>
        <button title="Crop" onClick={()=>{dispatch({type:'transform',payload:{buttonType:'crop', value:true}})}}> <BsCrop/> </button>
        <button title="Resize"> <TbResize/>  </button>
        <button title="Rotate" onClick={()=>setShowExpanded(!showExpanded)}> <AiOutlineRotateRight/> </button>
       </div>
      {  showExpanded && <div className={classes.expanded_edit_container}>
         <CircularSlider 
            width={60}
             minValue={0}
             maxValue={360}
             label="Angle"
             labelColor="white"
             labelFontSize="10px"
             valueFontSize="12px"
             verticalOffset="0rem"
             knobSize={25}
             knobPosition="top" onChange={(degree) => handleRotate(degree) }/>
       </div>}
       
    </div>
  );
};
export default CropResizeRotate;
