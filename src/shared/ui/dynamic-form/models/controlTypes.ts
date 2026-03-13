import { ReactNode } from "react";

export type ComponentType = "switch" | "range" | "divider"



export type Control = {
  id: string;
  name: string;
  description: string;
  type: ComponentType;
};

export type BooleanControl = Control & {
  valueType: "boolean";
  defaultValue: boolean,
  ComponentEditMode: (props: {
    value?: boolean;
    onChange?: (value: boolean) => void;
}) => ReactNode;
  ComponentViewMode: (props: { value?: boolean }) => ReactNode;
};

export type StringfyNumberControl = Control & {
  valueType: "stringifyNumber";
  defaultValue: string,
  ComponentEditMode: (props: {
    value?: string;
    onChange?: (value: string) => void;
  }) => ReactNode;
  ComponentViewMode: (props: { value?: string }) => ReactNode;
};

export type NonePropsControl = Control & {
  valueType: "nonProps";
  defaultValue: null,
  ComponentEditMode: () => ReactNode;
  ComponentViewMode: () => ReactNode;
};

export type ControlType = BooleanControl | StringfyNumberControl | NonePropsControl