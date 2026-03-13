import { Suspense } from 'react'
import { NoteLists } from "./noteLists";
import { getNotesServer } from "../api/getNotesServer";
import { NOTES_PER_PAGE } from "../config/constants";

export async function JournalPage() {
  const notes = await getNotesServer(0, NOTES_PER_PAGE);

  return (
    <Suspense fallback="Loading...">
      <NoteLists initialNotes={notes} />
    </Suspense>
  );
}
