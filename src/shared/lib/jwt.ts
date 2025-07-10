import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';
import { JWTPayload } from "@/app/api/auth/callback/github/types";
import { NextRequest } from "next/server";

function verifyToken(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload;
}

export function getUserFromRequest(req: NextRequest) {
    const token = req.cookies.get('token')?.value;
    return token ? verifyToken(token) : null
}

export async function getUserFromToken() {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    return token ? verifyToken(token) : null
}