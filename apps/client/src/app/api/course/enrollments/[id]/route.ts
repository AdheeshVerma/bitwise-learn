import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    const token = req.cookies.get("accessToken")?.value;
    const res = await fetch(
      `${process.env.BACKEND_URL}/api/v1/courses/get-course-enrollments/${id}`,
      {
        headers: {
          Authorization: token || "",
        },
      },
    );

    const data = await res.json();

    return NextResponse.json(data.data, { status: res.status });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
