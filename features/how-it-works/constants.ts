import { MessageSquare, Zap, Globe } from 'lucide-react'
import { Step } from './types'

export const HOW_IT_WORKS_STEPS: Step[] = [
    {
        id: 0,
        title: 'Describe your business',
        description: 'Just tell the AI about your business in plain English. No forms, no templates, no technical decisions.',
        tag: 'Natural language conversation',
        icon: MessageSquare,
    },
    {
        id: 1,
        title: 'AI builds everything',
        description: 'In under 10 minutes, Info Lab generates your complete site — frontend, backend, database, payments, and custom admin panel.',
        tag: 'Typically 8–12 minutes',
        icon: Zap,
    },
    {
        id: 2,
        title: 'Go live. Stay in control.',
        description: 'Your site deploys to your custom domain with SSL. Manage everything from your admin panel. Update anything just by chatting with the AI — anytime, forever.',
        tag: 'Live on your domain',
        icon: Globe,
    },
]
