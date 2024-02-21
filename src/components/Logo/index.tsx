const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <div>
                <div className="h-4 w-4 bg-black rounded-full" />
                <div className="h-6 w-6 bg-blue-500 rounded-full ms-2 mt-1" />
            </div>
            <h3 className="font-bold text-2xl text-blue-500">Votezy</h3>
        </div>
    );
};

export default Logo;
