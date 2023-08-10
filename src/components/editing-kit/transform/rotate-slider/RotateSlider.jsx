import classes from "../../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import { useDispatch } from "react-redux";
import CircularSlider from '@fseehawer/react-circular-slider';

const RotateSlider=()=>{

const dispatch = useDispatch();    

const handleRotate = (degree) => {
    dispatch({ type: 'rotate', payload: degree })
 }    
    return (
        <div className={classes.expanded_edit_container}>
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
            knobPosition="top" onChange={(degree) => handleRotate(degree)} />
        </div>
      )
}
export default RotateSlider;