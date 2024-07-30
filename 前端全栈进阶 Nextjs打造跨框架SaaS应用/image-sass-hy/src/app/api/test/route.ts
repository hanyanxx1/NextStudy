import { NextRequest, NextResponse } from "next/server";
import { insertUserSchema, updateUserSchema } from "@/server/db/validate-schema";

export function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;

  // const name = query.get("name");
  const email = query.get("email");

  const result = updateUserSchema.safeParse({
    // name,
    email,
  });

  if (result.success) {
    return NextResponse.json(result.data);
  } else {
    return NextResponse.json({ error: result.error.message });
  }
}
