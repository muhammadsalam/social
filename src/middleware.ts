import { NextRequest, NextResponse } from "next/server"
import { Routes } from "@/shared/config/routes";
import { updateSession } from "@/shared/utils/supabase/middleware";

const publicRoutes = [Routes.AUTH_LOGIN, Routes.AUTH_REGISTER, Routes.AUTH_CONFIRM, Routes.HOME, '/auth/register/123'];

export async function middleware(request: NextRequest) {
    const response = await updateSession(request);

    const { pathname } = request.nextUrl;
    const isPublicRoute = publicRoutes.includes(pathname as Routes);

    const token = request.cookies.get('sb-access-token')?.value;

    // Если пользователь не авторизован и пытается получить доступ к НЕпубличному адресу
    if (!token && !isPublicRoute) {
        const url = new URL(Routes.AUTH_LOGIN, request.url);
        // тут можно добавить параметр from, чтобы перенаправить пользователя на ту страницу, которую он пытался получить
        return NextResponse.redirect(url);
    }

    if (token && isPublicRoute) {
        const url = new URL(Routes.HOME, request.url);
        return NextResponse.redirect(url);
    }

    return response;
}

// Конфигурация middleware
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files
         */
        '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
    ],
} 