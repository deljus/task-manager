import { NoteView } from "@/entities/note";
import { notFound } from "next/navigation";
import { getNoteServer } from "@/entities/note";
import {
  WrenchScrewdriverIcon,
  XMarkIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export async function NoteViewPage({ params }: { params: { noteId: string } }) {
  const { noteId } = await params;

  const note = await getNoteServer(noteId);

  if (!note) {
    notFound();
  }

  return (
    <div className="w-full">
      <NoteView note={note} />
      <div className="fab fab-flower">
        {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-lg btn-circle btn-primary"
        >
          <WrenchScrewdriverIcon className="w-4 h-4 text-base" />
        </div>

        {/* Main Action button replaces the original button when FAB is open */}
        <div className="fab-close">
          <span className="btn btn-circle btn-outline btn-lg btn-secondary text-base">
            <XMarkIcon className="w-4 h-4" />
          </span>
        </div>

        <Link
          className="btn btn-lg btn-circle btn-error"
          href={`/notes/delete/${noteId}`}
        >
          <TrashIcon className="w-4 h-4" />
        </Link>
        <Link
          className="btn btn-lg btn-circle btn-accent"
          href={`/notes/edit/${noteId}`}
        >
          <PencilSquareIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
