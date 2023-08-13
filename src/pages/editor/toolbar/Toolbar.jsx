import classes from './Toolbar.module.scss';
import { TbResize } from 'react-icons/tb';
import { AiOutlineRotateRight, AiOutlineZoomIn } from 'react-icons/ai';
import { FcAddImage, FcRemoveImage } from 'react-icons/fc';
import { BsCrop, BsPencil, BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { PiTextTBold } from 'react-icons/pi';
import { useSelector, useDispatch } from "react-redux";
import useImageUpload from '../../../hooks/useImageUpload';


const Toolbar = () => {

  const { selectedImage } = useSelector((state) => state.imageUploadReducer);

  const { isDarkTheme } = useSelector((state) => state.themeReducer);

  const dispatch=useDispatch();

  const handleInputChange = (e) => {

    // const API_ENDPOINT = 'http://localhost:4000/api/file/upload';
    // handleImageUpload(e, API_ENDPOINT);
  }
  const showImageUploadDialog=()=>{
    dispatch({type:'showDialog'});
  }
  
  const removeImage=()=>{
    dispatch({ type: "upload", payload: "" });
    dispatch({ type: "setCroppedImage", payload: "" });
  }

  return (
    <div className={`${isDarkTheme ? 'dark_theme' : 'light_theme'} ${classes.toolbar}`}>
      <div className={classes.tools}>
        <div title='Add Image' onClick={showImageUploadDialog}><FcAddImage htmlFor="image" /></div>
        {selectedImage && <div title='Remove Image' onClick={removeImage}> <FcRemoveImage /></div>}
        <div title='Crop'><BsCrop /></div>
        <div title='Resize'><TbResize /></div>
        <div title='Rotate'><AiOutlineRotateRight /></div>
        <div title='Zoom'><AiOutlineZoomIn /></div>
        <div title='Pencil'><BsPencil /></div>
        <div title='Text'><PiTextTBold /></div>
      </div>
      <div className={classes.darkMode_button_container} onClick={() => dispatch({type:'toggleTheme'})}>
        {/* <small> {isDarkMode ? 'Light Mode' :'Dark Mode'} </small> */}
        {isDarkTheme && <BsFillSunFill  />}
        {!isDarkTheme && <BsFillMoonStarsFill  />}
      </div>
    </div>
  )
}
export default Toolbar;