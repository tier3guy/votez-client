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

export default Title;
