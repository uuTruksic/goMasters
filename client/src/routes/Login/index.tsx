import React from "react";

const Login = () => {
  return (
    <div>
      <form
        style={{
          width: "50%",
          height: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        <input type="email"></input>
        <input type="passowrd"></input>
      </form>
    </div>
  );
};

export default Login;
