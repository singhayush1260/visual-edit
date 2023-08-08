import classes from "./Login.module.scss";
import PageWrapper from "../../components/containers/PageWrapper";
import {useFormik} from 'formik';
import {login_form_schema} from './login_form_schema';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { CiMail, CiUnlock } from "react-icons/ci";
import { BiHide, BiShow } from "react-icons/bi";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../../components/loaders/loader/Loader";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setSLoading] = useState(false);
  const{values, errors, touched, handleChange, handleBlur, handleSubmit: formikHandleSubmit}=useFormik({
    initialValues:{Email:'',Password:''},
    validationSchema:login_form_schema,
    onSubmit: (values)=>{
        console.log(e)
        console.log('dd')
        console.log(values)
    }
  })


  
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('handleSubmit')
    console.log(errors)
    if(errors.Email){
        toast.error(errors.Email);
    }
    if(errors.Password){
        toast.error(errors.Password);
    }
  }

  return (
    <PageWrapper>
      <motion.div 
      className={classes.container_div_center}
      initial={{width:0}} 
      animate={{width:'45%'}} 
      exit={{x:window.innerWidth}}
      transition={{ duration: 0.5 }}
      >
        <div className={classes.heading_div}>
          <h2>Sign in to your account</h2>
          <p>Welcome back! Select a method to sign in.</p>
        </div>
        <div className={classes.button_google}>
          <FcGoogle /> Sign in with Google
        </div>
        <div className={classes.seperator}>
          <hr />
          <small>or continue with email</small>
          <hr />
        </div>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className={`${classes.form_controller} ${errors.Email && touched.Email && classes.input_error}`}>
            <CiMail />
            <input type="text" placeholder="Email" name="Email" value={values.Email} 
            onChange={handleChange} onBlur={handleBlur}/>
          </div>
          <div className={`${classes.form_controller} ${errors.Password && touched.Password && classes.input_error}`}>
            <CiUnlock />
            <input type={`${showPassword ? 'text':'password'}`} placeholder="Password" 
            name="Password" value={values.Password} 
            onChange={handleChange} onBlur={handleBlur}/>
            { !showPassword &&  <BiShow className={classes.hide_button} onClick={()=>setShowPassword(!showPassword)} />}
            { showPassword &&  <BiHide className={classes.hide_button} onClick={()=>setShowPassword(!showPassword)} />}
          </div>
          <button type="submit">{isLoading ? (<Loader/>) : <span>Sign In</span>} </button>
        </form>
        <span>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </span>
      </motion.div>
    </PageWrapper>
  );
};
export default Login;
