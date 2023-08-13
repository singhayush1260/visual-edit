import React from 'react';
import classes from './Toolbar.module.scss';
import { TbResize } from 'react-icons/tb';
import { AiOutlineRotateRight, AiOutlineZoomIn } from 'react-icons/ai';
import { FcAddImage, FcRemoveImage } from 'react-icons/fc';
import { BsCrop, BsPencil, BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { PiTextTBold } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import useImageUpload from '../../../hooks/useImageUpload';

const Toolbar = () => {
  const { selectedImage } = useSelector((state) => state.imageUploadReducer);
  const { isDarkTheme } = useSelector((state) => state.themeReducer);

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
        dispatch({ type: "enableCropping"});
        break;
      case 'resize':
        // Dispatch the action for resize tool
        break;
      case 'rotate':
        // Dispatch the action for rotate tool
        break;
      case 'zoom':
        // Dispatch the action for zoom tool
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
        <div title='Add Image' onClick={() => handleToolClick('addImage')}>
          <FcAddImage />
        </div>
        {selectedImage && (
          <div title='Remove Image' onClick={() => handleToolClick('removeImage')}>
            <FcRemoveImage />
          </div>
        )}
        <div title='Crop' onClick={() => handleToolClick('crop')}>
          <BsCrop />
        </div>
        <div title='Resize' onClick={() => handleToolClick('resize')}>
          <TbResize />
        </div>
        <div title='Rotate' onClick={() => handleToolClick('rotate')}>
          <AiOutlineRotateRight />
        </div>
        <div title='Zoom' onClick={() => handleToolClick('zoom')}>
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
