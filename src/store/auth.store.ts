import { create } from "zustand";

interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    token?: string;
    user?: {
        name: string;
        email: string;
    };

    login:(email: string, password: string) => void;
    logout:() => void;
}

export const useAuthStore = create<AuthState>()( ( set ) => ({

    status: 'checking',
    token: undefined,
    user: undefined,

    login: ( email: string, password: string ) => {

        set({
            status: 'authenticated',
            token: 'ABC123',
            user: {
                name: 'Daniel Rosas',
                email: email,
            }
        
        })
        
    },

    logout: () => {
        set({
            status: 'not-authenticated',
            token: undefined,
            user: undefined
        })
    }

})
);
