import { BiMessageSquareDetail } from 'react-icons/bi';

const ChatBox = () => {
    return (
        <div className="flex flex-col gap-2 items-center justify-center">
            <BiMessageSquareDetail className="text-7xl text-blue-500" />
            <div className="text-center">
                <p className="text-blue-950 text-sm font-medium">The chat is empty</p>
                <p className="text-sm text-gray-600">Be the first one to break the ice</p>
            </div>
        </div>
    );
};

export default ChatBox;
