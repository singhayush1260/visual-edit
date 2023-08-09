import classes from "../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import {AiOutlineUpload, AiOutlineSave, AiOutlineDownload} from "react-icons/ai";
const SaveDownload = () => {
  return (
    <div className={classes.button_div}>
        <button title="New Image"> 
          <AiOutlineUpload />
        </button>
        <button title="Save">
          <AiOutlineSave />
        </button>
        <button title="Download">
          <AiOutlineDownload />
        </button>
      </div>
  );
};
export default SaveDownload;
