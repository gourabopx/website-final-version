import { NextResponse } from "next/server";
import { getTopBars } from "@/app/actions/topbar";

export async function GET() {
  try {
    const result = await getTopBars();

    if (result.error) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: result.data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
