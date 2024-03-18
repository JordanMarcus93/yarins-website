import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    const { title } = await req.json();

    if (!user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.create({
      data: {
        userId: user.id,
        title,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.error("COURSES: Error creating course", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
