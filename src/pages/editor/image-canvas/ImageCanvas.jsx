import classes from "./ImageCanvas.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import ImageUpload from "./upload-image/UploadImage";
import ImageDisplayArea from "./image-display-area/ImageDisplayArea";

const ImageCanvas = () => {
  const { zoomLevel } = useSelector((state) => state.imageAdjustmentsReducer);
  const { selectedImage } = useSelector((state) => state.imageUploadReducer);
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
      initial={{ x: "-500px" }}
      animate={{ x: "-5px" }}
      exit={{ x: 0 }}
      transition={{ duration: 1.1 }}
    >
      <div className={classes.container_center} style={{ transform: `scale(${zoomLevel})` }}
        onWheel={(e) => selectedImage && handleScrollZoom(e)} >
        <ImageUpload />
        <ImageDisplayArea />
      </div>
    </motion.div>
  );
};
export default ImageCanvas;
