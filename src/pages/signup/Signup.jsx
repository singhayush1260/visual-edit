import classes from "./Signup.module.scss";
import PageWrapper from "../../components/containers/PageWrapper";
import {useFormik} from 'formik';
import {signup_form_schema} from './signup_form_schema';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { CiUser, CiMail, CiUnlock } from "react-icons/ci";
import { BiHide, BiShow } from "react-icons/bi";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const{values, errors, touched, handleChange, handleBlur, handleSubmit: formikHandleSubmit}=useFormik({
    initialValues:{Name:'',Email:'',Password:''},
    validationSchema:signup_form_schema,
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
    if(errors.Name){
     toast.error(errors.Name);
    }
    if(errors.Email){
        toast.error(errors.Email);
    }
    if(errors.Password){
        toast.error(errors.Password);
    }
  }

  return (
    <PageWrapper>
      <div className={classes.container_div_center}>
        <div className={classes.heading_div}>
          <h2>Create your account</h2>
          <p>Welcome! Select a method to Sign up.</p>
        </div>
        <div className={classes.button_google}>
          <FcGoogle /> Sign up with Google
        </div>
        <div className={classes.seperator}>
          <hr />
          <small>or continue with email</small>
          <hr />
        </div>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <div className={`${classes.form_controller} ${errors.Name && touched.Name && classes.input_error}`}>
            <CiUser />
            <input  type="text" placeholder="Name" name="Name" value={values.Name} 
            onChange={handleChange} onBlur={handleBlur} />
          </div>
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
          <button type="submit">Sign Up</button>
        </form>
        <span>
          Already have an account? <Link to="/login">Sign In</Link>
        </span>
      </div>
    </PageWrapper>
  );
};
export default Signup;
