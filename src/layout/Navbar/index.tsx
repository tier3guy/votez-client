import { useState } from 'react';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import ModalWrapper from '../../components/Modals/ModalWrapper';
import CreateChannelModal from '../Modals/CreateChannelModal';
import CreatePollModal from '../Modals/CreatePollModal';

import { RiLeafFill } from 'react-icons/ri';
import { CiSearch } from 'react-icons/ci';
import { IoChevronDown } from 'react-icons/io5';
import { BsQuestionCircle } from 'react-icons/bs';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { PiTelevisionSimpleBold } from 'react-icons/pi';
import { FiLogOut } from 'react-icons/fi';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [modalVisibility, setModalVisibility] = useState<boolean>(false);
    const [modalComp, setModalComp] = useState<'CreatePollModal' | 'CreateChannelModal' | ''>('');

    return (
        <>
            <ModalWrapper visible={modalVisibility}>
                {modalComp === 'CreatePollModal' ? (
                    <CreatePollModal setVisible={setModalVisibility} visible={modalVisibility} />
                ) : modalComp === 'CreateChannelModal' ? (
                    <CreateChannelModal setVisible={setModalVisibility} visible={modalVisibility} />
                ) : null}
            </ModalWrapper>

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
                            onClick={() => {
                                setModalComp('CreatePollModal');
                                setModalVisibility(true);
                            }}
                        />
                        <Button
                            label="Create Channel"
                            className="bg-gray-50 text-blue-500 hover:text-white duration-100"
                            labelClassName="font-medium"
                            icon={<PiTelevisionSimpleBold />}
                            onClick={() => {
                                setModalComp('CreateChannelModal');
                                setModalVisibility(true);
                            }}
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
        </>
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
                <p className="text-sm text-gray-600 font-medium">@balanced_owl</p>
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

/**
 * @author Kamya Kumari
 * @param isOpen: boolean
 * @returns React FC - Account Lists
 */
const AccountList = ({ isOpen }: { isOpen: boolean }) => {
    const accountItems = [
        { icon: <FiUser />, label: 'View Profile', command: 'P' },
        { icon: <BsQuestionCircle />, label: 'Support', command: '/' },
        { icon: <FiLogOut />, label: 'Logout', command: '/ L' },
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
                        <li
                            className={`flex items-center gap-3 cursor-pointer p-4 border-b-[1.5px]`}
                        >
                            <div className="h-12 w-12 rounded-full overflow-hidden object-cover border">
                                <img
                                    src="https://pngset.com/images/apple-unveils-new-emoji-face-mask-memoji-characters-hypebeast-apple-memoji-head-clothing-apparel-toy-transparent-png-2663192.png"
                                    loading="lazy"
                                    alt="profile"
                                />
                            </div>
                            <div className="flex flex-1 flex-col gap-1 w-3/5">
                                <p className="font-semibold text-gray-900 text-sm">@balanced_owl</p>
                                <p className="text-gray-600 text-xs line-clamp-1">
                                    0xBd0Dbd3A162beC1374Bf0D4B384875c350275Abe
                                </p>
                            </div>
                        </li>
                        {accountItems.map(({ icon, label, command }, index) => (
                            <AccountListItem
                                key={index}
                                icon={icon}
                                label={label}
                                command={command}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const AccountListItem = ({
    icon,
    label,
    command,
}: {
    icon: React.ReactNode;
    label: string;
    command?: string;
}) => {
    return (
        <li
            className={`flex items-center justify-between no-underline cursor-pointer px-8 py-4 border-b-[1px] hover:bg-gray-100 hover:text-blue-500 transition-colors`}
        >
            <div className="flex items-center gap-3">
                <div className="text-lg">{icon}</div>
                {label}
            </div>
            <p className="flex items-center gap-1">
                <span className="text-lg">⌘</span>
                {command}
            </p>
        </li>
    );
};

export default Navbar;
