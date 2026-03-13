"use server";
import { prisma } from "@/shared/lib/db";
import { getCurrentUserServer } from "@/entities/user";

type CreateNoteActionPrevState = {
  error: string | null;
};

export async function createNoteAction(
  _: CreateNoteActionPrevState,
  formData: FormData,
) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const date = formData.get("date") as string;

  if (!title) {
    return { error: "title field is required" };
  }

  const user = await getCurrentUserServer();

  if (!user || !user.id) {
    return { error: "user not found" };
  }

  try {
    await prisma.note.create({
      data: {
        title: title,
        description: description || "",
        createdAt: date ? new Date(date) : undefined,
        userId: user.id,
      },
    });
    return { error: null, success: true };
  } catch (e) {
    console.log(e);
    return { error: "something went wrong" };
  }
}
