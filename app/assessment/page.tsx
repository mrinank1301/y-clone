import { Layout } from "../components/layout"
import { ProgressSteps } from "@/components/progress-steps"
import { ScoreDisplay } from "@/components/score-display"
import { CountrySelector } from "@/components/country-selector"
import { FAQSection } from "@/components/faq-section"
import { CalculatorInfo } from "@/components/calculator-info"
import { Button } from "@/components/ui/button"
import { Users } from 'lucide-react'

export default function AssessmentPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Hi,</h1>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Welcome to Your Free and Quick Wizard</h2>
            <p className="text-lg sm:text-xl">Check your Eligibility</p>
          </div>

          <ProgressSteps currentStep={1} totalSteps={8} />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">You Want to Get Yourself Evaluated for</h3>
                <Button variant="default" size="lg" className="bg-black text-white hover:bg-black/90 w-full sm:w-auto">
                  Immigration
                </Button>
              </div>

              <CountrySelector selectedCountries={[]} onSelect={() => {}} />

              <Button className="w-full sm:w-auto">
                Next
              </Button>
            </div>

            <div className="space-y-8">
              <ScoreDisplay score={0} />
              
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <Users className="h-6 w-6" />
                <div>
                  <div className="font-medium">Talk to an Expert</div>
                  <div>Call: +91-7670800000</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CalculatorInfo />
        <FAQSection />
      </div>
    </Layout>
  )
}

