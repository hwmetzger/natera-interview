"use client";

import React, { ChangeEvent } from "react";
import PageTemplateProperties from "./models/page-template";
import { FormComponent } from "../form/form";
import { NotesComponent } from "../notes/notes";
import { DataService } from "@/services/data.service";
import Context from "./barrel";
import { SubmitButtonComponent } from "../submit-button/submit-button";

/**
 * This is a reusable page template component. (Smart Component)
 * @param params <PageTemplateProperties>
 * @returns React.ReactElement
 */
export const PageTemplateComponent = ({
  formTitle,
  children,
  formId,
  initialFormData,
}: PageTemplateProperties): React.ReactElement => {
  const { useId, useRouter, useState } = Context;

  const id = useId();
  const router = useRouter();

  const [noteText, setNoteText] = useState("");
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmitClick = () => {
    const data = {
      ...formData,
      notes: noteText,
      form: formId,
    };

    DataService.DataEntry.setData(Math.random().toString(), data).then(() => {
      router.refresh();
    });
  };

  const handleTextChange = (text: string) => {
    setNoteText(text);
  };

  const handleFormChange = (evt: ChangeEvent<any>, key: string) => {
    setFormData({
      ...formData,
      [evt.target.id]: evt.target[key],
    });
  };

  // Append the onChange event to children of FormComponent
  const childrenWithHandler = Array.isArray(children)
    ? children.map((child) =>
        React.cloneElement(child, {
          onChange: handleFormChange,
        })
      )
    : React.cloneElement(children, {
        onChange: handleFormChange,
      });

  return (
    <div className="mb-6">
      <div
        id={id}
        className="grid xl:grid-cols-4 grid-cols-1 gap-x-20 gap-y-5 mb-4"
      >
        <div className="xl:col-span-3 col-span-1">
          <FormComponent title={formTitle}>{childrenWithHandler}</FormComponent>
        </div>
        <div className="col-span-1">
          <NotesComponent text={noteText} onTextChange={handleTextChange} />
        </div>
      </div>
      <SubmitButtonComponent onSubmit={handleSubmitClick} />
    </div>
  );
};
