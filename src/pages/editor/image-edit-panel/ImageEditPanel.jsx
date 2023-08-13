import classes from "./ImageEditPanel.module.scss";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Adjustment from "../../../components/editing-kit/image-adjustement/Adjustement";
import Transform from "../../../components/editing-kit/transform/Transform";
import EditorActionButtons from "../../../components/editing-kit/editor-action-button/EditorActionButtons";
import AddEmoji from "../../../components/editing-kit/emoji/AddEmoji";
import AddFilter from "../../../components/editing-kit/filters/AddFilter";

const ImageEditPanel = () => {
  
  const { isDarkTheme } = useSelector((state) => state.themeReducer);

  return (
    <motion.div className={`${isDarkTheme ? 'dark_theme' : 'light_theme'} ${classes.edit_panel}`} initial={{ x: "700px" }} animate={{ x: "-5px" }}
      exit={{ x: 0 }} transition={{ duration: 1.1 }} >
      <EditorActionButtons/>
      <Adjustment />
      <AddEmoji/>
      <AddFilter/>
    </motion.div>
  );
};
export default ImageEditPanel;
