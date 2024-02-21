interface Question {
    question: string;
    options: string[];
    author: string;
    daysLeft: string;
    totalClicks: number;
}

export const questions: Question[] = [
    {
        question:
            "How do you define success, and do you feel like you've achieved it in your life?",
        options: [
            'Success is achieving financial stability and recognition in my career.',
            'Success means finding fulfillment and happiness in both personal and professional aspects of life.',
            'Success is making a positive impact on others and leaving a legacy.',
            'Success is continuously striving for improvement and growth, regardless of external achievements.',
        ],
        author: '@mother_of_dragons',
        daysLeft: '5',
        totalClicks: 214,
    },
    {
        question:
            "Reflecting on your past experiences, what do you believe is the most important lesson you've learned about relationships?",
        options: [
            'Trust is the foundation of any healthy relationship.',
            'Communication and understanding are key to resolving conflicts.',
            'Learning to love and accept oneself is crucial before entering into a relationship.',
            'Relationships require effort and compromise from both parties to thrive.',
        ],
        author: '@wise_owl',
        daysLeft: '3',
        totalClicks: 23,
    },
    {
        question:
            'In a world filled with uncertainty, how do you cultivate a sense of purpose and meaning in your life?',
        options: [
            'By setting clear goals and working towards them diligently.',
            'By finding meaning in small everyday moments and practicing gratitude.',
            'By connecting with others and contributing to something larger than myself.',
            'By embracing change and viewing challenges as opportunities for growth.',
        ],
        author: '@dreamer',
        daysLeft: '7',
        totalClicks: 156,
    },
    {
        question:
            'Can you recall a moment that profoundly changed your perspective or outlook on life? What was it, and how did it impact you?',
        options: [
            'Traveling to a different country opened my eyes to diverse cultures and perspectives.',
            'Overcoming a personal struggle showed me the resilience of the human spirit.',
            'Losing a loved one made me realize the importance of cherishing every moment.',
            'Achieving a long-term goal taught me the power of perseverance and determination.',
        ],
        author: '@adventurer',
        daysLeft: '2',
        totalClicks: 102,
    },
    {
        question:
            'When faced with challenges or setbacks, what strategies do you employ to stay resilient and keep moving forward?',
        options: [
            'Seeking support from friends and family members.',
            'Practicing self-care activities such as meditation or exercise.',
            'Reflecting on past successes to remind myself of my capabilities.',
            'Breaking down the problem into smaller, manageable tasks and tackling them one at a time.',
        ],
        author: '@optimist',
        daysLeft: '1',
        totalClicks: 312,
    },
    {
        question:
            'Considering the current state of the world, what issues or causes are you most passionate about, and what actions do you take to support them?',
        options: [
            'Environmental conservation: I volunteer for local clean-up efforts and support eco-friendly businesses.',
            'Social justice: I advocate for marginalized communities and participate in protests or rallies.',
            'Education: I mentor underprivileged youth and donate to educational initiatives.',
            'Health and wellness: I promote mental health awareness and engage in fundraisers for medical research.',
        ],
        author: '@activist',
        daysLeft: '4',
        totalClicks: 78,
    },
    {
        question:
            'How do you navigate the balance between pursuing your own ambitions and fulfilling responsibilities to others, such as family or community?',
        options: [
            'Prioritizing self-care and personal goals while still making time for loved ones.',
            'Communicating openly with family and setting boundaries when necessary.',
            'Finding ways to align personal ambitions with contributions to the well-being of my family or community.',
            'Seeking support from family members or community resources to help manage responsibilities.',
        ],
        author: '@balance_seeker',
        daysLeft: '6',
        totalClicks: 45,
    },
    {
        question:
            "Reflecting on your personal growth journey, what areas do you feel you've made significant progress in, and where do you still see room for improvement?",
        options: [
            "I've made progress in building self-confidence but still struggle with self-doubt at times.",
            "I've become more resilient in handling challenges but need to work on managing stress more effectively.",
            "I've improved my communication skills but want to further develop my emotional intelligence.",
            "I've developed strong leadership abilities but recognize the need to improve my teamwork skills.",
        ],
        author: '@growth_mindset',
        daysLeft: '3',
        totalClicks: 98,
    },
    {
        question:
            'If you could offer one piece of advice to your younger self, what would it be, and why?',
        options: [
            "Don't be afraid to take risks and pursue your passions.",
            'Be kind to yourself and embrace your imperfections.',
            'Surround yourself with positive influences and supportive people.',
            'Trust in your abilities and believe that you are capable of achieving your dreams.',
        ],
        author: '@sage_advice',
        daysLeft: '5',
        totalClicks: 234,
    },
    {
        question:
            'Imagine yourself 10 years from now. What do you hope your life looks like, and what steps are you taking today to work towards that vision?',
        options: [
            "I hope to have a successful career and financial stability, so I'm focusing on advancing my skills and networking.",
            "I hope to have meaningful relationships and a strong support system, so I'm investing time in nurturing my friendships and family connections.",
            "I hope to have made a positive impact on my community or society, so I'm volunteering and advocating for causes I believe in.",
            "I hope to have achieved a sense of fulfillment and inner peace, so I'm prioritizing self-care and personal growth.",
        ],
        author: '@visionary',
        daysLeft: '2',
        totalClicks: 178,
    },
];
