import { useState } from "react";
import classes from "./ImageCanvas.module.scss";
import { FcAddImage } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";


const ImageCanvas = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const {zoomLevel} = useSelector(state=> state.imageAdjustmentsReducer)
  const dispatch=useDispatch();


  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    console.log(image);
    setSelectedImage(image);
  };
 
  

  const handleScrollZoom=(e)=>{
   const delta=e.deltaY;
   console.log(delta)
   if(delta > 0) {
    dispatch({type:'zoomOut'})
   }
   else{
    
    dispatch({type:'zoomIn'})
   }
  }
  

  return (
    <div className={classes.image_canvas}>
      <div className={classes.container_center} 
      style={{ transform: `scale(${zoomLevel})` }}
      onWheel={(e)=> selectedImage && handleScrollZoom(e)}
      >
          <div className={`${classes.input_div} ${selectedImage && classes.hide_input}`}>
            <label htmlFor="image_upload"><FcAddImage /></label>
            <p> Drop your image here, or <label htmlFor="image_upload">browse</label></p>
            <input
              type="file"
              id="image_upload"
              onChange={(e) => handleImageUpload(e)}
            />
          </div>
        {selectedImage && (
          <img src={URL.createObjectURL(selectedImage)} alt="Preview" />
        )}
      </div>
    </div>
  );
};
export default ImageCanvas;
