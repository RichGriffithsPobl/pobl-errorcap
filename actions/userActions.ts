"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const createUser = async () => {
  const user = {
    username: "apps",
    password: "password",
    type: "service-account",
  };
  const created = await prisma.user.create({
    data: user,
  });

  console.log("User created", created);
  revalidatePath("/users");
  return true;
};
