"use client";
import React, { ChangeEvent, useId, useState } from "react";

export const LoginComponent = ({
  onSignInClick,
}: LoginComponentProperties): React.ReactElement => {
  const id = useId();
  const [username, setUsername] = useState("1");
  const handleButtonClick = () => {
    onSignInClick(username);
  };
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  return (
    <div id={id} className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-2">
          <h1>Login</h1>
        </div>
        <div className="mb-4 flex" onChange={handleRadioChange}>
          <div className="flex-1">
            <input
              type="radio"
              value="1"
              name="Form 1"
              checked={username === "1"}
            />{" "}
            Form 1
          </div>
          <div className="flex-1">
            <input
              type="radio"
              value="2"
              name="Form 2"
              checked={username === "2"}
            />{" "}
            Form 2
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleButtonClick}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};
