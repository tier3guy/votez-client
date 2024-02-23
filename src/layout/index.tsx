import { useAuth } from '../providers/AuthProvider';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { BiMessageSquareDetail } from 'react-icons/bi';
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
                        <div className="bg-blue-50 w-[55%] h-full overflow-hidden">{children}</div>
                        <div className="w-[25%] h-full border-s-[1px] border-gray-300 grid place-content-center">
                            <div className="flex flex-col gap-2 items-center justify-center">
                                <BiMessageSquareDetail className="text-7xl text-blue-500" />
                                <div className="text-center">
                                    <p className="text-blue-950 text-sm font-medium">
                                        The chat is empty
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Be the first one to break the ice
                                    </p>
                                </div>
                            </div>
                        </div>
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
