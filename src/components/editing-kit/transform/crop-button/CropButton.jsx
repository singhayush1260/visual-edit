import classes from "../../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import { useDispatch } from "react-redux";

const CropButton = () => {
    return (
        <div className={classes.expanded_edit_container} style={{ flexDirection: 'column' }}>
            <div className={classes.group_buttons} style={{ gap: '0.1em' }}>
                <small style={{ fontSize: '0.4em' }}>Y</small>
                <div className={classes.button_controller}>
                    <div>-</div>
                    <input title="Width" type="number" />
                    <div >+</div>
                </div>
                <small style={{ fontSize: '0.4em' }}>Y</small>
                <div className={classes.button_controller}>
                    <div>-</div>
                    <input title="Width" type="number" />
                    <div >+</div>
                </div>
            </div>
            <div className={classes.group_buttons} style={{ gap: '0.1em' }}>
                <small style={{ fontSize: '0.4em' }}>W</small>
                <div className={classes.button_controller}>
                    <div>-</div>
                    <input title="Width" type="number" />
                    <div >+</div>
                </div>
                <small style={{ fontSize: '0.4em' }}>H</small>
                <div className={classes.button_controller}>
                    <div>-</div>
                    <input title="Width" type="number" />
                    <div >+</div>
                </div>
            </div>
        </div>
    )
}
export default CropButton;