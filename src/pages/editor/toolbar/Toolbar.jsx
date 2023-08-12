import classes from './Toolbar.module.scss';
import { TbResize } from 'react-icons/tb';
import { AiOutlineRotateRight } from 'react-icons/ai';
import { FcAddImage, FcRemoveImage } from 'react-icons/fc';
import { BsCrop, BsPencil, BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { PiTextTBold } from 'react-icons/pi';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import useImageUpload from '../../../hooks/useImageUpload';

const Toolbar = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const { selectedImage } = useSelector((state) => state.imageUploadReducer);

  const dispatch=useDispatch();

  const { handleImageUpload } = useImageUpload();

  const handleInputChange = (e) => {

    const API_ENDPOINT = 'http://localhost:4000/api/file/upload';
    handleImageUpload(e, API_ENDPOINT);
  }
  
  const removeImage=()=>{
    dispatch({ type: "upload", payload: "" });
    dispatch({ type: "setCroppedImage", payload: "" });
  }

  return (
    <div className={classes.toolbar}>
      <div className={classes.tools}>
        {!selectedImage && <div title='Add Image'>
          <label htmlFor="image"><FcAddImage /> </label>
          <input type="file" id='image' onChange={(e) => handleInputChange(e)} />
        </div>}
        {selectedImage && <div title='Remove Image' onClick={removeImage}> <FcRemoveImage /></div>}
        <div title='Crop'><BsCrop /></div>
        <div title='Resize'><TbResize /></div>
        <div title='Rotate'><AiOutlineRotateRight /></div>
        <div title='Pencil'><BsPencil /></div>
        <div title='Text'><PiTextTBold /></div>
      </div>
      <div className={classes.darkMode_button_container}>
        {/* <small> {isDarkMode ? 'Light Mode' :'Dark Mode'} </small> */}
        {isDarkMode && <BsFillSunFill onClick={() => setIsDarkMode(false)} />}
        {!isDarkMode && <BsFillMoonStarsFill onClick={() => setIsDarkMode(true)} />}
      </div>
    </div>
  )
}
export default Toolbar;