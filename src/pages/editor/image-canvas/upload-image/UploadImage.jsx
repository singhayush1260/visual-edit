import classes from "../ImageCanvas.module.scss";
import { FcAddImage } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const ImageUpload = () => {
  
  const  { selectedImage }  = useSelector((state) => state.imageUploadReducer);
  const dispatch=useDispatch();

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    const formData=new FormData();
    formData.append('image',image);
    try {
      const response = await axios.post('http://localhost:4000/api/file/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  
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
