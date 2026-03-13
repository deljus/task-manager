import { BooleanControl } from "../models/controlTypes";

export const SwitchView: BooleanControl["ComponentViewMode"] = ({ value }) => {
  return value ? (
    <div className="badge badge-outline badge-success">Да</div>
  ) : (
    <div className="badge badge-outline badge-error">Нет</div>
  );
};
