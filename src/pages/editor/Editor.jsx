import classes from './Editor.module.scss';
import { ToastContainer } from 'react-toastify';
import Sidebar from '../../components/layouts/sidebar/Sidebar';
import ImageCanvas from './image-canvas/ImageCanvas';
import ImageEditPanel from './image-edit-panel/ImageEditPanel';

const Editor=()=>{
    return(
        <div className={classes.editor}>
            <ToastContainer position="top-center" autoClose={1500} hideProgressBar={false} newestOnTop={false} 
            closeOnClick  rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
            <Sidebar/>
            <ImageCanvas/>
            <ImageEditPanel/>
        </div>
    )
}
export default Editor;