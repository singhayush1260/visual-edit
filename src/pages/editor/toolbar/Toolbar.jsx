import React from 'react';
import classes from './Toolbar.module.scss';
import { TbResize } from 'react-icons/tb';
import { AiOutlineRotateRight, AiOutlineZoomIn } from 'react-icons/ai';
import { FcAddImage, FcRemoveImage } from 'react-icons/fc';
import { BsCrop, BsPencil, BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { PiTextTBold } from 'react-icons/pi';
import { useSelector, useDispatch } from 'react-redux';


const Toolbar = () => {
  const { selectedImage } = useSelector((state) => state.imageUploadReducer);
  const { isDarkTheme } = useSelector((state) => state.themeReducer);
  const { isZooming, isCropping, showRotationSlider, isResizing } = useSelector( (state) => state.stateReducer);

  const dispatch = useDispatch();

  const handleToolClick = (tool) => {
    switch (tool) {
      case 'addImage':
        showImageUploadDialog();
        break;
      case 'removeImage':
        removeImage();
        break;
      case 'crop':
        dispatch({type:'setEditingState',payload:'crop'})
        break;
      case 'resize':
        dispatch({type:'setEditingState',payload:'resize'})
        break;
      case 'rotate':
        dispatch({ type: "toggleDraggableDialogBoxVisibility"});
        dispatch({type:'setEditingState',payload:'rotate'})
        break;
      case 'zoom':
        dispatch({type:'setEditingState',payload:'zoom'})
        break;
      case 'pencil':
        // Dispatch the action for pencil tool
        break;
      case 'text':
        // Dispatch the action for text tool
        break;
      default:
        break;
    }
  };

  const showImageUploadDialog = () => {
    dispatch({ type: 'showDialog' });
  };

  const removeImage = () => {
    dispatch({ type: 'upload', payload: '' });
    dispatch({ type: 'setCroppedImage', payload: '' });
  };

  return (
    <div className={`${isDarkTheme ? 'dark_theme' : 'light_theme'} ${classes.toolbar}`}>
      <div className={classes.tools}>
        <div   title='Add Image' onClick={() => handleToolClick('addImage')}>
          <FcAddImage />
        </div>
        {selectedImage && (
          <div  title='Remove Image' onClick={() => handleToolClick('removeImage')}>
            <FcRemoveImage />
          </div>
        )}
        <div className={`${isCropping && classes.currently_active}`} title='Crop' onClick={() => handleToolClick('crop')}>
          <BsCrop />
        </div>
        <div className={`${isResizing && classes.currently_active}`} title='Resize' onClick={() => handleToolClick('resize')}>
          <TbResize />
        </div>
        <div className={`${showRotationSlider && classes.currently_active}`} title='Rotate' onClick={() => handleToolClick('rotate')}>
          <AiOutlineRotateRight />
        </div>
        <div className={`${isZooming && classes.currently_active}`} title='Zoom' onClick={() => handleToolClick('zoom')}>
          <AiOutlineZoomIn />
        </div>
        <div title='Pencil' onClick={() => handleToolClick('pencil')}>
          <BsPencil />
        </div>
        <div title='Text' onClick={() => handleToolClick('text')}>
          <PiTextTBold />
        </div>
      </div>
      <div className={classes.darkMode_button_container} onClick={() => dispatch({ type: 'toggleTheme' })}>
        {isDarkTheme ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
      </div>
    </div>
  );
};

export default Toolbar;
