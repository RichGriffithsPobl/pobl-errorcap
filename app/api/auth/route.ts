import prisma from "@/lib/db";

export const POST = async (request: Request) => {
  const body = await request.json();
  const { email, token } = body

  const user = await prisma.user.findUnique({
    where: { 
      email
     },
  });

  if (!user) {
    return Response.json(
      { message: "User not found", error: "true", token: null },
      { status: 404 }
    );
  }

  if (user.token !== token) {
    return Response.json(
      { message: "Invalid token", error: "true", token: null },
      { status: 401 }
    );
  }

  return Response.json({ token });
};
