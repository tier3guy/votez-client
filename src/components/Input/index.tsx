import { cn } from '../../utils/helpers';

interface InputProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    placeholder?: string;
    label?: string;
    icon?: React.ReactNode;
    type?: string;
    className?: string;
    inputClassName?: string;
    iconClassName?: string;
}

const Input: React.FC<InputProps> = ({
    label = null,
    icon = null,
    value,
    setValue,
    placeholder = '',
    type = 'text',
    className = '',
    inputClassName = '',
    iconClassName = '',
}) => {
    return (
        <div className="flex flex-col gap-2">
            {label ? <p className="text-sm">{label}</p> : null}
            <div
                className={cn(
                    `rounded-lg flex items-center justify-between py-2 w-full border-gray-300 border-[1.5px] focus-within:border-blue-500`,
                    className,
                )}
            >
                {icon ? (
                    <div
                        className={cn(
                            `ps-2 h-full grid place-content-center text-xl text-gray-500`,
                            iconClassName,
                        )}
                    >
                        {icon}
                    </div>
                ) : null}
                <input
                    className={cn(`h-full flex-1 outline-none border-none px-2`, inputClassName)}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    placeholder={placeholder}
                    type={type}
                />
            </div>
        </div>
    );
};

export default Input;
