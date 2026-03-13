"use client";
import { useEffect, useReducer } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { isSortable } from "@dnd-kit/react/sortable";
import { v4 as uuidv4 } from "uuid";

import { SettingType } from "../../models/settingTypes";
import { ControlType } from "../../models/controlTypes";
import { AddNewControl } from "./AddNewControl";
import { ControlHelper } from "./ControlHelper";

type Action =
  | {
      type: "SAVE_NEW_CONTROL";
      payload: {
        title: string;
        control: ControlType;
      };
    }
  | {
      type: "MOVE_CONTROLS";
      payload: {
        prevIndex: number;
        nextIndex: number;
      };
    }
  | {
      type: "DELETE_CONTROL";
      payload: {
        index: number;
      };
    };

type State = SettingType[];

type Props = {
  fields: SettingType[];
  onChange: (fields: State) => void;
};

function reducer(state: State, action: Action) {
  const copyState = [...state];
  switch (action.type) {
    case "SAVE_NEW_CONTROL":
      const { title, control } = action.payload;
      return [
        ...state,
        {
          uuid: uuidv4(),
          title,
          controlType: control.type,
        },
      ];
    case "MOVE_CONTROLS":
      const { prevIndex, nextIndex } = action.payload;
      const [removed] = copyState.splice(prevIndex, 1);
      copyState.splice(nextIndex, 0, removed);
      return copyState;
    case "DELETE_CONTROL":
      const { index } = action.payload;
      copyState.splice(index, 1);
      return copyState;
    default:
      return state;
  }
}

export function BuilderForm({ fields = [], onChange }: Props) {
  const [state, dispatch] = useReducer(reducer, fields);

  useEffect(() => {
    onChange(state)
  }, [state, onChange]);

  return (
    <div className="flex flex-col h-full space-y-2">
      <AddNewControl
        onSave={(payload) => dispatch({ type: "SAVE_NEW_CONTROL", payload })}
      />
      <DragDropProvider
        onDragEnd={(event) => {
          if (event.canceled) return;

          const { source } = event.operation;

          if (isSortable(source)) {
            const { initialIndex: prevIndex, index: nextIndex } = source;

            if (prevIndex !== nextIndex) {
              dispatch({
                type: "MOVE_CONTROLS",
                payload: { prevIndex, nextIndex },
              });
            }
          }
        }}
      >
        {state.map((props, index) => (
          <ControlHelper
            key={props.uuid}
            index={index}
            id={props.uuid}
            onDelete={() =>
              dispatch({ type: "DELETE_CONTROL", payload: { index } })
            }
            {...props}
          />
        ))}
      </DragDropProvider>
    </div>
  );
}
