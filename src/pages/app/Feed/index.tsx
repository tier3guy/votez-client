import FeedCard from '../../../components/Cards/FeedCard';
import { questions } from '../../../assets/dummyData/feeds';

const FeedPage = () => {
    return (
        <div className="p-4 flex flex-col gap-4 h-full overflow-y-scroll">
            {questions.map((feed, index: number) => {
                return <FeedCard {...feed} key={index} />;
            })}
        </div>
    );
};

export default FeedPage;
