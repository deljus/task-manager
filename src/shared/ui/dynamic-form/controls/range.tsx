import { useId, useMemo } from "react";
import { StringfyNumberControl } from "../models/controlTypes";

export const Range: StringfyNumberControl["ComponentEditMode"] = ({
  value,
  onChange,
}) => {
  const uuid = useId();

  const scale = useMemo(
    () =>
      Array.from({ length: 11 }).map((_, index) => (
        <span key={`divider-${uuid}-${index}`}>|</span>
      )),
    [uuid],
  );
  const pointers = useMemo(
    () =>
      Array.from({ length: 11 }).map((_, index) => (
        <span key={`pointers-${uuid}-${index}`}>{index}</span>
      )),
    [uuid],
  );
  return (
    <div className="w-full">
      <input
        type="range"
        min={0}
        max="10"
        value={value}
        className="range w-full"
        step="1"
        onChange={({ target }) => onChange?.(target.value)}
      />
      <div className="flex justify-between px-2.5 mt-2 text-xs">{scale}</div>
      <div className="flex justify-between px-2.5 mt-2 text-xs">{pointers}</div>
    </div>
  );
};
