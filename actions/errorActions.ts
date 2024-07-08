"use server";

import prisma from "@/lib/db";

export const getAllErrors = async () => {
  const errors = await prisma.error.findMany();
  return errors;
};
