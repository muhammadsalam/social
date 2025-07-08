import { NextRequest, NextResponse } from 'next/server'
import { auth } from './app/providers/auth';
import { Routes } from './shared/config/routes';

const protectedRoutes = ["/"]

export async function middleware(request: NextRequest) {
    const session = await auth();

    const { pathname } = request.nextUrl

    const isProtected = protectedRoutes.some(route => pathname.startsWith(route))

    if (isProtected && !session) {
        return NextResponse.redirect(new URL(Routes.AUTH_LOGIN))
    }

    return NextResponse.next()
}

// See "Matching Paths" below to learn more
// export const config = {
//     // matcher: '/:path*',
// }