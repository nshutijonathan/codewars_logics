import React from "react";
import { useForm } from "react-hook-form";
import "../styles.css";
const ReactForms = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const validateEmail = (err) => {
    if (err.email) {
      return <p className="errorMsg">{err.email.message}</p>;
      // } else if (err.email && err.email.type === "pattern") {
      //   return <p className="errorMsg">Email is not valid.</p>;
    }
  };
  const validatePassword = (err) => {
    if (err.password) {
      return <p className="errorMsg">{err.password.message}</p>;
    }
    // } else if (err.password && err.password.type === "minLength") {
    //   return (
    //     <p className="errorMsg">Password should be at-least 6 characters.</p>
    //   );
    // }
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
          />
          {validateEmail(errors)}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password should be at-least 6 characters.",
              },
            })}
          />
          {validatePassword(errors)}
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default ReactForms;
