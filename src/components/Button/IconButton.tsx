import { cn } from '../../utils/helpers';

interface IconButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
    children = null,
    className = '',
    onClick = () => {},
}) => {
    return (
        <button
            className={cn(
                'hover:bg-gray-100 h-8 w-8 rounded-full grid place-content-center text-xl text-gray-800',
                className,
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default IconButton;
