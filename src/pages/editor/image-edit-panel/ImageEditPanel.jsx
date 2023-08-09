import classes from "./ImageEditPanel.module.scss";
import { motion } from "framer-motion";
import ZoomLevel from "../../../components/editing-kit/zoom/ZoomLevel";
import Adjustment from "../../../components/editing-kit/image-adjustement/Adjustement";
import CropResizeRotate from "../../../components/editing-kit/crop-resize-rotate/CropResizeRotate";
import SaveDownload from "../../../components/editing-kit/save-download/SaveDownload";
const ImageEditPanel = () => {
  // const handleDownload = () => {
  //     if (selectedImage) {
  //       const imageUrl = URL.createObjectURL(selectedImage);
  //       const link = document.createElement('a');
  //       link.href = imageUrl;
  //       link.target = '_blank'; // Open the link in a new tab/window
  //       link.download = 'downloaded_image.png'; // You can customize the filename here
  //       link.click();
  //       URL.revokeObjectURL(imageUrl);
  //     }
  //   };

  return (
    <motion.div className={classes.edit_panel} initial={{ x: "700px" }} animate={{ x: "-5px" }}
      exit={{ x: 0 }} transition={{ duration: 1.1 }} >
      <SaveDownload/>
      <ZoomLevel />
      <CropResizeRotate />
      <Adjustment />
    </motion.div>
  );
};
export default ImageEditPanel;
