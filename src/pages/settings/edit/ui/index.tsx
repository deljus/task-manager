import { Suspense } from "react";
import { SettingsEditFeature } from "@/features/edit-setting";
import type { SettingType } from "@/shared/ui/dynamic-form";
import { getSettingServer } from "../api/getSettingServer";

export async function SettingsEditPage() {
  const settings = await getSettingServer();
  const fields = settings.map(({ title, controlType, id }) => ({
    title,
    controlType,
    uuid: id,
  })) as SettingType[];

  return (
    <div className="flex flex-col p-2 grow">
      <h1 className="text-lg font-bold my-2">Настроить поля записи</h1>

      <Suspense fallback="Loading...">
        <SettingsEditFeature fields={fields} />
      </Suspense>
    </div>
  );
}
