import { useState } from "react";
import classes from "./ImageCanvas.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import ImageUpload from "./upload-image/UploadImage";
const ImageCanvas = () => {
  const [crop, setCrop] = useState({  aspect: 16 / 9 });
  const { zoomLevel } = useSelector((state) => state.imageAdjustmentsReducer);
  const { selectedImage } = useSelector((state) => state.imageReducer);
  const dispatch = useDispatch();
  

  const handleScrollZoom = (e) => {
    const delta = e.deltaY;
    console.log(delta);
    if (delta > 0) {
      dispatch({ type: "zoomOut" });
    } else {
      dispatch({ type: "zoomIn" });
    }
  };


  return (
    <motion.div
      className={classes.image_canvas}
      initial={{x:'-500px'}} 
      animate={{x:'-5px'}} 
      exit={{x:0}}
      transition={{ duration: 1.1 }}
    >
      <div className={classes.container_center}
        style={{ transform: `scale(${zoomLevel})` }}
        onWheel={(e) => selectedImage && handleScrollZoom(e)}
      >  
       <ImageUpload/>
        { selectedImage && <ReactCrop   crop={crop} onChange={(newC)=>setCrop(newC)}  onComplete={(e)=>{setCrop(e); console.log(e)}}>
        <img src={selectedImage} alt="Preview" />
          </ReactCrop>}
      </div>
    </motion.div>
  );
};
export default ImageCanvas;
