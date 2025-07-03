import { retry } from "@reduxjs/toolkit/query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import instance from "../../token/interceptors";

const Login = () => {
  const [inputs, setInputs] = useState({
    memberEmail: "",
    memberPass: "",
  });
  const { memberEmail, memberPass } = inputs;

  const handleValueChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await instance
      .post(`/login`, inputs)
      .then((response) => {
        console.log(response);
        //응답 헤더에서 토큰 추출
        const accessToken = response.headers["authorization"]; // 대소문자 주의 대문자->소문자로 변경되어옴
        const refreshToken = response.headers["authorization-refresh"];

        //   const accessToken = response.data.accessToken;  //바디를 통해서 가져올때
        //   const refreshToken = response.data.refreshToken;

        console.log("accessToken=>", accessToken);
        console.log("refreshToken=>", refreshToken);

        localStorage.setItem("Authorization", accessToken);
        localStorage.setItem("Authorization-refresh", refreshToken);

        localStorage.setItem("memberEmail", response.data.memberEmail);
        localStorage.setItem("memberName", response.data.memberName);
        localStorage.setItem("isLogin", true);

        setInputs({ memberEmail: "", memberPass: "" });
      })
      .then((response) => {
        console.log("then2=>", response);
        window.location.replace("/");
      })
      .catch((error) => console.log("login오류:", error.messag));
  };
  return (
    <div className="container text-center mt-5">
      <div className="mx-5">
        <h1>로그인</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group mt-1">
            <input
              type="email"
              name="memberEmail"
              className="form-control"
              id="memberEmail"
              value={memberEmail}
              placeholder="이메일"
              maxLength="20"
              onChange={handleValueChange}
            />
          </div>
          <div className="form-group mt-1">
            <input
              type="password"
              className="form-control"
              name="memberPass"
              id="memberPass"
              value={memberPass}
              placeholder="비밀번호"
              maxLength="20"
              onChange={handleValueChange}
            />
          </div>
          <div className="mt-1">
            <button type="submit" className="btn btn-primary">
              로그인
            </button>
            <Link className="btn btn-primary" to="/joinadd">
              회원 가입
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
