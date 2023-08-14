import classes from "../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useDispatch } from "react-redux";

const AddFilter = () => {
  const [expand, setExpand] = useState(false);
  const dispatch=useDispatch();

  const handleFilterSelection=(e)=>{
    console.log(e.target.value)
    const selectedFilter=e.target.value;
    dispatch({type:'addFilter',payload:selectedFilter});
  }
  return (
    <div className={classes.edit_container}>
      <div
        className={classes.edit_container__title}
        onClick={() => setExpand(!expand)}>
        <small>Filters</small>
        {!expand && <BiChevronDown />}
        {expand && <BiChevronUp />}
      </div>
     { expand && <div className={classes.expanded_edit_container}>
          <div className={classes.expanded_edit_container__filters}>
            <select onChange={handleFilterSelection}>
        <option value="none">No Filter</option>
        <option value="grayscale">Grayscale</option>
        <option value="sepia">Sepia</option>
        <option value="invert">Invert</option>
      </select>
            <button>Apply</button>
          </div>
      </div>}
    </div>
  );
};
export default AddFilter;
