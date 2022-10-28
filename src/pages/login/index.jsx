import { useEffect } from "react";
import useUser from "stores/useUser";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import schema from "./models";
import { toast } from "react-toastify";
import postLogin from "services/post/login";
import { yupResolver } from "@hookform/resolvers/yup";
import { INDEX_PATH, SIGN_IN_PATH } from "layouts/models";

import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./styles.css";
import "react-toastify/dist/ReactToastify.css";
import escritorio from "./escritorio.jpg";

window.toast = toast;

function Login() {
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
    toast.promise(postLogin(data, setToken, setUserId), {
      pending: "Processing your request",
      success: "You have logged in 👌",
      error: "Your credentials were rejected 🤯",
    });
  };

  return (
    <div>
      <img src={escritorio} alt="" className="background" />
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="log-in">
          <section className="title-login">
            <p className="log">
              Log <strong className="in"> in</strong>
            </p>
          </section>
          <section>
            <input className="input-login mail" {...register("email")} />
            <p className="message-error">{errors.email?.message}</p>
          </section>
          <section>
            <input
              type="password"
              className="input-login password"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
          </section>
          <div className="log-up-block">
            <p className="log-up">New to toDone?</p>
            <Link to={SIGN_IN_PATH} className="log-up">
              Create an account.
            </Link>
          </div>
          <input type="submit" value="Log in" className="btn-log-in" />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
