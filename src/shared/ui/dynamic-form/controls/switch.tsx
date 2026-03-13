import { BooleanControl } from "../models/controlTypes";

export const Switch: BooleanControl["ComponentEditMode"] = ({
  value,
  onChange,
}) => {
  return (
    <input
      type="checkbox"
      checked={value}
      onChange={() => onChange?.(!value)}
      className="toggle toggle-lg"
    />
  );
};
