import { questions } from '../../../../assets/dummyData/feeds';
import FeedCard from '../../../../components/Cards/FeedCard';
import Title from '../../../../components/Title';

const PollsList = () => {
    return (
        <div className="p-4 flex flex-col gap-4 h-full overflow-y-scroll">
            <Title label="15th Feb 24" />
            {questions.map((feed, index: number) => {
                return <FeedCard {...feed} key={index} />;
            })}
            <Title label="Yesterday" />
            {questions.map((feed, index: number) => {
                return <FeedCard {...feed} key={index} />;
            })}
            <Title label="Today" />
            {questions.map((feed, index: number) => {
                return <FeedCard {...feed} key={index} />;
            })}
        </div>
    );
};

export default PollsList;
