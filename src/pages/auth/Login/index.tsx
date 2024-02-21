import { useState } from 'react';
import Logo from '../../../components/Logo';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { CiMail, CiLock } from 'react-icons/ci';
import IntroImage from '../../../assets/images/intro-img.jpeg';
import AppDemo from '../../../assets/images/app-demo.jpeg';

const LoginPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div className="h-screen w-screen overflow-hidden flex">
            <div className="h-full w-1/2 p-8 flex flex-col justify-between">
                <Logo />

                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-3xl text-blue-950">Log in to you account</h1>
                    <p className="text-gray-600 text-sm w-2/3">
                        Log in now to access the latest insights experience for your social media
                        performance
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    <Input
                        value={email}
                        setValue={setEmail}
                        icon={<CiMail />}
                        label="Email address"
                        placeholder="bohni@votezy.com"
                    />
                    <div className="flex flex-col gap-3">
                        <Input
                            value={password}
                            setValue={setPassword}
                            icon={<CiLock />}
                            label="Password"
                            type="password"
                            placeholder="************"
                        />
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" />
                                <p className="text-sm">Keep me signed in</p>
                            </div>
                            <p className="text-sm font-semibold text-blue-500">Forget Password?</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <Button label="Sign In" />
                    <div>
                        <p className="text-center text-sm">
                            Not registered yet?{' '}
                            <span className="underline text-blue-500">Create a new account</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-full flex-1 bg-blue-50 relative">
                <div className="-translate-y-1/3 top-1/2 absolute">
                    <img src={IntroImage} alt="intro" className="object-contain w-2/3 m-auto" />
                    <div className="w-3/4 p-2 bg-white rounded-md m-auto z-10 shadow-md -translate-y-2/3 translate-x-1/4">
                        <img src={AppDemo} alt="intro" className="m-auto " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
