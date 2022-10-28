import { useEffect } from "react";
import useUser from "stores/useUser";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import schema from "./models";
import { toast } from "react-toastify";
import postSignUp from "services/post/signUp";
import { yupResolver } from "@hookform/resolvers/yup";
import { INDEX_PATH, LOGIN_PATH } from "layouts/models";

import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./styles.css";
import "react-toastify/dist/ReactToastify.css";
import escritorio from "../login/escritorio.jpg";

window.toast = toast;

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const setToken = useUser((state) => state.setToken);
  const setUserId = useUser((state) => state.setUserId);
  const token = useUser((state) => state.token);
  useEffect(() => {
    if (token) {
      navigate(INDEX_PATH);
    }
  }, [token]);
  const onSubmit = (data) => {
    toast.promise(postSignUp(data, setToken, setUserId), {
      pending: "Processing your request",
      success: "You have sign up 👌",
      error: "Your credentials were rejected 🤯",
    });
  };

  return (
    <div>
      <img src={escritorio} alt="" className="background-sing" />
      <form onSubmit={handleSubmit(onSubmit)} className="form-sing">
        <div className="log-in">
          <section className="title-login">
            <p className="log">
              Sign <strong className="in"> up</strong>
            </p>
          </section>
          <section>
            <input
              placeholder="Gmail"
              {...register("email")}
              className="input mail"
            />
            <p className="message-error">{errors.email?.message}</p>
          </section>
          <section>
            <input
              placeholder="Password"
              {...register("password")}
              className="input password"
              type="password"
            />
            <p className="message-error">{errors.email?.message}</p>
          </section>
          <section>
            <input
              placeholder="Confirm Password"
              {...register("confirm")}
              className="input password"
              type="password"
            />
            <p className="message-error">{errors.confirm?.message}</p>
          </section>
          <div className="log-up-block">
            <p className="log-up">New to toDone?</p>
            <Link to={LOGIN_PATH} className="log-up">
              Create an account.
            </Link>
          </div>
          <input type="submit" value="Sign up" className="btn-log-in" />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
