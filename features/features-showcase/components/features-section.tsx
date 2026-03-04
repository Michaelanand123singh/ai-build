import { FeatureBentoGrid } from './feature-bento-grid'

export function FeaturesSection() {
    return (
        <section className="py-24 md:py-32">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center md:text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Features</span>
                    <h2 className="mt-4 font-bold text-text-primary text-h2">
                        Everything you need to launch.
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-text-secondary">
                        Info Lab isn&apos;t just a landing page generator. It&apos;s a full-stack engine
                        that provisions your entire infrastructure and handles the complex
                        logic automatically.
                    </p>
                </div>

                <FeatureBentoGrid />
            </div>
        </section>
    )
}
