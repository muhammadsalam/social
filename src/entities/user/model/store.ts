import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AuthState, User } from './types'

interface AuthStore extends AuthState {
    login: (user: User) => void
    logout: () => void
    setLoading: (isLoading: boolean) => void
    setError: (error: string | null) => void
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
            login: (user) => set({ user, isAuthenticated: true, error: null }),
            logout: () => set({ user: null, isAuthenticated: false, error: null }),
            setLoading: (isLoading) => set({ isLoading }),
            setError: (error) => set({ error }),
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                user: state.user,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
) 