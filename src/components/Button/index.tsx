import { cn } from '../../utils/helpers';

interface ButtonProps {
    label?: string;
    onClick?: () => void;
    className?: string;
    labelClassName?: string;
    icon?: React.ReactNode;
    iconClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
    label = 'Button',
    onClick = () => {},
    className = '',
    labelClassName = '',
    iconClassName = '',
    icon = null,
}) => {
    return (
        <button
            className={cn(
                `px-4 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 flex items-center justify-center gap-2`,
                className,
            )}
            onClick={onClick}
        >
            {icon ? <div className={cn('text-xl', iconClassName)}>{icon}</div> : null}
            <p className={cn('font-semibold text-sm', labelClassName)}>{label}</p>
        </button>
    );
};

export default Button;
