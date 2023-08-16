import classes from "./ImageCanvas.module.scss";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import ImageDisplayArea from "./image-display-area/ImageDisplayArea";
import ImageArea from "./image-display-area/ImageArea";
import RealTimeCropData from '../../../components/real-time-crop-data/RealTimeCropData';

const ImageCanvas = () => {

  const { tempRenderedImage,originalImage } = useSelector((state) => state.imageUploadReducer);

  return (
    <motion.div
      className={classes.image_canvas}
      initial={{ x: "-500px" }}
      animate={{ x: "-5px" }}
      exit={{ x: 0 }}
      transition={{ duration: 1.1 }}
    > 
      <div className={classes.container_center}>
        <ImageArea image={tempRenderedImage || originalImage}/>
      </div>
      <RealTimeCropData/>
    </motion.div>
  );
};
export default ImageCanvas;
