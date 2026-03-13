import { notFound } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { DeleteButton } from "././deleteButton";

export async function DeleteNotePage({
  params
}: {
  params: { noteId: string };
}) {
  const { noteId } = await params;

  if (!noteId) {
    notFound();
  }

  return (
    <div className="flex grow w-full flex-col p-2 justify-center space-y-4 items-center">
      <h1 className="text-xl font-bold">Удаление записи</h1>
      <p>Вы точно хотите удалить запись?</p>
      <Suspense fallback={<div className="skeleton h-10 w-20" />}>
        <DeleteButton noteId={noteId} />
      </Suspense>
      <Link
        href={`/notes/view/${noteId}`}
        className="btn btn-outline btn-accent"
      >
        Отмена
      </Link>
    </div>
  );
}
