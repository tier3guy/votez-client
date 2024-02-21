import { createContext, useContext, useState } from 'react';

interface AuthProviderProps {
    children?: React.ReactNode;
}

interface IAuthContext {
    isAuthenticated: boolean;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const useAuth = () => {
    const state = useContext(AuthContext);
    if (!state) {
        throw new Error('AuthContext is not defined');
    }
    return state;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children = null }) => {
    const [isAuthenticated] = useState<boolean>(true);

    const value: IAuthContext = {
        isAuthenticated,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
