import DialogBox from '../../components/dialog-box/DialogBox';
import classes from './Editor.module.scss';
import ImageCanvas from './image-canvas/ImageCanvas';
import ImageEditPanel from './image-edit-panel/ImageEditPanel';
import Toolbar from './toolbar/Toolbar';
import { useSelector } from "react-redux";
import RotateSlider from '../../components/editing-kit/transform/rotate-slider/RotateSlider';
const Editor = () => {
    const { isDarkTheme } = useSelector((state) => state.themeReducer);
    const { showImageUploadDialog } = useSelector((state) => state.imageUploadReducer);
    const { showRotationSlider, showCustomFilterDialog } = useSelector((state) => state.stateReducer);
    return (
        <div className={`${isDarkTheme ? 'dark_theme' : 'light_theme'} ${classes.editor}`}>
            { showImageUploadDialog && <DialogBox /> }
            { showRotationSlider && <RotateSlider/> }
            {/* { showCustomFilterDialog && <CustomFilter/>} */}
            <Toolbar />
            <ImageCanvas />
            <ImageEditPanel />
        </div>
    )
}
export default Editor;