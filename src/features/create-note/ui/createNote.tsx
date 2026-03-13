"use client";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createNoteAction } from "../actions";

const initialState = {
  error: null,
  success: false,
};

type CreateNoteProps = {
  onSuccsess?: () => void;
  redirect?: string;
};

export function CreateNote({ onSuccsess, redirect }: CreateNoteProps) {
  const [state, foemAction, isPending] = useActionState(
    createNoteAction,
    initialState,
  );

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      onSuccsess?.();
      if (redirect) router.push(redirect);
    }
  }, [state.success, redirect]);

  return (
    <form className="flex flex-col grow" action={foemAction}>
      <div className="flex flex-col space-y-2 h-full">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            Title <span className="text-error">*</span>
          </legend>
          <input
            type="text"
            name="title"
            className="input w-full validator"
            placeholder="title..."
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Date</legend>
          <input type="date" name="date" className="input w-full" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Description</legend>
          <textarea
            className="textarea h-24 w-full"
            name="description"
            placeholder="description..."
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
        Create
      </button>
    </form>
  );
}
