import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const token = request.cookies.get('token');

    if (!token) return NextResponse.json({ status: 404 })

    return NextResponse.json(token)
}