"use server";
import { prisma } from "@/shared/lib/db";
import type { Note } from "@/entities/note";

export async function getNotesServer(offset: number, limit: number) {
  try {
    const notes = (await prisma.note.findMany({
      skip: offset,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    })) as Note[];

    return notes;
  } catch {
    throw new Error("Ooops! ");
  }
}
