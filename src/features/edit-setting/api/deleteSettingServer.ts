"use server";
import { getCurrentUserServer } from "@/entities/user";
import { prisma } from "@/shared/lib/db";

export async function deleteSettingServer() {
  try {
    const user = await getCurrentUserServer();
    if (user?.id) {
      await prisma.noteSetting.deleteMany({
        where: {
          userId: user.id,
        },
      });
    }
  } catch (error) {
    throw error;
  }
}
