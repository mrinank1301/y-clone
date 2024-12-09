import Image from "next/image"
import Link from "next/link"

export function WorkSection() {
  const services = [
    "Search Overseas Jobs",
    "Post Resume",
    "Job Search Services",
    "Resume Writing",
    "LinkedIn Optimisation",
    "Resume Marketing",
    "Post a Job",
    "Why choose Y-Axis?"
  ]

  return (
    <section className="bg-teal-500 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Work</h2>
            <p className="text-xl">Excited to work overseas? Start here...</p>
            
            <div className="grid grid-cols-2 gap-4">
              {services.map((service) => (
                <Link
                  key={service}
                  href="#"
                  className="border border-white/30 rounded px-4 py-2 text-center hover:bg-white/10 transition"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Work Abroad"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute -left-2 top-1/2 w-4 h-16 bg-red-500 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  )
}

