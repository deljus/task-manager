"use client";
import { CONTROLS } from "@/shared/ui/dynamic-form";
import type {
  BooleanControl,
  NonePropsControl,
  StringfyNumberControl,
} from "@/shared/ui/dynamic-form";
import { useState } from "react";

function BooleanControl({
  ComponentEditMode,
  ComponentViewMode,
}: Pick<BooleanControl, "ComponentEditMode" | "ComponentViewMode">) {
  const [value, setValue] = useState(false);

  return (
    <>
      <h2 className="font-bold text-md">Отображение при выборе:</h2>
      <ComponentEditMode value={value} onChange={setValue} />
      <h2 className="font-bold text-md">Отображение при просмотре:</h2>
      <ComponentViewMode value={value} />
    </>
  );
}

function StringfyNumberControl({
  ComponentEditMode,
  ComponentViewMode,
}: Pick<StringfyNumberControl, "ComponentEditMode" | "ComponentViewMode">) {
  const [value, setValue] = useState("0");

  return (
    <>
      <h2 className="font-bold text-md">Отображение при выборе:</h2>
      <ComponentEditMode value={value} onChange={setValue} />
      <h2 className="font-bold text-md">Отображение при просмотре:</h2>
      <ComponentViewMode value={value} />
    </>
  );
}

function NonTypeControl({
  ComponentEditMode,
}: Pick<NonePropsControl, "ComponentEditMode">) {
  return (
    <>
      <h2 className="font-bold text-md">Отображение при выборе и просмотре</h2>
      <ComponentEditMode />
    </>
  );
}

export function WidgetsList() {
  return (
    <div className="flex flex-col space-y-4">
      {CONTROLS.map(
        ({
          id,
          name,
          description,
          ComponentEditMode,
          ComponentViewMode,
          valueType,
        }) => (
          <div
            key={id}
            tabIndex={0}
            className="collapse collapse-open bg-base-100 border-base-300 border shadow-md"
          >
            <div className="collapse-title font-semibold">{name}</div>
            <div className="collapse-content text-sm flex flex-col space-y-4">
              <div>{description}</div>
              {valueType === "boolean" ? (
                <BooleanControl
                  ComponentEditMode={ComponentEditMode}
                  ComponentViewMode={ComponentViewMode}
                />
              ) : valueType === "stringifyNumber" ? (
                <StringfyNumberControl
                  ComponentEditMode={ComponentEditMode}
                  ComponentViewMode={ComponentViewMode}
                />
              ) : (
                <NonTypeControl ComponentEditMode={ComponentEditMode} />
              )}
            </div>
          </div>
        ),
      )}

      
    </div>
  );
}
