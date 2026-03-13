import { prisma } from "@/shared/lib/db";
import { auth } from "@/shared/lib/auth";


export async function getSettingServer() {
  const session = await auth();

  try {
    const settings = await prisma.noteSetting.findMany({
      where: {
        userId: session?.user?.id,
      },
    });

    return settings;
  } catch (error) {
    throw error;
  }
}