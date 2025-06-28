import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest } from 'next/server'

import { redirect } from 'next/navigation'
import { Routes } from '@/shared/config/routes'
import { createClient } from '@/shared/utils/supabase/server'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const token_hash = searchParams.get('token_hash')
    const type = searchParams.get('type') as EmailOtpType | null
    const next = searchParams.get('next') ?? Routes.FEED

    if (token_hash && type) {
        const supabase = await createClient();
        const { data, error } = await supabase.auth.verifyOtp({
            type,
            token_hash,
        })

        if (!error && data.session) {
            (await cookies()).set('sb-access-token', data.session.access_token, {
                httpOnly: true,
                path: '/'
            });
            (await cookies()).set('sb-refresh-token', data.session.refresh_token, {
                httpOnly: true,
                path: '/'
            });
            // redirect user to specified redirect URL or root of app
            redirect(next)
        }
    }

    // redirect the user to an error page with some instructions
    redirect('/error')
}