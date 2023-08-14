import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';


import classes from '../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss';

const Adjustment = () => {
  const [expand, setExpand] = useState(false);
  const dispatch = useDispatch();

  const handleBrightnessChange = (e) => {
    const newBrightness = parseFloat(e.target.value);
    dispatch({type:'adjustBrightness',payload:newBrightness}); 
  };

  const handleContrastChange = (e) => {
    const newContrast = parseFloat(e.target.value);
    dispatch({type:'adjustContrast',payload:newContrast}); 
  };

  const handleHueChange = (e) => {
    const newHue = parseFloat(e.target.value);
    dispatch({type:'adjustHue',payload:newHue}); 
  }; 

  const handleSaturationChange = (e) => {
    const newSaturation = parseFloat(e.target.value);
    dispatch({type:'adjustSaturation',payload:newSaturation}); 
  };

  return (
    <div className={classes.edit_container}>
      <div className={classes.edit_container__title} onClick={() => setExpand(!expand)}>
        <small>Adjustements</small>
        <BiChevronDown />
      </div>
      {expand && (
        <div className={classes.expanded_edit_container}>
          <div className={classes.expanded_edit_container__adjustement}>
            <div className={classes.slider_wrapper}>
              <small>Brightness</small>
              <input type="range" min={1} step={2}  onChange={handleBrightnessChange} />
            </div>
            <div className={classes.slider_wrapper}>
              <small>Contrast</small>
              <input type="range" min={1} step={2} max={100} onChange={handleContrastChange} />
            </div>
            <div className={classes.slider_wrapper}>
              <small>Hue</small>
              <input type="range" min={1} step={0.1} onChange={handleHueChange} />
            </div>
            <div className={classes.slider_wrapper}>
              <small>Saturation</small>
              <input type="range" min={1} step={1} onChange={handleSaturationChange} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Adjustment;
