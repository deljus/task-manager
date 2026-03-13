import { prisma } from "@/shared/lib/db";
import { auth } from "@/shared/lib/auth";
import type { Note } from "../model/types"

export async function getNoteServer(noteId: string) {
  const session = await auth();

  try {
    const note = await prisma.note.findFirst({
      where: {
        id: noteId,
        userId: session?.user?.id,
      },
    }) as Note;

    return note;
  } catch (error) {
    throw error;
  }
}
