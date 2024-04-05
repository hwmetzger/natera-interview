"use client";
import React, { ChangeEvent, useId, useState } from "react";
import LoginComponentProperties from "./models/login";

/**
 * This is a reusable login component. This component is only for simulation purposes. (Smart Component)
 * @param params <LoginComponentProperties>
 * @returns React.ReactElement
 */
export const LoginComponent = ({
  onSignInClick,
}: LoginComponentProperties): React.ReactElement => {
  // Generate unique id
  const id = useId();

  // State of the Radio Button
  const [form, setForm] = useState("1");

  // Handles the click event on Login button
  const handleButtonClick = () => {
    onSignInClick(form);
  };

  // Handles the change events on the radio buttons
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm(event.target.value);
  };

  return (
    <div id={id} className="max-w-xs mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 flex">
          <div className="flex-1">
            <input
              type="radio"
              value="1"
              name="Form 1"
              checked={form === "1"}
              onChange={handleRadioChange}
            />{" "}
            Form 1
          </div>
          <div className="flex-1">
            <input
              type="radio"
              value="2"
              name="Form 2"
              checked={form === "2"}
              onChange={handleRadioChange}
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
