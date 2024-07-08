import prisma from "@/lib/db";
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

    const error = {
      ...body,
    };

    const newError = await prisma.error.create({
      data: error,
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
