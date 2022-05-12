/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable import/first */
/* eslint-disable no-mixed-spaces-and-tabs */
// eslint-disable-next-line linebreak-style
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line semi
import Input from "../input/Input";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { BiSearch } from "react-icons/bi";
import "./header.scss";

import logo from "../../assets/image/logo.png";

const headerNav = [
  {
    display: "Discover",
    path: "/discover",
  }, {
    display: "Job",
    path: "/job",
  },
];

const headerAccess = [
  {
    display: "Login",
    path: "/login",
  }, {
    display: "Sign Up",
    path: "/signUp",
  },
];

const Header = () => {
	const headerRef = useRef(null);
	const [menu, setMenu] = useState(false);
	const { width } = useWindowDimensions();
	const { pathname } = useLocation();
	// eslint-disable-next-line arrow-parens
  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", shrinkHeader);
    return window.removeEventListener("scroll", shrinkHeader);
  }, []);

  const handleClickMenu = () => {
    if (width < 768) {
      setMenu(!menu);
    }
  };

  return (
    <div ref={headerRef} className="header">
      <div className="header_wrap container">
        <div className="header_right ml-6">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="header_nav">
            {headerNav.map((eml, i) => (
              <li key={i} className={` ${i === active ? "active" : ""}`}>
                <Link to={eml.path} className="fz-header">
                  {eml.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {width < 768 ? (
			<>
          <button
            className={`${
				menu ? "header-btn menu_open" : "header-btn"
            }`}
            onClick={handleClickMenu}
          >
			  <div>Menu</div>
          </button>
            <div className={`${menu ? "none_menu nav_open" : "none_menu"}`}>
               <HeaderMenu active={active} />
			</div>
			</>
        ) : (
          <HeaderMenu active={active} />
        )}
      </div>
    </div>
  );
};

const HeaderMenu = props => {
	const { pathname } = useLocation();
	// eslint-disable-next-line arrow-parens
  const active = headerAccess.findIndex((e) => e.path === pathname);

  return (
    <>
      <Input
        className="col-md-4"
        type="text"
        placeholder="Search for motion trend..."
      />
      <div className="header_info col-md-3 col-lg-2 -mr-6 -mt-6">
        <BiSearch className="header_search" />
        <ul className="header_access">
          {headerAccess.map((eml, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={eml.path} className="fz-header">
                {eml.display}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
