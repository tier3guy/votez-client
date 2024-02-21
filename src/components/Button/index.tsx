interface ButtonProps {
    label?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label = 'Button', onClick = () => {} }) => {
    return (
        <button
            className="px-4 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
            onClick={onClick}
        >
            <p className="font-semibold text-sm">{label}</p>
        </button>
    );
};

export default Button;
