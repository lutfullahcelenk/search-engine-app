import React from "react";

const Navbar = () => {
  return (
    <header className=" header p-0 m-0">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm py-3 justify-content-sm-center">
        <div className="">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarLists"
            aria-controls="navbarLists"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-hamburger"></i>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarLists"
          >
            <ul className="p-3 navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link scroll-link" title="MainPage" href="#">
                  <i className="fas fa-home m-2"> </i> AnaSayfa
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link scroll-link"
                  title="AboutMe"
                  href="https://lutfullah-celenk.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-user m-2"> </i> Hakkımda
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link scroll-link"
                  title="Contact"
                  href="https://github.com/lutfullahcelenk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github m-2"> </i> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
