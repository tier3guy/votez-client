import { MdRssFeed } from 'react-icons/md';
import { IoHeart } from 'react-icons/io5';
import { BsGenderTrans } from 'react-icons/bs';
import { GiMicrophone } from 'react-icons/gi';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { LuUserCog } from 'react-icons/lu';

const Sidebar = () => {
    return (
        <div className="w-full h-full flex flex-col justify-between">
            <div>
                <div className="flex flex-col gap-3 mt-4">
                    <div className="flex flex-col">
                        <Tab label="Feed" isActive={true} icon={<MdRssFeed />} />
                    </div>

                    <Title label="Channels" />
                    <div className="flex flex-col">
                        <Tab label="Dating" isActive={false} icon={<IoHeart />} />
                        <Tab label="Gender Identity" isActive={false} icon={<BsGenderTrans />} />
                        <Tab label="Politics" isActive={false} icon={<GiMicrophone />} />
                    </div>

                    <Title label="Others" />
                    <div className="flex flex-col">
                        <Tab label="Plans & Pricing" isActive={false} icon={<BiMoneyWithdraw />} />
                        <Tab label="My Account" isActive={false} icon={<LuUserCog />} />
                    </div>
                </div>
            </div>
            <div className="text-sm flex flex-col gap-2 p-4 border-t-[1px] border-gray-300">
                <p className="text-blue-950 font-semibold">&#169; Votezy. 2024</p>
                <p className="text-gray-600 text-xs">
                    Powerful and easy to use platform to create and find better opinions.
                </p>
            </div>
        </div>
    );
};

interface TabProps {
    label: string;
    onClick?: () => void;
    isActive: boolean;
    icon?: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ label, isActive, icon }) => {
    return (
        <div
            className={`w-full border-s-2 py-2 ps-6 cursor-pointer text-sm flex items-center gap-2 ${
                isActive ? 'border-blue-500' : 'border-transparent'
            } hover:bg-gray-100 hover:border-gray-500`}
        >
            {icon ? (
                <div className={`${isActive ? 'text-blue-500' : 'text-gray-600'} w-6 text-xl`}>
                    {icon}
                </div>
            ) : null}
            <p className={`${isActive ? 'text-blue-500 font-semibold' : 'text-gray-600'}`}>
                {label}
            </p>
        </div>
    );
};

interface TitleProps {
    label: string;
}

const Title: React.FC<TitleProps> = ({ label }) => {
    return (
        <div className="flex items-center gap-4 px-4">
            <div className="h-[1px] bg-gray-300 flex-1" />
            <p className="text-xs text-gray-600">{label}</p>
            <div className="h-[1px] bg-gray-300 flex-1" />
        </div>
    );
};

export default Sidebar;
