"use server";

import prisma from "@/lib/db";
import { generateApiKey } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export const createUser = async () => {
  const user = {
    email: "apps@poblgroup.co.uk",
    type: "service-account",
    token: generateApiKey()
  };
  const created = await prisma.user.create({
    data: user,
  });

  console.log("User created", created);
  revalidatePath("/users");
  return true;
};
