// Hooks
import { useAuth } from '../providers/AuthProvider';

// Components
import Navbar from './Navbar';
import Sidebar from './Sidebar';

// Internal Imports
import { Suspense } from 'react';

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return (
            <Suspense>
                <div className="h-screen w-screen overflow-hidden flex flex-col">
                    <div className="h-[12%]">
                        <Navbar />
                    </div>
                    <div className="h-[88%] overflow-hidden flex">
                        <div className="w-1/5 h-full border-e-[1px] border-gray-300">
                            <Sidebar />
                        </div>
                        <div className="bg-blue-50 h-full overflow-hidden w-4/5">{children}</div>
                    </div>
                </div>
            </Suspense>
        );
    }
    return (
        <div>
            <Suspense>{children}</Suspense>
        </div>
    );
};

export default Layout;
