import { Dispatch, SetStateAction, useState, FormEvent } from "react";

import { Textarea } from "components";
import { NoteInterface } from "types";
import { saveNoteToLocalStorage } from "services";

export const SaveNote = ({ setNotes, saveCallback }: Props) => {
  const [message, setMessage] = useState("");

  const onMessageChange = (value: string) => {
    setMessage(value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const note: NoteInterface = { id: `note-${Date.now()}`, message: message.trim() };
    setNotes((prevNotes) => [...prevNotes, note]);
    saveNoteToLocalStorage(note);
    setMessage("");
    saveCallback();
  };

  return (
    <form onSubmit={onSubmit}>
      <Textarea value={message} onChange={onMessageChange} />
      <button
        type="submit"
        className="button is-primary"
        disabled={message.trim() === ""}
      >
        Save
      </button>
    </form>
  );
};

interface Props {
  setNotes: Dispatch<SetStateAction<NoteInterface[]>>;
  saveCallback: () => void;
}
