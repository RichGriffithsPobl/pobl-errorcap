import prisma from "@/lib/db";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const headers = request.headers;
    const token = headers.get("Authorization")?.split("Bearer ")[1];

    // Find user with token
    const user = await prisma.user.findFirst({
      where: { token }
    })

    // No token or no user return error
    if (!token || !user)
      return Response.json(
        { message: "Unauthorized", error: "true" },
        { status: 401 }
      );

    await prisma.error.create({
      data: { ...body },
    });

    return Response.json({ message: "Data posted to database" });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json(
        {
          message: `Failed to post data to database - ${error.message}`,
          error: "true",
        },
        { status: 500 }
      );
    }
  }
};
