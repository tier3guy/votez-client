// Types
import { Route, createRoute } from '../types/Routes.types';

// Utility functions
import { lazyLoadComponent } from '../utils/helpers';

/**
 * Collection of authentication-related routes.
 * These routes are used for user authentication and authorization.
 */
export const AuthRoutes: Route[] = [
    /*============================= AUTHENTICATION ROUTES ============================= */
    createRoute({
        path: '/auth/login',
        element: lazyLoadComponent('pages/auth/Login'),
    }),
    createRoute({
        path: '/auth/signup',
        element: lazyLoadComponent('pages/auth/Signup'),
    }),
];
