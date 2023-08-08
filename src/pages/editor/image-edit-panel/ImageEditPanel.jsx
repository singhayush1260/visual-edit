import classes from "./ImageEditPanel.module.scss";
import {
  AiOutlineUpload,
  AiOutlineSave,
  AiOutlineDownload,
} from "react-icons/ai";
import { motion } from "framer-motion";
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
    <motion.div
      className={classes.edit_panel}
      initial={{ x: "700px" }}
      animate={{ x: "-5px" }}
      exit={{ x: 0 }}
      transition={{ duration: 1.1 }}
    ></motion.div>
  );
};
export default ImageEditPanel;
