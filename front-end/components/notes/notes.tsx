"use component";

import React, { ChangeEvent, useId, useState } from "react";
import { DocumentDuplicateIcon, XMarkIcon } from "@heroicons/react/24/outline";
import NotesComponentProperties from "./models/notes";

/**
 * This is a reusable notes container component. (Dumb Component)
 * @param params <NotesComponentProperties>
 * @returns React.ReactElement
 */
export const NotesComponent = ({
  text,
  onTextChange,
}: NotesComponentProperties): React.ReactElement => {
  // Generate unique id
  const id = useId();

  // Handles the change event on the textarea
  const handleTextChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    onTextChange?.(evt.target.value);
  };

  return (
    <div id={id} className="bg-white shadow-md rounded px-8 pt-6 pb-8 h-full">
      <div className="flex items-center mb-6">
        <div className="flex-none mr-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex justify-center items-center">
            <DocumentDuplicateIcon className="h-6 w-6 text-blue-500" />
          </div>
        </div>
        <div className="flex-1 text-xl">Notes</div>
        <div className="flex-1">
          <XMarkIcon className="h-6 w-6 text-slate-400 ml-auto" />
        </div>
      </div>
      <div>
        <textarea
          id="message"
          rows={10}
          className="block p-2.5 w-full text-sm rounded-lg border-gray-300 border-2"
          placeholder="Type your Notes here..."
          value={text}
          data-testid="notes-component-textarea"
          onChange={handleTextChange}
        ></textarea>
      </div>
    </div>
  );
};
