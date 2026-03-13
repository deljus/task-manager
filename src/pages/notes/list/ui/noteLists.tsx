"use client";
import { useState } from "react";

import { ChevronRightIcon, PlusIcon } from "@heroicons/react/20/solid";
import type { Note } from "@/entities/note";
import { format } from "date-fns";
import NextLink from "next/link";
import cn from "classnames";
import { NOTES_PER_PAGE } from "../config/constants";
import { getNotesServer } from "../api/getNotesServer";

type Props = {
  initialNotes: Note[];
};

export function NoteLists({ initialNotes }: Props) {
  const [offset, setOffset] = useState(NOTES_PER_PAGE);
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [hasMoreData, setHasMoreData] = useState(
    initialNotes.length === NOTES_PER_PAGE,
  );

  const loadMoreNotes = async () => {
    if (hasMoreData) {
      const apiNotes = await getNotesServer(offset, NOTES_PER_PAGE);

      if (apiNotes.length == 0) {
        setHasMoreData(false);
      }

      setNotes((prevNotes) => [...prevNotes, ...apiNotes]);
      setOffset((prevOffset) => prevOffset + NOTES_PER_PAGE);
    }
  };

  return (
    <div className="flex flex-col p-2 grow">
      <div className="flex flex-col relative h-full  space-y-2  justify-between items-end">
        <div className="flex flex-col space-y-2  w-full mb-2">
          {notes.map(({ id, title, createdAt }) => (
            <NextLink
              key={id}
              href={`/notes/view/${id}`}
              tabIndex={0}
              className="collapse bg-base-100 border-base-300 border "
            >
              <div className="collapse-title font-semibold w-full flex justify-between p-4">
                <div className="truncate">
                  <span className="badge badge-dash badge-secondary mr-2">
                    {format(createdAt, "dd:MM:yy")}
                  </span>
                  {title}
                </div>
                <ChevronRightIcon className="min-w-6 h-6" />
              </div>
            </NextLink>
          ))}
        </div>

        <div className="sticky bottom-4 ">
          <NextLink
            className="btn btn-primary btn-circle shadow-md"
            href="/notes/create"
          >
            <PlusIcon className="w-6 h-6" />
          </NextLink>
        </div>
      </div>

      {hasMoreData && (
        <button
          className="btn btn-primary btn-circle w-[calc(100%-3rem)] mb-2 -mt-10 z-1 shadow-md"
          onClick={loadMoreNotes}
        >
          Load more...
        </button>
      )}
    </div>
  );
}
