import classes from "../ImageCanvas.module.scss";
import { FcAddImage } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
const ImageUpload = () => {
  
  const  { selectedImage }  = useSelector((state) => state.imageReducer);
  const dispatch=useDispatch();

  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    const serializedImage=URL.createObjectURL(image)
    dispatch({type:'upload', payload:serializedImage})
  };

  return (
    <div className={`${classes.input_div} ${selectedImage && classes.hide_input}`}>
      <label htmlFor="image_upload">
        <FcAddImage />
      </label>
      <p>
        Drop your image here, or<label htmlFor="image_upload"> browse</label>
      </p>
      <input type="file" id="image_upload" onChange={(e)=>handleImageUpload(e)} />
    </div>
  );
};
export default ImageUpload;
