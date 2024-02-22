import { useState } from 'react';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import { RiLeafFill } from 'react-icons/ri';
import { CiSearch } from 'react-icons/ci';
import { IoChevronDown } from 'react-icons/io5';
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { FaBookmark, FaUserFriends } from "react-icons/fa";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaGear } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";


const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    return (
        <div className="h-full border-b-[1px] border-gray-300 w-full flex">
            <div className="w-1/5 h-full  border-e-[1px] border-gray-300 flex items-center px-4">
                <Logo />
            </div>
            <div className="flex-1 flex items-center gap-3 justify-end px-4 py-2">
                <Input
                    value={searchQuery}
                    setValue={setSearchQuery}
                    placeholder="Search followers or another"
                    icon={<CiSearch />}
                    inputClassName="text-sm"
                    className="border-[1px]"
                    iconClassName="font-light"
                />
                <div className="h-full border-gray-300 border-s-[1px] grid place-content-center ps-3">
                    <AccountButton />
                </div>
            </div>
        </div>
    );
};

const AccountButton = () => {
    const [isAccountModalOpened, setIsAccountModalOpened] = useState<boolean>(false);

    return (
        <div className="relative">
            <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-500 grid place-content-center h-8 w-8">
                    <RiLeafFill className="text-2xl text-white" />
                </div>
                <p className="text-sm text-gray-600">Avinash's House</p>
                <button
                    onClick={() => {
                        setIsAccountModalOpened((prev) => !prev);
                    }}
                >
                    <IoChevronDown
                        className={`text-gray-600 ${
                            isAccountModalOpened ? 'rotate-180' : 'rotate-0'
                        } duration-100`}
                    />
                </button>
            </div>
            <AccountList isOpen={isAccountModalOpened} />
        </div>
    );
};

const AccountList = ({ isOpen }: { isOpen: boolean }) => {
    const accountItems = [
        { icon: <BiSolidBarChartAlt2 />, label: "My Polls", isFirst: true },
        { icon: <FaBookmark />, label: "Bookmarks" },
        { icon: <FaUserFriends />, label: "Friends" },
        { icon: <PiTelevisionSimpleFill />, label: "My Channels" },
        { icon: <FaGear />, label: "Settings" },
        { icon: <IoLogOut />, label: "Logout" }
    ];

    return (
        <div
            className={`absolute right-0 mt-2 z-10 overflow-hidden transition-transform origin-top-right ${
                isOpen ? 'w-fit h-fit transform translate-x-0 translate-y-0' : 'w-0 h-0'
            }`}
        >
            <div className="p-1 transition-opacity duration-300 origin-top-right">
                <div className="bg-white shadow rounded-lg w-[300px] min-h-12">
                    <ul className="flex flex-col text-gray-600 text-sm">
                        {accountItems.map(({ icon, label, isFirst }, index) => (
                            <AccountListItem
                                key={index}
                                icon={icon}
                                label={label}
                                isFirst={isFirst}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const AccountListItem = ({ icon, label, isFirst }: { icon: React.ReactNode; label: string; isFirst?: boolean }) => {
    return (
        <li className={`flex items-center gap-3 no-underline cursor-pointer px-16 py-4 border-b-[1px] ${isFirst ? 'rounded-t-lg bg-gray-100 text-blue-500' : ''} hover:bg-gray-100 hover:text-blue-500 transition-colors`}>
            {icon}
            {label}
        </li>
    );
};

export default Navbar;

