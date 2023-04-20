// import React from "react";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg,setMsg] = useState("");
  
  const handleLogin = async () => {
    if (!email && !password) {
      alert("email and pasword is required");
      return;
    } else {
      alert("Login successfully");
    
    await fetch("http://localhost:8080/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    })
    .then((res) => res.json())
    .then((val) => {
      setEmail("");
      setPassword("")
      setMsg(val.message);
        
    })
    .then (router.push("/employee_login")).catch(err => alert(err));
  
  };}
  return (
    <>
      <div className="login_page">
        <div className="container">
          <div className="row">
            <div className="col-md-11 mt-60 mx-md-auto">
              <div className="login-box bg-white pl-lg-5 pl-0">
                <div className="row no-gutters align-items-center">
                  <div className="col-md-6">
                    <div className="form-wrap bg-white">
                      <h4 className="btm-sep pb-3 mb-5">Student Login</h4>
                      <form >
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group position-relative">
                              <span className="zmdi zmdi-account"></span>
                              <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group position-relative">
                              <span className="zmdi zmdi-email"></span>
                              <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)
                                }
                                
                              />
                            </div>
                          </div>
                          <div className="col-12 text-lg-right">
                            <a href="#" className="c-black">
                              Forgot password ?
                            </a>
                          </div>
                          <div className="col-12 mt-30">
                            <button
                              type="submit"
                              id="submit"
                              className="btn btn-lg btn-dark btn-block"
                              onClick={handleLogin}
                            >
                              Sign In
                            </button>
                          </div>
                          <div className="msg">
                            <h1>{msg}</h1>
                         </div>
                       
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="content text-center">
                      <div className="border-bottom pb-5 mb-5">
                        <h3 className="c-black">First time here?</h3>
                        <a href="sign-up.html" className="btn btn-custom">
                          <Link href="/register">Sign up</Link>
                        </a>
                      </div>
                      <h5 className="c-black mb-4 mt-n1">Or Sign In With</h5>
                      <div className="socials">
                        <a href="#" className="zmdi zmdi-facebook"></a>
                        <a href="#" className="zmdi zmdi-twitter"></a>
                        <a href="#" className="zmdi zmdi-google"></a>
                        <a href="#" className="zmdi zmdi-instagram"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
