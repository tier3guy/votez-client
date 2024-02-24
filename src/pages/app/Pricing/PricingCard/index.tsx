import Button from '../../../../components/Button';

interface PricingCardProps {
    planName: string;
    planNameStyles?: string;
    price: string;
    description: string;
    planDetails?: string[];
    buttonText: string;
    onClick?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
    planName,
    planNameStyles,
    price,
    description,
    planDetails,
    buttonText,
    onClick = () => {},
}) => {
    return (
        <div className="rounded-lg w-[400px] h-1/2 bg-white shadow p-4 flex flex-col gap-4">
            <div className={`rounded-md p-3 text-sm font-semibold w-fit ${planNameStyles}`}>
                <p>{planName}</p>
            </div>
            <h2 className="text-4xl font-bold">{price}</h2>
            <div className="flex flex-col gap-2">
                {planDetails?.map((plan: string, index: number) => {
                    return (
                        <p className="text-sm text-gray-600">
                            <span className="font-inter">/ </span>
                            {plan}
                        </p>
                    );
                })}
            </div>
            <div className="border-t-[1.5px] border-gray-300 pt-4 text-sm text-gray-600">
                <p>{description}</p>
            </div>
            <Button label={buttonText} onClick={onClick} />
        </div>
    );
};

export default PricingCard;
