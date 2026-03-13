import { Note } from "../model/types";
import { format } from "date-fns";

type Props = {
  note: Note;
};

export function NoteView({ note }: Props) {
  return (
    <div className="w-full h-full p-2 space-y-2">
      <div className="collapse collapse-open bg-base-100 border border-base-300 w-full">
        <div className="collapse-title font-semibold">Заголовок</div>
        <div className="collapse-content text-sm">{note.title}</div>
      </div>
      <div className="collapse collapse-open bg-base-100 border border-base-300 w-full">
        <div className="collapse-title font-semibold">Описание</div>
        <div className="collapse-content text-sm">
          {note.description || "-"}
        </div>
      </div>
      <div className="collapse collapse-open bg-base-100 border border-base-300 w-full">
        <div className="collapse-title font-semibold">Создано</div>
        <div className="collapse-content text-sm">
          <span className="badge badge-dash">
            {format(note.createdAt, "dd:MM:yy")}
          </span>
        </div>
      </div>
      <div className="collapse collapse-open bg-base-100 border border-base-300 w-full">
        <div className="collapse-title font-semibold">Обновлено</div>
        <div className="collapse-content text-sm">
          <span className="badge badge-dash">
            {format(note.updatedAt, "dd:MM:yy")}
          </span>
        </div>
      </div>
    </div>
  );
}
