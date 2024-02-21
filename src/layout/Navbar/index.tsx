import { useState } from 'react';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import { RiLeafFill } from 'react-icons/ri';
import { CiSearch } from 'react-icons/ci';
import { IoChevronDown } from 'react-icons/io5';
import Button from '../../components/Button';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { PiTelevisionSimpleBold } from 'react-icons/pi';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    return (
        <div className="h-full border-b-[1px] border-gray-300 w-full flex">
            <div className="w-1/5 h-full  border-e-[1px] border-gray-300 flex items-center px-4">
                <Logo />
            </div>
            <div className="flex-1 flex items-center  justify-between px-4 py-2">
                <div className="flex items-center gap-3">
                    <Button
                        label="Create Poll"
                        className="bg-gray-50 text-blue-500 hover:text-white duration-100"
                        labelClassName="font-medium"
                        icon={<BiSolidBarChartAlt2 />}
                    />
                    <Button
                        label="Create Channel"
                        className="bg-gray-50 text-blue-500 hover:text-white duration-100"
                        labelClassName="font-medium"
                        icon={<PiTelevisionSimpleBold />}
                    />
                </div>
                <div className="flex items-center gap-3">
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
                <p className="text-sm text-gray-600 font-medium">Avinash's House</p>
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
            <div
                className={`absolute right-0 mt-2 overflow-hidden  ${
                    isAccountModalOpened ? 'w-fit h-fit' : 'w-0 h-0'
                }`}
            >
                <div className="p-1">
                    <div className="bg-white shadow rounded-lg w-[300px] min-h-12"></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
