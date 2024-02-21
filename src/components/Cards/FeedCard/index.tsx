interface FeedCardProps {
    question: string;
    options: string[];
    author: string;
    daysLeft: string;
    totalClicks: number;
}

const FeedCard: React.FC<FeedCardProps> = ({
    question,
    options,
    author,
    daysLeft,
    totalClicks,
}) => {
    return (
        <div className="bg-white rounded-lg p-4 flex flex-col gap-8 shadow">
            <div>
                <p className="text-blue-950 font-medium">{question}</p>
                <div className="flex items-center gap-6 text-sm text-gray-600 mt-3">
                    <p>{author}</p>
                    <p>
                        {daysLeft} {parseInt(daysLeft) > 1 ? 'days' : 'day'} left
                    </p>
                </div>
            </div>

            <div className="relative border-gray-600 border-[1px] rounded-md min-h-20">
                <p className="absolute bg-white px-2 text-sm text-gray-600 -translate-y-1/2 left-3">
                    {totalClicks} Votes
                </p>
                <div className="flex flex-col gap-3 mt-2 p-4">
                    {options.map((option, index) => {
                        return (
                            <div
                                className={`border-[1px] rounded-md p-3 shadow-offset cursor-pointer ${
                                    index === 2
                                        ? 'bg-blue-500 text-white border-blue-500'
                                        : 'bg-transparent text-black border-gray-600'
                                } `}
                                key={index}
                            >
                                <p className="text-sm">{option}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FeedCard;
