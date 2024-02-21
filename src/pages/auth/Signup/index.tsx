import { useState } from 'react';
import Logo from '../../../components/Logo';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { CiMail, CiLock } from 'react-icons/ci';
import IntroImage from '../../../assets/images/intro-img.jpeg';
import AppDemo from '../../../assets/images/app-demo.jpeg';

const SignupPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div className="h-screen w-screen overflow-hidden flex">
            <div className="h-full w-1/2 p-8 flex flex-col justify-between">
                <Logo />

                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-3xl text-blue-950">Sign up for an account</h1>
                    <p className="text-gray-600 text-sm w-2/3">
                        Start your 1 month free trial. No credit card required.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    <Input
                        value={email}
                        setValue={setEmail}
                        icon={<CiMail />}
                        label="Email address"
                        placeholder="bohni@votezy.com"
                        type="email"
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
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" />
                                <p className="text-sm">
                                    I would like hear about votezy updates and new features.
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" />
                                <p className="text-sm">
                                    I accept the{' '}
                                    <span className="text-blue-950 font-semibold">
                                        Terms of use
                                    </span>{' '}
                                    and{' '}
                                    <span className="text-blue-950 font-semibold">
                                        Subscription
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <Button label="Sign Up" />
                    <div>
                        <p className="text-center text-sm">
                            Already have an account ?{' '}
                            <span className="underline text-blue-500">Login</span>
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

export default SignupPage;
