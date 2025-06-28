import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/shared/utils/supabase/server';

export async function POST(request: NextRequest) {
    const { email, password } = await request.json();
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ data });
}
