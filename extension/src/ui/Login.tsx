import * as React from "react";

export const Login: React.FC = () => {
  return (
    <div className={"login-container"}>
      <div className={"form-g"}>
        <input
          type={"password"}
          placeholder={"PASSCODE"}
          className={"input-f"}
        />
      </div>
    </div>
  );
};
