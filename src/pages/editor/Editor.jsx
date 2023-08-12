import classes from './Editor.module.scss';
import {FcCheckmark, FcCancel} from 'react-icons/fc';
import { ToastContainer } from 'react-toastify';
import ImageCanvas from './image-canvas/ImageCanvas';
import ImageEditPanel from './image-edit-panel/ImageEditPanel';
import Toolbar from './toolbar/Toolbar';

const Editor=()=>{
    return(
        <div className={classes.editor}>
             {/* <div className={classes.done}>
        <FcCheckmark/>
        <FcCancel/>
      </div> */}
            <Toolbar/>
            <ImageCanvas/>
            <ImageEditPanel/>
        </div>
    )
}
export default Editor;