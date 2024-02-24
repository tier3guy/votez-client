// Internal Imports
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Routes
import { AuthRoutes } from '../../routes/AuthRoutes';

interface AuthProviderProps {
    children?: React.ReactNode;
}

interface IAuthContext {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
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
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    // Simulates Login Action
    const login = async () => {
        setIsAuthenticated(true);
    };

    // Simulates Logout Action
    const logout = async () => {
        setIsAuthenticated(false);
    };

    // Function to check if the given path is in the AuthRoutes
    const isPathInAuthRoutes = (path: string) => {
        return AuthRoutes.some((route) => route.path === path);
    };

    useEffect(() => {
        const currentPath = window.location.pathname;
        if (isAuthenticated) {
            if (currentPath === '/' || isPathInAuthRoutes(currentPath)) navigate('/feed');
        } else {
            if (!isPathInAuthRoutes(currentPath)) {
                navigate('/auth/login');
            }
        }
    }, [isAuthenticated, navigate]);

    const value: IAuthContext = {
        isAuthenticated,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
