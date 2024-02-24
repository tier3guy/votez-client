import Logo from '../../../components/Logo';
import PricingCard from './PricingCard';
import { PiCopyright } from 'react-icons/pi';

const PricingPage = () => {
    return (
        <div className="h-screen w-screen absolute top-0 left-0 bg-white z-10">
            <div className="h-1/2 w-full bg-blue-50" />
            <div className="absolute top-0 left-0 pt-6 w-full h-full">
                <div className="flex flex-col items-center gap-6">
                    <Logo />
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">
                            Our pricing designed
                            <span className="text-blue-500"> for your business</span>
                        </h1>
                        <p className="mt-3 text-gray-600">
                            Fees are based on your business needs and every stage of growth
                        </p>
                    </div>
                </div>
                <div className="w-full mt-8 flex items-start justify-center gap-6">
                    <PricingCard
                        planName="Starter Plan"
                        planNameStyles="bg-orange-100 text-orange-500"
                        price="Free"
                        description="You can try us for free. No debit card required."
                        buttonText="Get Started for Free"
                        planDetails={[
                            '100 Free Polls',
                            'Basic Email Support',
                            'Limited Access to Analytics Dashboard',
                            'Access to Standard Features',
                        ]}
                    />
                    <PricingCard
                        planName="Custom Plan"
                        planNameStyles="bg-purple-100 text-purple-500"
                        price="$0.15"
                        description="Volume Based Pricing"
                        buttonText="Talk to us"
                        planDetails={[
                            'Unlimited Polls',
                            'Priority Email Support',
                            'Full Access to Analytics Dashboard',
                            'Access to Premium Features',
                        ]}
                    />
                </div>
                <div className="my-4 p-4">
                    <div className="flex gap-1 items-center justify-center text-center">
                        <PiCopyright className="text-lg text-gray-600" />
                        <p className="text-sm font-semibold text-gray-600">
                            All copyrights are reserved, 2024.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
