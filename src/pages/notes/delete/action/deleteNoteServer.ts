"use server";
import { getCurrentUserServer } from "@/entities/user";
import { prisma } from "@/shared/lib/db";

export async function deleteNoteServer(noteId: string) {
  const user = await getCurrentUserServer();

  if (!user || !user.id) {
    return { error: "user not found" };
  }

  try {
    await prisma.note.delete({
      where: {
        userId: user.id,
        id: noteId,
      },
    });
  } catch (err) {
    throw err;
  }
}
