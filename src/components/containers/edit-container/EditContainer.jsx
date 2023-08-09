import classes from "./EditContainer.module.scss";

const EditContainer = ({ title, children }) => {
  return <div className={classes.edit_container}><small>{title}</small> {children}</div>;
};
export default EditContainer;
