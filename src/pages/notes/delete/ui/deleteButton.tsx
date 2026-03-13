"use client";
import { redirect } from "next/navigation";
import { deleteNoteServer } from "../action/deleteNoteServer";

type Props = {
  noteId: string;
};

export function DeleteButton({ noteId }: Props) {
  const handleDelete = async () => {
    await deleteNoteServer(noteId);
    redirect("/notes/list");
  };
  return (
    <button onClick={handleDelete} className="btn btn-error">
      Удалить
    </button>
  );
}
