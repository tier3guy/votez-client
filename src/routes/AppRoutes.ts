// Types
import { Route, createRoute } from '../types/Routes.types';

// Utility functions
import { lazyLoadComponent } from '../utils/helpers';

/**
 * Collection of authentication-related routes.
 * These routes are used for user authentication and authorization.
 */
export const AppRoutes: Route[] = [
    /*============================= APPLICATION ROUTES ============================= */
    createRoute({
        path: '/feed',
        element: lazyLoadComponent('pages/app/Feed'),
    }),
    createRoute({
        path: '/my-account',
        element: lazyLoadComponent('pages/app/MyAccount'),
    }),
    createRoute({
        path: '/pricing',
        element: lazyLoadComponent('pages/app/Pricing'),
    }),
];
