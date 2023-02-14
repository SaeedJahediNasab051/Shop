import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Function
import { validate } from "./validate";
import { notify } from "./toast";
//Styles
import styles from "./signUp.module.css";


const SignUp = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({}); 

  useEffect(() => {
    setErrors(validate(data,"signUp"));
    // console.log(errors)
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
    // console.log(data)
  };

  
  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      
      notify(`Welcome ${data.name}`, "success");
      setTimeout(() => {
        props.history.push("/products")
      }, 3000 );
     
      
    } else {
      notify("Invalid data", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };
  
  return (
  
    <div className={styles.container}>
    
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>SignUp</h2>
        <div className={styles.formField}>
          <label>Name</label>
          <input
            className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput }
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>
        <div className={styles.formField}>
          <label>Email</label>
          <input
            className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput }
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formField}>
          <label>Password</label>
          <input
            className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput }
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={styles.formField}>
          <label>Confirm Password</label>
          <input
            className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput }
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.formField}>
            <div className={styles.checkBoxContainer}>
                <label>I accet terms of privacy policy</label>
                <input
                    
                    type="checkbox"
                    name="isAccepted"
                    value={data.isAccepted}
                    onChange={changeHandler}
                    onFocus={focusHandler}
                />

            </div>
          {errors.isAccepted && touched.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <Link to="/login">Login</Link>
          <button  type="submit">Sign Up</button> 
        </div>
      </form>
      <ToastContainer />
    </div>
    
  );
};

export default SignUp;
