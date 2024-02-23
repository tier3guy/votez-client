import { IoClose } from 'react-icons/io5';
import IconButton from '../../components/Button/IconButton';

interface CreateChannelModalProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateChannelModal: React.FC<CreateChannelModalProps> = ({ setVisible }) => {
    return (
        <div className="p-6 min-h-[400px] rounded-md w-[60vw] bg-white">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-2xl font-semibold text-blue-500">Create Channel</p>
                </div>
                <IconButton
                    onClick={() => {
                        setVisible(false);
                    }}
                >
                    <IoClose />
                </IconButton>
            </div>

            <div className="mt-1">
                <p className="text-gray-600 text-sm">
                    Create custom channels and get engaged with like minded people.
                </p>
            </div>
        </div>
    );
};

export default CreateChannelModal;
