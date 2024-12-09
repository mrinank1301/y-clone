import Link from "next/link"

export function CalculatorInfo() {
  const benefits = [
    "Check your eligibility for FREE.",
    "Get your score instantly.",
    "Easy steps to follow.",
    "Expert tips to improve your score.",
    "Immediate assistance by Y-Axis professionals."
  ]

  const calculators = [
    { name: "UK Immigration Points Calculator", href: "/calculator/uk" },
    { name: "Australia Immigration Points Calculator", href: "/calculator/australia" },
    { name: "Canada Immigration Points Calculator", href: "/calculator/canada" },
    { name: "Germany Immigration Points Calculator", href: "/calculator/germany" },
    { name: "Canada SINP Calculator", href: "/calculator/canada-sinp" },
    { name: "Quebec Immigration Points Calculator", href: "/calculator/quebec" }
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Why opt Y-Axis Eligibility Calculator?</h2>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Immigration Points calculator</h2>
            <p className="mb-4">Through the Y-Axis Immigration Points Calculator, you can check your eligibility through</p>
            <ul className="space-y-2">
              {calculators.map((calculator, index) => (
                <li key={index}>
                  <Link href={calculator.href} className="text-blue-600 hover:underline">
                    {calculator.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

