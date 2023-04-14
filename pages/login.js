import Link from "next/link";
import React from "react";
import Header from "../components/Header"
const login =() => {
  return (
    
    
  <div class="container">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-5">
          <div class="card cardbox">
            <div class="card-header">Login</div>
            <div class="card-body">
              <div class="social-buttons">
                <a href="#" class="btn btn-md btn-block btn-fb">
                  <i class="fa fa-facebook"></i> Facebook
                </a>
                <a href="#" class="btn btn-md btn-block btn-tw">
                  <i class="fa fa-twitter"></i> Twitter
                </a>
              </div>

              <div class="login-or">
                <hr class="hr-or"></hr>
                <span class="span-or">or</span>
              </div>

              <div class="form-group">
                <form
                  id="login-nav"
                  method="post"
                  role="form"
                  class="form"
                  accept-charset="UTF-8"
                >
                  <div class="form-group">
                    <label class="sr-only">Username</label>
                    <input
                      type="text"
                      id="reg_username"
                      name="user_name"
                      class="form-control"
                      placeholder="Username"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label class="sr-only">Password</label>

                    <div class="input-group">
                      <input
                        type="password"
                        id="reg_userpassword"
                        name="user_password"
                        class="form-control"
                        data-placement="bottom"
                        data-toggle="popover"
                        data-container="body"
                        data-html="true"
                        placeholder="Password"
                        required
                      />
                    </div>

                    <div class="help-block text-right">
                      <small>
                        <a href="#">Forgot Password</a>
                      </small>
                    </div>
                  </div>

                  <div class="form-group">
                    <button
                      id="reg_submit"
                      name="submit"
                      value="1"
                      class="btn btn-block btn-primary"
                    >
                      Login
                    </button>
                  </div>

                  <div class="form-check">
                    <input
                      type="checkbox"
                      id="reg_remember"
                      name="user_remember"
                      class="form-check-input"
                    />
                    <label class="form-check-label">Remember me</label>
                  </div>
                </form>
              </div>

              <div class="login-or">
                <hr class="hr-or"></hr>
              </div>

              <div class="bottom text-center">
                Aren't you user?{" "}
                <a href="register">
                  <b>Register</b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
