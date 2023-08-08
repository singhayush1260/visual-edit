import classes from './Playground.module.scss';
import Sidebar from '../../components/layouts/sidebar/Sidebar';
import Editor from '../../components/editor/Editor';
const Playground=()=>{
return <div className={classes.page_wrapper}>
<Sidebar/>
<Editor/>
</div>
}
export default Playground;