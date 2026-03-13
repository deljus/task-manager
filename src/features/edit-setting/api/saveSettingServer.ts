"use server";

import { getCurrentUserServer } from "@/entities/user";
import { prisma } from "@/shared/lib/db";
import { SettingType } from "@/shared/ui/dynamic-form";

export async function saveSettingServer(fields: SettingType[]) {
  try {
    const user = await getCurrentUserServer();
    if (user?.id) {
      const data = fields.map((field, index) => {
        const controlType = field.controlType as string;
        const userId = user.id as string;
        return { controlType, title: field.title, order: index, userId };
      });
      await prisma.noteSetting.createMany({
        data,
      });
    }
  } catch (error) {
    throw error;
  }
}
