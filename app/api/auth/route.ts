import prisma from "@/lib/db";
import axios from "axios";

export const POST = async (request: Request) => {
  const body = await request.json();
  console.log("body", body);

  if (!body.username || !body.password) {
    return Response.json(
      { message: "Missing username or password", error: "true" },
      { status: 400 }
    );
  }

  const { username, password } = body;
  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    return Response.json(
      { message: "User not found", error: "true" },
      { status: 404 }
    );
  }

  if (user.password !== password) {
    return Response.json(
      { message: "Invalid password", error: "true" },
      { status: 401 }
    );
  }

  //   TODO: Implement JWT token generation

  return Response.json({ token: "1234567" });
};
