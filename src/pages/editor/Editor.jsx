import classes from './Editor.module.scss';
import Sidebar from '../../components/layouts/sidebar/Sidebar';
import ImageCanvas from './image-canvas/ImageCanvas';
import ImageEditPanel from './image-edit-panel/ImageEditPanel';
const Editor=()=>{
    return(
        <div className={classes.editor}>
            <Sidebar/>
            <ImageCanvas/>
            <ImageEditPanel/>
        </div>
    )
}
export default Editor;