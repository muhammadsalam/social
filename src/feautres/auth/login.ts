import { createClient } from "@/shared/utils/supabase/server";

export async function login(email: string, password: string) {
    try {
        const supabase = await createClient();
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.error("Error logging in:", error);

        throw error;
    }
}
