import classes from "./ImageEditPanel.module.scss";
import { motion } from "framer-motion";
import ZoomLevel from "../../../components/editing-kit/zoom/ZoomLevel";
import Adjustment from "../../../components/editing-kit/image-adjustement/Adjustement";
import CropResizeRotate from "../../../components/editing-kit/crop-resize-rotate/CropResizeRotate";
import EditorActionButtons from "../../../components/editing-kit/editor-action-button/EditorActionButtons";

const ImageEditPanel = () => {

  return (
    <motion.div className={classes.edit_panel} initial={{ x: "700px" }} animate={{ x: "-5px" }}
      exit={{ x: 0 }} transition={{ duration: 1.1 }} >
      <EditorActionButtons/>
      <CropResizeRotate />
      <Adjustment />
    </motion.div>
  );
};
export default ImageEditPanel;
