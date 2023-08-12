import classes from './Editor.module.scss';
import ImageCanvas from './image-canvas/ImageCanvas';
import ImageEditPanel from './image-edit-panel/ImageEditPanel';
import Toolbar from './toolbar/Toolbar';
import { useSelector } from "react-redux";
const Editor=()=>{
    const { isDarkTheme } = useSelector((state) => state.themeReducer);
    return(
        <div className={`${isDarkTheme ? 'dark_theme' : 'light_theme'} ${classes.editor}`}>
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