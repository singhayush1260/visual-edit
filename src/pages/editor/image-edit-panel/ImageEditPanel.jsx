import classes from "./ImageEditPanel.module.scss";
import { motion } from "framer-motion";
import Adjustment from "../../../components/editing-kit/image-adjustement/Adjustement";
import Transform from "../../../components/editing-kit/transform/Transform";
import EditorActionButtons from "../../../components/editing-kit/editor-action-button/EditorActionButtons";

const ImageEditPanel = () => {

  return (
    <motion.div className={classes.edit_panel} initial={{ x: "700px" }} animate={{ x: "-5px" }}
      exit={{ x: 0 }} transition={{ duration: 1.1 }} >
      <EditorActionButtons/>
      <Transform />
      <Adjustment />
    </motion.div>
  );
};
export default ImageEditPanel;
