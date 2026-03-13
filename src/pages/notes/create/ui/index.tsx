import { Suspense } from "react";

import { CreateNote } from "@/features/create-note";

export function CreteNotePage() {
  return (
    <div className="flex flex-col p-2 grow">
      <h1 className="text-xl font-bold">Создание записи</h1>
      <Suspense fallback="Loading...">
        <CreateNote redirect="/notes/list" />
      </Suspense>
    </div>
  );
}