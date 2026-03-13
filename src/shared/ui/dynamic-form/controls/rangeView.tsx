import { StringfyNumberControl } from "../models/controlTypes";

export const RangeView: StringfyNumberControl["ComponentViewMode"] = ({
  value,
}) => {
  return <div className="badge badge-outline badge-info">{value} из 10</div>;
};
