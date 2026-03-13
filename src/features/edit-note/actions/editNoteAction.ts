"use server";
import { prisma } from "@/shared/lib/db";
import { getCurrentUserServer } from "@/entities/user";

type EditNoteActionPrevState = {
  error: string | null;
};

export async function editNoteAction(
  _: EditNoteActionPrevState,
  formData: FormData,
) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const date = formData.get("date") as string;
  const noteId = formData.get("noteId") as string;

  if (!title) {
    return { error: "title field is required" };
  }

  const user = await getCurrentUserServer();

  if (!user || !user.id) {
    return { error: "user not found" };
  }

  try {
    await prisma.note.update({
      where: { userId: user.id, id: noteId },
      data: {
        title: title,
        description: description || "",
        createdAt: date ? new Date(date) : undefined,
      },
    });
    return { error: null, success: true };
  } catch (e) {
    console.log(e);
    return { error: "something went wrong" };
  }
}
