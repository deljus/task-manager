import { Switch, Range, SwitchView, RangeView, Divider } from "../controls";
import { ControlType } from "../models/controlTypes";

export const CONTROLS: ControlType[] = [
  {
    id: "control-1",
    name: "Переключатель",
    description: "Для ответов на вопросы да или нет",
    type: "switch",
    valueType: "boolean",
    defaultValue: false,
    ComponentEditMode: Switch,
    ComponentViewMode: SwitchView,
  },
  {
    id: "control-2",
    name: "Диапазон",
    description: "Для ответов где нужно выбрать диапазон от 0 до 10",
    type: "range",
    valueType: "stringifyNumber",
    defaultValue: "0",
    ComponentEditMode: Range,
    ComponentViewMode: RangeView,
  },
  {
    id: "control-3",
    name: "Разделитель",
    description: "Для разделения блоков информации",
    type: "divider",
    valueType: "nonProps",
    defaultValue: null,
    ComponentEditMode: Divider,
    ComponentViewMode: Divider,
  },
];

export const controlsTypeMapped = new Map(CONTROLS.map((control) => [control.type, control]))
