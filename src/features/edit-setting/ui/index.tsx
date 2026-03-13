"use client";
import { BuilderForm, SettingType } from "@/shared/ui/dynamic-form";
import { isEqual } from "lodash";
import { saveSettingServer } from "../api/saveSettingServer";
import { deleteSettingServer } from "../api/deleteSettingServer";

export function SettingsEditFeature({ fields }: { fields: SettingType[] }) {
  const handleChange = async (newFields: SettingType[]) => {
    if (!isEqual(fields, newFields)) {
      await deleteSettingServer();
      await saveSettingServer(newFields);
    }
  };

  return <BuilderForm fields={fields} onChange={handleChange} />;
}
