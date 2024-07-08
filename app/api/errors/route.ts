import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const headers = request.headers;
    const token = headers.get("Authorization")?.split("Bearer ")[1];

    if (!token || token !== "1234567")
      return Response.json(
        { message: "Unauthorized", error: "true" },
        { status: 401 }
      );

    // Auth check
    // Send data to database
    const error = {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      ...body,
    };

    // console.log("error", error);

    const response = await axios.post(
      `${process.env.DATABASE_URL}/errors`,
      error
    );

    // Return response
    return Response.json(response.data);
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
