import { Suspense } from "react";
import { WidgetsList } from "./widgetList";

export function WidgetsPage() {
  return (
    <div className="flex flex-col p-2 grow">
      <h1 className="text-xl font-bold my-4">Используемые виджеты</h1>
      <Suspense fallback="Loading...">
        <WidgetsList />
      </Suspense>
    </div>
  );
}
