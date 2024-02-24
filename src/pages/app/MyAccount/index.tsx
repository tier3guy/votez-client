const MyAccountPage = () => {
    return (
        <div className="p-4 flex flex-col gap-4">
            <div className="p-4 rounded-md bg-white shadow flex items-center gap-4">
                <div className="h-24 w-24 rounded-full border overflow-hidden">
                    <img
                        src="https://pngset.com/images/apple-unveils-new-emoji-face-mask-memoji-characters-hypebeast-apple-memoji-head-clothing-apparel-toy-transparent-png-2663192.png"
                        alt="profile"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold text-blue-950 text-lg">@balanced_owl</h1>
                    <p className="text-gray-600 text-sm">
                        0xBd0Dbd3A162beC1374Bf0D4B384875c350275Abe
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MyAccountPage;
