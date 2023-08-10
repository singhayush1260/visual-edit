import classes from "../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import { BsCrop } from "react-icons/bs";
import { TbResize } from "react-icons/tb";
import { AiOutlineRotateRight } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
const CropResizeRotate = () => {

  const dispatch=useDispatch();

  const getCropped=()=>{
    
  }
  return (
    <div className={classes.edit_container}>
      <small>Crop/ Resize/ Rotate</small>
       <div className={classes.edit_controller}>
        <button title="Crop" onClick={()=>{dispatch({type:'transform',payload:{buttonType:'crop', value:true}})}}> <BsCrop/> </button>
        <button title="Resize"> <TbResize/>  </button>
        <button title="Rotate"> <AiOutlineRotateRight/> </button>
       </div>
    </div>
  );
};
export default CropResizeRotate;
