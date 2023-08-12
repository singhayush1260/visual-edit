import { useState } from "react";
import classes from "../../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import { useDispatch } from "react-redux";

const Crop = () => {

  const[isCropping, setIsCropping]=useState(false);  

  return (
    <div className={classes.expanded_edit_container__crop}>
       { !isCropping && <small onClick={()=>setIsCropping(!isCropping)}>Crop</small>}
       { isCropping && <small  onClick={()=>setIsCropping(!isCropping)}>Cropping.....</small>}
      { isCropping && <div>
            <small>X: 0</small>
            <small>Y: 0</small>
            <small>W: 0</small>
            <small>H: 0</small>
        </div>}
    </div>
  );
};
export default Crop;

/*
import classes from "../../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import { useDispatch } from "react-redux";

const CropButton = () => {
    return (
        <div className={classes.expanded_edit_container__crop}>
            <div className={classes.button_controller}>
                <small>Y</small>
                <div className={classes.input_group}>
                    <div>-</div>
                    <input title="Width" type="number" />
                    <div >+</div>
                </div>
                <small style={{ fontSize: '0.4em' }}>Y</small>
                <div className={classes.input_group}>
                    <div>-</div>
                    <input title="Width" type="number" />
                    <div >+</div>
                </div>
            </div>
            <div className={classes.group_buttons} style={{ gap: '0.1em' }}>
                <small style={{ fontSize: '0.4em' }}>W</small>
                <div className={classes.button_controller}>
                    <div>-</div>
                    <input title="Width" type="number" />
                    <div >+</div>
                </div>
                <small style={{ fontSize: '0.4em' }}>H</small>
                <div className={classes.button_controller}>
                    <div>-</div>
                    <input title="Width" type="number" />
                    <div >+</div>
                </div>
            </div>
        </div>
    )
}
export default CropButton;

*/
