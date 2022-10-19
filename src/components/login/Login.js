import React from "react";
import "./style-Login.css";

function Login() {
  return (
    <div>
      <img src="./escritorio.png" alt="" class="background" />
      <form action="" class="form">
        <div class="log-in">
          <section class="title">
            <p class="log">
              Log <strong class="in"> in</strong>
            </p>
          </section>
          <section>
            <input
              type="text"
              class="input mail"
              placeholder="Mail@gmail.com"
            />
          </section>
          <section>
            <input type="text" class="input password" placeholder="Password" />
          </section>
          <div class="log-up-block">
            <p class="log-up">New to toDone?</p>
            <a href="" class="log-up">
              {" "}
              Create an account.
            </a>
          </div>
          <button class="btn-log-in">Log in</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
