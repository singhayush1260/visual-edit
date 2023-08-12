import classes from "../../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import { useDispatch } from "react-redux";
import CircularSlider from '@fseehawer/react-circular-slider';
import { useState } from "react";
const RotateSlider=()=>{

const dispatch = useDispatch();    
const[isRotating, setIsRotating]=useState(false); 

const handleRotate = (degree) => {
    dispatch({ type: 'rotate', payload: degree })
 }    
    return (
        <div className={classes.expanded_edit_container__rotate}>
         <small onClick={()=>setIsRotating(!isRotating)}>Rotate</small>
         { isRotating &&    <CircularSlider
            width={60}
            minValue={0}
            maxValue={360}
            label="Angle"
            labelColor="white"
            labelFontSize="10px"
            valueFontSize="12px"
            verticalOffset="0rem"
            knobSize={25}
            knobPosition="top" onChange={(degree) => handleRotate(degree)} /> }
        </div>
      )
}
export default RotateSlider;