interface ModalWrapperProps {
    children?: React.ReactNode;
    visible: boolean;
    setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ visible, children }) => {
    if (!visible) return null;
    return (
        <div
            className={`absolute top-0 left-0 h-screen w-screen grid place-content-center bg-[rgba(0,0,0,0.5)] z-50`}
        >
            <div className={`${visible ? 'animate-zoom-out' : 'animate-zoom-in'}`}>{children}</div>
        </div>
    );
};

export default ModalWrapper;
