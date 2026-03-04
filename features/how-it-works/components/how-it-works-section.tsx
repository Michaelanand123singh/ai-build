'use client'

import * as React from 'react'
import { HOW_IT_WORKS_STEPS } from '../constants'
import { StepList } from './step-list'
import { StepDemoPreview } from './step-demo-preview'
import { useStepScroll } from '../hooks/use-step-scroll'
import { StepId } from '../types'

export function HowItWorksSection() {
    const { activeStep, stepRefs, setActiveStep } = useStepScroll(HOW_IT_WORKS_STEPS.length)

    const handleStepClick = (index: number) => {
        setActiveStep(index)
        // Optional: smooth scroll to the target step ref
        stepRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return (
        <section className="relative py-24 md:py-32">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">

                    {/* Left Column: Step List */}
                    <div className="relative">
                        {/* These divs act as intersection targets */}
                        <div className="flex flex-col gap-0 leading-none">
                            {HOW_IT_WORKS_STEPS.map((step, index) => (
                                <div
                                    key={`trigger-${step.id}`}
                                    ref={(el) => { stepRefs.current[index] = el }}
                                    className="absolute h-1 w-1 opacity-0 pointer-events-none"
                                    style={{ top: `${(index + 0.5) * 33}%` }} // Approximate distribution
                                />
                            ))}
                        </div>

                        <div className="lg:sticky lg:top-32 lg:max-h-screen">
                            <div className="mb-12">
                                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Steps</span>
                                <h2 className="mt-4 font-bold text-text-primary text-h2">How Info Lab launches you</h2>
                            </div>

                            <StepList
                                activeStep={activeStep}
                                onStepClick={handleStepClick}
                            />
                        </div>
                    </div>

                    {/* Right Column: Demo Preview (Desktop) */}
                    <div className="hidden lg:block lg:sticky lg:top-32">
                        <StepDemoPreview activeStep={activeStep as StepId} />
                    </div>

                    {/* Mobile Fallback: Demo Preview below active step is handled by CSS or separate render */}
                    {/* For simplicity and strict adherence, I'll render the preview here for mobile in a separate block maybe */}
                    <div className="block lg:hidden mt-8">
                        <StepDemoPreview activeStep={activeStep as StepId} />
                    </div>

                </div>
            </div>
        </section>
    )
}
