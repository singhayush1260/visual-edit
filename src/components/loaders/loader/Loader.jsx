import classes from "./Loader.module.scss";
const Loader = () => {
  return (
    <div aria-label="Loading..." role="status" class={classes.loader}></div>
  );
};
export default Loader;
