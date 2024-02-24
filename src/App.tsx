// Internal Imports
import { ComponentType, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Routes
import { AppRoutes } from './routes/AppRoutes';
import { AuthRoutes } from './routes/AuthRoutes';

// Hooks
import { useAuth } from './providers/AuthProvider';

// Components
import Loader from './components/Loader';
import Layout from './layout';

/**
 * Main application component responsible for rendering routes based on user authentication status.
 */
const App = () => {
    // Authentication status provided by the AuthProvider
    const { isAuthenticated } = useAuth();

    const Routings = isAuthenticated ? AppRoutes : AuthRoutes;

    return (
        <Layout>
            <Suspense fallback={<SuspenseFallback />}>
                <Routes>
                    {/* Map over the specified routes and render them */}
                    {Routings.map(({ id, element, path }) => {
                        const Comp = element as ComponentType;
                        return <Route path={path} element={<Comp />} key={id} />;
                    })}
                </Routes>
            </Suspense>
        </Layout>
    );
};

const SuspenseFallback: React.FC<{}> = () => {
    return (
        <div className="h-[90vh] w-full grid place-content-center">
            <div className="flex gap-2 items-center">
                <Loader />
                <p className="text-gray-600 font-sm font-inter">Loading ...</p>
            </div>
        </div>
    );
};

export default App;
