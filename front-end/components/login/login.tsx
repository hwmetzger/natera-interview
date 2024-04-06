"use client";
import React, { ChangeEvent, useId, useState } from "react";
import { useRouter } from "next/navigation";
import { DataService } from "@/services/index";

/**
 * This is a reusable login component. This component is only for simulation purposes. (Smart Component)
 * @param params <LoginComponentProperties>
 * @returns React.ReactElement
 */
export const LoginComponent = (): React.ReactElement => {
  const id = useId();
  const router = useRouter();

  const [form, setForm] = useState("1");

  const handleSignInClick = () => {
    switch (form) {
      case "1":
        DataService.Account.login(1).then((res: any) => {
          if (+res.group === 1) {
            router.push("/form1");
          }
        });
        break;
      default:
        DataService.Account.login(2).then((res: any) => {
          if (+res.group === 2) {
            router.push("/form2");
          }
        });
        break;
    }
  };

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
              data-testid="login-form-1-radio"
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
              data-testid="login-form-2-radio"
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
            data-testid="login-button"
            onClick={handleSignInClick}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
