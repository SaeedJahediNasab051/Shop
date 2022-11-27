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


const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
 

  const user = data.email.split("@")
  useEffect(() => {
    setErrors(validate(data, "login" ));
    // console.log(errors)
  }, [data, touched]);

  const changeHandler = (event) => {
      setData({ ...data, [event.target.name]: event.target.value });

  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      // console.log(data)
      notify(`Welcome ${user[0]}`, "success");
      setTimeout(() => {
        window.location.href ="/products"
      }, 3000 );
      
    } else {
      notify("Invalid data", "error");
      setTouched({
        email: true,
        password: true,
        
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>Login</h2>
        
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
        
        
        <div className={styles.formButtons}>
          <Link to="/products/signup">Sing Up</Link>
          <button type="submit">Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
