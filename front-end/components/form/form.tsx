"use component";

import React, { useId } from "react";
import FormComponentProperties from "./models/form";
import { XMarkIcon } from "@heroicons/react/24/outline";

/**
 * This is a reusable form container component. (Dumb Component)
 * @param params <FormComponentProperties>
 * @returns React.ReactElement
 */
export const FormComponent = ({
  title,
  children,
}: FormComponentProperties): React.ReactElement => {
  // Generate unique id
  const id = useId();

  return (
    <div id={id} className="bg-white shadow-md rounded px-8 pt-6 pb-8 h-full">
      <div className="flex items-center mb-6">
        <div className="text-xl">{title}</div>
        <div className="flex-1">
          <XMarkIcon className="h-6 w-6 text-slate-400 ml-auto" />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
