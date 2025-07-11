import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const activeStyle = ({ isActive }) => ({
  color: isActive ? "green" : "",
  fontSize: isActive ? "1.2rem" : "",
});

const BaseLayout = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink style={activeStyle} className="nav-link" to="/">
                홈
              </NavLink>
            </li>
            {!isAuthenticated ? (
              <>
                <li className="nav-item">
                  <NavLink style={activeStyle} className="nav-link" to="/login">
                    로그인
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    style={activeStyle}
                    className="nav-link"
                    to="/joinadd"
                  >
                    회원가입
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    style={activeStyle}
                    className="nav-link"
                    to="/logout"
                  >
                    {localStorage.getItem("memberName")}
                    <span style={{ fontSize: "10px" }}>로그아웃</span>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    style={activeStyle}
                    className="nav-link"
                    to="/editinfo"
                  >
                    회원수정
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    style={activeStyle}
                    className="nav-link"
                    to="/memberremove"
                  >
                    회원탈퇴
                  </NavLink>
                </li>
              </>
            )}

            <li className="nav-item">
              <NavLink
                style={activeStyle}
                className="nav-link"
                to="/board/list/"
              >
                게시판
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <hr />

      <Outlet />
    </div>
  );
};

export default BaseLayout;
