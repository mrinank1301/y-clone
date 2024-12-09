import { Button } from "@/components/ui/button"

interface CountrySelectorProps {
  selectedCountries: string[]
  onSelect: (country: string) => void
}

export function CountrySelector({ selectedCountries, onSelect }: CountrySelectorProps) {
  const countries = [
    "UK",
    "Canada",
    "Germany",
    "Australia",
    "Australia Partner",
    "Saskatchewan",
    "Quebec"
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Your Country Preference</h3>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {countries.map((country) => (
          <Button
            key={country}
            variant={selectedCountries.includes(country) ? "default" : "outline"}
            onClick={() => onSelect(country)}
            className="rounded-full text-xs sm:text-sm py-1 px-3 sm:px-4"
          >
            {country}
          </Button>
        ))}
      </div>
    </div>
  )
}

