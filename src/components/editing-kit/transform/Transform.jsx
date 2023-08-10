import classes from "../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import { BsCrop } from "react-icons/bs";
import { TbResize } from "react-icons/tb";
import { AiOutlineRotateRight } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import CropButton from "./crop-button/CropButton";
import ResizeButton from "./resize-button/ResizeButton";
import RotateSlider from "./rotate-slider/RotateSlider";
import { useState } from "react";
const Transform = () => {

  const [showExpanded, setShowExpanded] = useState({ showCropButton:false, showResizeButton: false, showRotationSlider: false });
  const { showPreview } = useSelector((state) => state.transformationReducer)
  const dispatch = useDispatch();

  const getCropped = () => {

  }
//dispatch({ type: 'transform', payload: { buttonType: 'crop', value: true } })
  return (
    <div className={classes.edit_container}>
      <small>Transform</small>
      <div className={classes.edit_controller}>
        <button title="Crop"   onClick={() => setShowExpanded({ ...showExpanded, showCropButton: !showExpanded.showCropButton }) }> <BsCrop /> </button>
        <button title="Resize" onClick={() => setShowExpanded({ ...showExpanded, showResizeButton: !showExpanded.showResizeButton })}> <TbResize />  </button>
        <button title="Rotate" onClick={() => setShowExpanded({ ...showExpanded, showRotationSlider: !showExpanded.showRotationSlider })}> <AiOutlineRotateRight /> </button>
      </div>
      {showExpanded.showCropButton && <CropButton/>}
      {showExpanded.showResizeButton && <ResizeButton/>}
      {showExpanded.showRotationSlider && <RotateSlider/>}
    </div>
  );
};
export default Transform;
