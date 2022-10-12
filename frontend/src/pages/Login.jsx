import React from "react";
//import { toast } from "react-toastify";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaSignInAlt } from "react-icons/fa";
import { login } from "../features/auth/authSlice";

const Login = () => {
   const [formData, setFormData] = useState({
      email: "",
      password: "",
   });

   const { email, password } = formData;

   const dispatch = useDispatch();

   const { user, isLoading, isSuccess, message } = useSelector(
      (state) => state.auth
   );

   const onChange = (e) => {
      setFormData((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));
   };

   const onSubmit = (e) => {
      e.preventDefault();

      const userData = {
         email,
         password,
      };

      dispatch(login(userData));
   };

   return (
      <>
         <section className="heading">
            <h1>
               <FaSignInAlt /> Log in
            </h1>
            <p>Please log in to get support</p>
         </section>

         <section className="form">
            <form onSubmit={onSubmit}>
               <div className="form-group">
                  <input
                     type="email"
                     className="form-control"
                     id="email"
                     name="email"
                     value={email}
                     onChange={onChange}
                     placeholder="Enter your email"
                     required
                  />
               </div>
               <div className="form-group">
                  <input
                     type="password"
                     className="form-control"
                     id="password"
                     name="password"
                     value={password}
                     onChange={onChange}
                     placeholder="Enter your password"
                     required
                  />
               </div>
               <div className="form-group">
                  <button className="btn btn-block">Submit</button>
               </div>
            </form>
         </section>
      </>
   );
};

export default Login;
