import { useRef, useState } from "react";
import cn from "classnames";
import { ChevronUpDownIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useSortable } from "@dnd-kit/react/sortable";
import { SettingType } from "../../models/settingTypes";
import { controlsTypeMapped } from "../../config/controls";
import { ControlType } from "../../models/controlTypes";

export function ControlHelper({
  title,
  controlType,
  index,
  id,
  onDelete,
}: SettingType & { id: string; index: number; onDelete: () => void }) {
  const [element, setElement] = useState<Element | null>(null);
  const handleRef = useRef<HTMLButtonElement | null>(null);
  const { isDragging } = useSortable({ id, index, element, handle: handleRef });
  const { ComponentEditMode } = controlsTypeMapped.get(
    controlType,
  ) as ControlType;

  return (
    <div
      ref={setElement}
      tabIndex={0}
      className={cn(
        "flex bg-base-100 border-base-300 border flex-col rounded-md p-3",
        isDragging ? "shadow-md" : "",
      )}
    >
      <div className="flex justify-between">
        <button
          ref={handleRef}
          className="btn  btn-outline btn-primary"
        >
          <ChevronUpDownIcon className="w-4 h-4" />
        </button>
        <button
          className="btn   btn-outline btn-error"
          onClick={onDelete}
        >
          <TrashIcon className="w-4 h-4" />
        </button>
      </div>
      <div className="divider my-2" />
      <div className="flex flex-col space-y-2">
        <div className="font-semibold">{title}</div>
        <div className="text-sm flex flex-col space-y-4 items-end">
          <ComponentEditMode />
        </div>
      </div>
    </div>
  );
}
