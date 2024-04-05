"use client";

import React, { ChangeEvent, useId, useState } from "react";
import PageTemplateProperties from "./models/page-template";
import { FormComponent } from "../form/form";
import { NotesComponent } from "../notes/notes";
import SubmitButtonComponent from "./submit-button";
import { DataService } from "@/services/data.service";
import { useRouter } from "next/navigation";

export const PageTemplateComponent = ({
  formTitle,
  children,
  formId,
  initialFormData,
}: PageTemplateProperties): React.ReactElement => {
  const id = useId();
  const [noteText, setNoteText] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const router = useRouter();

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
      <div id={id} className="grid grid-cols-4 gap-20 mb-4">
        <div className="col-span-3">
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
