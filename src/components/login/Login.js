import React from "react";
import "./style-Login.css";
import API from "../../services/api";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/// services/login
const postLogin = async (email, password) =>
  API.post("/auth/login", { email, password });

//aca
const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => postLogin(data);
  return (
    <div>
      <img src="./escritorio.png" alt="" className="background" />
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="log-in">
          <section className="title">
            <p className="log">
              Log <strong className="in"> in</strong>
            </p>
          </section>
          <section>
            <input className="input mail" {...register("email")} />
            <p>{errors.email?.message}</p>
          </section>
          <section>
            <input className="input password" {...register("password")} />
            <p>{errors.password?.message}</p>
          </section>
          <div className="log-up-block">
            <p className="log-up">New to toDone?</p>
            <a href="" className="log-up">
              {" "}
              Create an account.
            </a>
          </div>
          <input type="submit" value="Log in" className="btn-log-in" />
        </div>
      </form>
    </div>
  );
}

export default Login;

/*
              type="text"

              placeholder="Mail@gmail.com"

*/
