import { Suspense } from "react";
import { notFound } from "next/navigation";
import { EditNote } from "@/features/edit-note";
import { getNoteServer } from "@/entities/note";

export async function EditNotePage({ params }: { params: { noteId: string } }) {
  const { noteId } = await params;

  if (!noteId) {
    notFound();
  }

  const initNote = await getNoteServer(noteId);
  return (
    <div className="flex flex-col p-2 grow">
      <h1 className="text-xl font-bold">Редактирование записи</h1>
      <Suspense fallback="Loading...">
        <EditNote redirect="/notes/list" initNote={initNote} />
      </Suspense>
    </div>
  );
}
