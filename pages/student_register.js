import React,{useState} from "react";
import Header from "../components/Header";
import { useRouter } from 'next/router'

import Link from "next/link";
const student_register = () => {
  const router = useRouter()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const handleclick = async () => {
    

    if (!email || !username || !password) {
      alert("name,email and pasword is required");
      return;
     }
     else {
      alert("Signup successfully");
    await fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*'},
      body: JSON.stringify({
        username,
        email,
        password,
        
      }),
    }).then (router.push("/student_login")).catch(err => alert(err));
  }
  
  };

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
                  {/* <form
                    id="login-nav"
                    role="form"
                    className="form"
                    accept-charset="UTF-8"
                    onSubmit={handleSubmit}
                  > */}
                    <div className="form-group">
                      <label className="sr-only">Name</label>
                      <input
                        type="text"
                        value={username} 
                        id="reg_username"
                        name="user_name"
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control"
                        placeholder="Username"
                        required
                      ></input>
                    </div>
                    <div className="form-group">
                      <label className="sr-only">Email</label>
                      <input
                        type="email"
                        id="reg_email"
                        value={email} 
                        name="user_email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        placeholder="Email"
                        required
                      ></input>
                    </div>

                    <div className="form-group">
                      <label className="sr-only">Password</label>

                      <div className="input-group">
                        <input
                          type="password"
                          id="reg_userpassword"
                          value={password}
                          name="user_password"
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                          data-placement="bottom"
                          data-toggle="popover"
                          data-container="body"
                          data-html="true"
                          placeholder="Password"
                          required
                        ></input>
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
             
                     onClick={handleclick} >
                        Create user
                      </button>
                    </div>
                  {/* </form> */}
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
