import classes from "../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import { FcUpload, FcFile, FcDownload, FcUndo, FcRedo } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditorActionButtons = () => {

  const { selectedImage, croppedImage } = useSelector( (state) => state.imageUploadReducer);
  const { isButtonClicked: { saveButton } } = useSelector((state) => state.editorActionsReducer);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch({ type: "save", payload: true });
    toast.success("Image Saved");
  };

  const handleDownload = () => {
    if (croppedImage) {
      const link = document.createElement("a");
      console.log("saveButton", saveButton);
      saveButton ? (link.href = croppedImage) : (link.href = selectedImage);
      link.target = "_blank";
      link.download = "downloaded_image.png";
      link.click();
      toast.success("Image Downloaded");
    }
  };

  return (
    <div className={classes.button_div}>
      <button title="New Image">
        <FcUpload />
      </button>
      <button title="Save" onClick={handleSave}>
        <FcFile />
      </button>
      <button title="Download" onClick={handleDownload}>
        <FcDownload />
      </button>
      <button title="Undo">
        <FcUndo />
      </button>
      <button title="Redo">
        <FcRedo />
      </button>
   
    </div>
  );
};
export default EditorActionButtons;
