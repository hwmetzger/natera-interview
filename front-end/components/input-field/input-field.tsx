"use client";

import { ChangeEvent } from "react";
import InputFieldComponentProperties from "./models/input-field";

/**
 * This is a reusable text input component. (Dumb Component)
 * @param params <InputFieldComponentProperties>
 * @returns React.ReactElement
 */
export const InputFieldComponent = ({
  id,
  placeholder,
  onChange,
}: InputFieldComponentProperties): React.ReactElement => {
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange?.(evt, "value");
  };

  return (
    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 mb-10">
      <input
        type="text"
        name={id}
        id={id}
        data-testid="input-filed-component-input"
        className="block flex-1 border-0 bg-transparent py-3 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
