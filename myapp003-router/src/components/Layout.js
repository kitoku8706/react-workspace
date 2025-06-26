import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? "green" : "",
    fontSize: isActive ? "2rem" : "",
  };
};

const Layout = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  return (
    <div>
      <nav>
        <ul className="main-menu">
          <li>
            {/* <a>요소는 전체를 렌더링하므로 <Link> 또는 <NavLink>을 사용한다. */}
            {/* <a href="/">HOME</a> */}

            {/* Link은 선택한 컴포넌트에 스타일 지정을 할 수없으나
                  NavLink은 선택한 컴포넌트에 스타일 지정알 할 수 있다. */}
            {/* <Link to="/> Home</Link> */}

            <NavLink to="/" style={activeStyle}>
              Home
            </NavLink>
          </li>
          <li
            className="about-menu"
            onMouseEnter={() => setShowSubmenu(true)}
            onMouseLeave={() => setShowSubmenu(false)}
          >
            <NavLink to="/about" style={activeStyle}>
              About
            </NavLink>
            {showSubmenu && (
              <ul className="submenu">
                <li>
                  <NavLink to="/about/first" style={activeStyle}>
                    First
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about/second" style={activeStyle}>
                    Second
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink to="/dashboard" style={activeStyle}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="nothig-here" style={activeStyle}>
              Nothing Here
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
