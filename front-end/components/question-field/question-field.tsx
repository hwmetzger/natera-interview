"use client";

import { ChangeEvent } from "react";
import InputFieldComponentProperties from "./models/question-field";

/**
 * This is a reusable checkbox input component. (Dumb Component)
 * @param params <InputFieldComponentProperties>
 * @returns React.ReactElement
 */
export const QuestionFieldComponent = ({
  id,
  onChange,
  title,
  description,
  label,
}: InputFieldComponentProperties): React.ReactElement => {
  // Handles the change event on the input
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange?.(evt, "checked");
  };

  return (
    <div className="mb-10">
      <div className="flex rounded-md bg-slate-100 pl-2 py-3 text-xl text-bold mb-2">
        {title}
      </div>
      <div className="flex">
        <div className="mr-4 align-middle pl-6 pr-3 pt-2">
          <input
            type="checkbox"
            name={id}
            id={id}
            className="scale-125"
            data-testid="question-field-checkbox"
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="text-xs uppercase font-light">{description}</div>
          <div className="text-lg">{label}</div>
        </div>
      </div>
    </div>
  );
};
