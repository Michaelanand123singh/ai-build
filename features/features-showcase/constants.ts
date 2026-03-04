import { Sparkles, Globe, Code, Brain, Server, LayoutDashboard, CreditCard, Lock } from 'lucide-react'
import { ProblemCard, Feature } from './types'

export const PROBLEM_TOP_LABEL = 'THE PAINFUL TRUTH'
export const PROBLEM_HEADLINE = 'Every other tool stops here.'

export const PROBLEM_CARDS: ProblemCard[] = [
    {
        id: 'ai-code-generators',
        title: 'AI Code Generators',
        icon: Sparkles,
        promise: 'Your beautiful AI-generated site is ready!',
        reality: [
            'Connect your Supabase account',
            'Configure Row Level Security policies',
            'Debug this Netlify build error',
            'Set up your own email service',
        ],
        bottomText: 'The magic evaporates.',
    },
    {
        id: 'website-builders',
        title: 'Traditional Website Builders',
        icon: Globe,
        promise: 'Your professional website is live!',
        reality: [
            'No real backend or database',
            'No custom domain without paying more',
            'Can\'t add features without their marketplace',
            'Locked in. Can\'t export. Can\'t hire a dev.',
        ],
        bottomText: 'Not a real website.',
    },
    {
        id: 'hire-developer',
        title: 'Hire a Developer',
        icon: Code,
        promise: 'We\'ll build exactly what you need!',
        reality: [
            '$8,000 – $25,000 quote',
            '12–16 week timeline',
            'You still can\'t update it yourself after',
            'Need them again for every small change',
        ],
        bottomText: 'Not realistic for most businesses.',
    },
]

export const PROBLEM_TRANSITION_UP = 'There is a better way.'
export const PROBLEM_TRANSITION_DOWN = 'Info Lab is the only platform that takes you from idea to live website without a single configuration screen.'

export const FEATURES: Feature[] = [
    {
        id: 'intelligence',
        icon: Brain,
        label: 'INTELLIGENCE',
        title: 'AI that understands your business, not just your prompt',
        description: 'Most AI tools return the most statistically likely website. Info Lab learns your business type, brand voice, customer language, and preferences — then generates a site that actually fits. It remembers everything across every session, forever.',
        size: 'large',
        visualType: 'chat',
    },
    {
        id: 'infrastructure',
        icon: Server,
        label: 'INFRASTRUCTURE',
        title: 'Real AWS infrastructure. Zero configuration screens.',
        description: 'Every site gets its own PostgreSQL database, Redis cache, S3 file storage, CDN, email system, and SSL certificate — all provisioned automatically. You never see a configuration screen. You never enter an API key. It just works.',
        size: 'large',
        visualType: 'infra',
    },
    {
        id: 'admin-panel',
        icon: LayoutDashboard,
        title: 'Custom admin panel',
        description: 'Auto-generated for your site. Manage orders, bookings, blog posts, or inventory — no code required.',
        size: 'small',
    },
    {
        id: 'payments',
        icon: CreditCard,
        title: 'Payments built in',
        description: 'Stripe integrated automatically when your site needs it. Online orders, subscriptions, one-time payments.',
        size: 'small',
    },
    {
        id: 'domain',
        icon: Globe,
        title: 'Custom domain in 5 minutes',
        description: 'Connect your domain. SSL provisioned automatically. Goes live globally in under 5 minutes.',
        size: 'small',
    },
    {
        id: 'ownership',
        icon: Lock,
        title: 'You own everything',
        description: 'Real Next.js code on your own AWS infrastructure. Export anytime. No vendor lock-in. Ever.',
        size: 'small',
    },
]
