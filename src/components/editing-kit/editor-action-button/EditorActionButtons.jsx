import classes from "../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import { FcUpload, FcFile, FcDownload, FcUndo, FcRedo } from "react-icons/fc";
import {BiChevronDown} from 'react-icons/bi';
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditorActionButtons = () => {

  const { originalImage, croppedImage, tempRenderedImage, savedRenderedImage } = useSelector( (state) => state.imageUploadReducer);
  const { isButtonClicked: { saveButton } } = useSelector((state) => state.editorActionsReducer);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch({ type: "saveImage"});
    toast.success("Image Saved");
  };

  const handleDownload = () => {
    if (croppedImage) {
      const link = document.createElement("a");
      console.log("saveButton", saveButton);
      saveButton ? (link.href = savedRenderedImage) : (link.href = savedRenderedImage);
      link.target = "_blank";
      link.download = "downloaded_image.png";
      link.click();
      toast.success("Image Downloaded");
    }
  };

  return (
    <div className={classes.editor_action_button_div}>
        <button title="Save" onClick={handleSave}>
        <span>Save</span>
      </button>
      <button title="Undo">
        <span>Undo</span>
      </button>
      <button title="Redo">
        <span>Redo</span>
      </button>
      <button title="Download" onClick={handleDownload}>
        <span>Export</span>
        <BiChevronDown/>
      </button>
    </div>
  );
};
export default EditorActionButtons;
