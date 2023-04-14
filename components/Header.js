import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Internship Finder
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Internship
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    abc
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    def
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    ghi
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Job
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    abc
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    def
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    ghi
                  </a>
                </li>
              </ul>
              
            </li>
            <div className="item-button">
              <button type="button" class="btn btn-outline-primary">
                <Link href="/login">Login</Link>
              </button>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-primary btn-register">
                Register
              </button>
              <button
                type="button"
                class="btn btn-primary dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="register">
                  As a Student
                </a>
                <a class="dropdown-item" href="register">
                  As an Employeer
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
