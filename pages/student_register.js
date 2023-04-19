import React from "react";
import Header from "../components/Header";
import Link from "next/link";
const student_register = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-5">
            <div className="card cardbox">
              <div className="card-header">Register as Student</div>
              <div className="card-body">
                <div className="social-buttons">
                  <a href="#" className="btn btn-md btn-block btn-fb">
                    <i className="fa fa-facebook"></i> Facebook
                  </a>
                  <a href="#" className="btn btn-md btn-block btn-tw">
                    <i className="fa fa-twitter"></i> Twitter
                  </a>
                </div>

                <div className="login-or">
                  <hr className="hr-or" />
                  <span className="span-or">or</span>
                </div>

                <div className="form-group">
                  <form
                    id="login-nav"
                    method="post"
                    role="form"
                    className="form"
                    accept-charset="UTF-8"
                  >
                    <div className="form-group">
                      <label className="sr-only">Name</label>
                      <input
                        type="text"
                        id="reg_username"
                        name="user_name"
                        className="form-control"
                        placeholder="Username"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="sr-only">Email</label>
                      <input
                        type="email"
                        id="reg_email"
                        name="user_email"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="sr-only">Password</label>

                      <div className="input-group">
                        <input
                          type="password"
                          id="reg_userpassword"
                          name="user_password"
                          className="form-control"
                          data-placement="bottom"
                          data-toggle="popover"
                          data-container="body"
                          data-html="true"
                          placeholder="Password"
                          required
                        />
                      </div>

                      {/* <div className="help-block text-right">
                      <small>
                        <a href="#">Forgot Password</a>
                      </small>
                      <span
                        id="reg-password-quality"
                        className="hide pull-left block-help"
                      >
                        <small>
                          Password{" "}
                          <span id="reg-password-quality-result"></span>
                        </small>
                      </span>
                    </div> */}
                    </div>

                    <div className="form-group">
                      <button
                        id="reg_submit"
                        name="submit"
                        value="1"
                        className="btn btn-block btn-primary"
                        disabled="disabled"
                      >
                        Create user
                      </button>
                    </div>
                  </form>
                </div>

                <div className="bottom text-center">
                  Are you user? <Link href="/student_login">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default student_register;
