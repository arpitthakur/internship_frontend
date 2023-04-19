import Link from "next/link";
import React from "react";
import { Button, Dropdown } from "antd";

const Header = () => {
  const items = [
    {
      key: "1",
      label: <Link href="/student_login">Login as Student</Link>,
    },
    {
      key: "2",
      label: <Link href="/employee_login">Login as Employee</Link>,
    },
  ];
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">
          <Link href="/">Internship Finder</Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Internship
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    abc
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    def
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ghi
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Job
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    abc
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    def
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ghi
                  </a>
                </li>
              </ul>
            </li>
            <div className="item-button">
              <button type="button" className="btn btn-outline-primary">
                {" "}
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottom"
                  arrow
                >
                  <b>Login</b>
                </Dropdown>
              </button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-primary btn-register">
                Register
              </button>
              <button
                type="button"
                className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="register">
                  <Link href="/student_register">As a Student</Link>
                </a>

                <a className="dropdown-item" href="#">
                  <Link href="/employee_register"> As an Employee</Link>
                </a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
