import classes from "../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import { BsCrop } from "react-icons/bs";
import { TbResize } from "react-icons/tb";
import { AiOutlineRotateRight, AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import CircularSlider from '@fseehawer/react-circular-slider';
import { useState } from "react";
const CropResizeRotate = () => {

  const DEFAULT_DIMENSION = 100; 

  const [showExpanded, setShowExpanded] = useState({ showResizeButton: false, showRotationSlider: false });
  const [dimension, setDimension] = useState({ width: DEFAULT_DIMENSION, height: DEFAULT_DIMENSION });
  const { showPreview } = useSelector((state) => state.transformationReducer)
  const dispatch = useDispatch();

  const getCropped = () => {

  }

  const handleWidthResize = (action, value) => {
    if (action === 'inc') {
      setDimension({ ...dimension, width: dimension.width + value });
    } else if (action === 'dec') {
      setDimension({ ...dimension, width: dimension.width - value < DEFAULT_DIMENSION ? DEFAULT_DIMENSION : dimension.width - value });
    }
    else {
      setDimension({ ...dimension, width: value < DEFAULT_DIMENSION ? DEFAULT_DIMENSION : value });
    }
  }

  const handleHeightResize = (action, value) => {
    if (action === 'inc') {
      setDimension({ ...dimension, height: dimension.height + value });
    } else if (action === 'dec') {
      setDimension({ ...dimension, height: dimension.height - value < DEFAULT_DIMENSION ? DEFAULT_DIMENSION : dimension.height - value });
    }
    else {
      setDimension({ ...dimension, height: value < DEFAULT_DIMENSION ? DEFAULT_DIMENSION : value });
    }
  }

  const handleRotate = (degree) => {
    dispatch({ type: 'rotate', payload: degree })
  }

  const renderResizeUI = () => {
    return (
      <div className={classes.expanded_edit_container}>
        <div className={classes.group_buttons}>
          <div className={classes.button_controller}>
            <div onClick={() => handleWidthResize('dec', 10)}>-</div>
            <input title="Width" type="number" value={dimension.width} onChange={(e) => handleWidthResize("", parseInt(e.target.value))} />
            <div onClick={() => handleWidthResize('inc', 10)}>+</div>
          </div>
          <small>X</small>
          <div className={classes.button_controller}>
            <div onClick={() => handleHeightResize('dec', 10)}>-</div>
            <input title="Height" type="number" value={dimension.height} onChange={(e) => handleWidthResize("", parseInt(e.target.value))} />
            <div onClick={() => handleHeightResize('inc', 10)}>+</div>
          </div>
        </div>
      </div>
    )
  }

  const renderRotateUI = () => {
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

  return (
    <div className={classes.edit_container}>
      <small>Transform</small>
      <div className={classes.edit_controller}>
        <button title="Crop" onClick={() => { dispatch({ type: 'transform', payload: { buttonType: 'crop', value: true } }) }}> <BsCrop /> </button>
        <button title="Resize" onClick={() => setShowExpanded({ ...showExpanded, showResizeButton: !showExpanded.showResizeButton })}> <TbResize />  </button>
        <button title="Rotate" onClick={() => setShowExpanded({ ...showExpanded, showRotationSlider: !showExpanded.showRotationSlider })}> <AiOutlineRotateRight /> </button>
      </div>
      {showExpanded.showResizeButton && renderResizeUI()}
      {showExpanded.showRotationSlider && renderRotateUI()}
    </div>
  );
};
export default CropResizeRotate;
