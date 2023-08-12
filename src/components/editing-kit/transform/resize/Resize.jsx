import classes from "../../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import { useState } from "react";
const ResizeButton = () => {

    const DEFAULT_DIMENSION = 100;

    const [dimension, setDimension] = useState({ width: DEFAULT_DIMENSION, height: DEFAULT_DIMENSION });
    const[isResizing, setIsResizing]=useState(false);  

    const handleWidthResize = (action, value) => {
        if (action === 'inc') {
            setDimension({ ...dimension, width: dimension.width + value });
        } else if (action === 'dec') {
            setDimension({ ...dimension, width: dimension.width - value < DEFAULT_DIMENSION ? DEFAULT_DIMENSION : dimension.width - value });
        }
        else {
            setDimension({ ...dimension, width: value < DEFAULT_DIMENSION ? DEFAULT_DIMENSION : value });
        }
    }

    const handleHeightResize = (action, value) => {
        if (action === 'inc') {
            setDimension({ ...dimension, height: dimension.height + value });
        } else if (action === 'dec') {
            setDimension({ ...dimension, height: dimension.height - value < DEFAULT_DIMENSION ? DEFAULT_DIMENSION : dimension.height - value });
        }
        else {
            setDimension({ ...dimension, height: value < DEFAULT_DIMENSION ? DEFAULT_DIMENSION : value });
        }
    }

    return (
        <div className={classes.expanded_edit_container__resize}>
            <small onClick={()=>setIsResizing(!isResizing)}>
                Resize
            </small>
              { isResizing && <div>
               <div className={classes.group_buttons}>
                    <div onClick={() => handleWidthResize('dec', 10)}>-</div>
                    <input title="Width" type="number" value={dimension.width} onChange={(e) => handleWidthResize("", parseInt(e.target.value))} />
                    <div onClick={() => handleWidthResize('inc', 10)}>+</div>
                </div>
                <small>X</small>
                <div className={classes.group_buttons}>
                    <div onClick={() => handleHeightResize('dec', 10)}>-</div>
                    <input title="Height" type="number" value={dimension.height} onChange={(e) => handleWidthResize("", parseInt(e.target.value))} />
                    <div onClick={() => handleHeightResize('inc', 10)}>+</div>
                </div>
               </div> }        
            </div>
    )
}
export default ResizeButton;

/*

import classes from "../../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import { useState } from "react";
const ResizeButton = () => {

    const DEFAULT_DIMENSION = 100;

    const [dimension, setDimension] = useState({ width: DEFAULT_DIMENSION, height: DEFAULT_DIMENSION });

    const handleWidthResize = (action, value) => {
        if (action === 'inc') {
            setDimension({ ...dimension, width: dimension.width + value });
        } else if (action === 'dec') {
            setDimension({ ...dimension, width: dimension.width - value < DEFAULT_DIMENSION ? DEFAULT_DIMENSION : dimension.width - value });
        }
        else {
            setDimension({ ...dimension, width: value < DEFAULT_DIMENSION ? DEFAULT_DIMENSION : value });
        }
    }

    const handleHeightResize = (action, value) => {
        if (action === 'inc') {
            setDimension({ ...dimension, height: dimension.height + value });
        } else if (action === 'dec') {
            setDimension({ ...dimension, height: dimension.height - value < DEFAULT_DIMENSION ? DEFAULT_DIMENSION : dimension.height - value });
        }
        else {
            setDimension({ ...dimension, height: value < DEFAULT_DIMENSION ? DEFAULT_DIMENSION : value });
        }
    }

    return (
        <div className={classes.expanded_edit_container}>
            <div className={classes.group_buttons}>
                <div className={classes.button_controller}>
                    <div onClick={() => handleWidthResize('dec', 10)}>-</div>
                    <input title="Width" type="number" value={dimension.width} onChange={(e) => handleWidthResize("", parseInt(e.target.value))} />
                    <div onClick={() => handleWidthResize('inc', 10)}>+</div>
                </div>
                <small>X</small>
                <div className={classes.button_controller}>
                    <div onClick={() => handleHeightResize('dec', 10)}>-</div>
                    <input title="Height" type="number" value={dimension.height} onChange={(e) => handleWidthResize("", parseInt(e.target.value))} />
                    <div onClick={() => handleHeightResize('inc', 10)}>+</div>
                </div>
            </div>
        </div>
    )
}
export default ResizeButton;

*/