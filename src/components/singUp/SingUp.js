import React from "react";

function SingUp() {
  return (
    <div>
      <img src="./escritorio.png" alt="" class="background" />
      <form action="" class="form-sing">
        <div class="log-in">
          <section class="title">
            <p class="log">
              Sing <strong class="in"> up</strong>
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
          <section>
            <input
              type="text"
              class="input password"
              placeholder="Confirm Password"
            />
          </section>
          <div class="log-up-block">
            <p class="log-up">New to toDone?</p>
            <a href="" class="log-up">
              {" "}
              Create an account.
            </a>
          </div>
          <button class="btn-log-in">Sing up</button>
        </div>
      </form>
    </div>
  );
}

export default SingUp;
