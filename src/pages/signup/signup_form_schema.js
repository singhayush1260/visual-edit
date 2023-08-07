import * as Yup from 'yup';

const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const emailRegex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//const phonenumberRegex = /^\d{10}$/;

export const signup_form_schema=Yup.object({
    Name:Yup.string().min(4).max(25).required('Name cannot be empty'),
    Email:Yup.string().matches(emailRegex,'Enter a valid email').required('Email cannot be empty'),
    Password:Yup.string().matches(passwordRegex, 'Password must be atleast 8 characters,contain an uppercase, lowercase, digit, symbol').required('Password cannot be empty'),
});
// PhoneNumber:Yup.string().min(10).matches(phonenumberRegex,'Enter a valid phone number').required('Field cannot be empty'),