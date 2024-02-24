// Components
import ChatBox from './ChatBox';
import PollsList from './PollsList';

const FeedPage = () => {
    return (
        <div className="h-full w-full flex">
            <div className="w-[70%]">
                <PollsList />
            </div>
            <div className="h-full border-s-[1px] border-gray-300 grid place-content-center bg-white w-[30%]">
                <ChatBox />
            </div>
        </div>
    );
};

export default FeedPage;
