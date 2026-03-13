"use client";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { editNoteAction } from "../actions";
import { Note } from "@/entities/note";
import { format } from "date-fns";

const initialState = {
  error: null,
  success: false,
};

type EditNoteProps = {
  onSuccsess?: () => void;
  redirect?: string;
  initNote: Note;
};

export function EditNote({ onSuccsess, redirect, initNote }: EditNoteProps) {
  const [state, foemAction, isPending] = useActionState(
    editNoteAction,
    initialState,
  );

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      onSuccsess?.();
      if (redirect) router.push(redirect);
    }
  }, [state.success, redirect, onSuccsess, router]);

  return (
    <form className="flex flex-col grow" action={foemAction}>
      <input name="noteId" value={initNote.id} type="hidden" />
      <div className="flex flex-col space-y-2 h-full">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            Заголовок <span className="text-error">*</span>
          </legend>
          <input
            type="text"
            name="title"
            className="input w-full validator"
            placeholder="title..."
            defaultValue={initNote.title}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Дата создания</legend>
          <input
            type="date"
            name="date"
            className="input w-full"
            defaultValue={format(initNote.createdAt, "yyyy-MM-dd")}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Описание</legend>
          <textarea
            className="textarea h-24 w-full"
            name="description"
            placeholder="description..."
            defaultValue={initNote.description || ""}
          ></textarea>
        </fieldset>

        {state.error && (
          <div role="alert" className="alert alert-error alert-dash mt-4">
            <span>{state.error}</span>
          </div>
        )}
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full btn-circle mb-2"
        disabled={isPending}
      >
        Сохранить
      </button>
    </form>
  );
}
