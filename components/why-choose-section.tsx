import { Building2, Users, Trophy } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function WhyChooseSection() {
  const stats = [
    {
      icon: Users,
      title: "1 Million",
      subtitle: "Successful Applicant"
    },
    {
      icon: Users,
      title: "Counselled 10 Million+",
      subtitle: ""
    },
    {
      icon: Trophy,
      title: "Experts Since",
      subtitle: "1999"
    },
    {
      icon: Building2,
      title: "Offices",
      subtitle: "50+"
    }
  ]

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">Why choose Y-Axis?</h2>
          <Link
            href="#"
            className="inline-block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
          >
            Read More
          </Link>
          
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <stat.icon className="h-12 w-12 mb-2 text-red-500" />
                <div className="font-semibold">{stat.title}</div>
                <div className="text-sm text-gray-600">{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative h-[400px] md:h-[600px]">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Why Choose Y-Axis"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute -left-2 top-1/2 w-4 h-16 bg-red-500 -translate-y-1/2" />
        </div>
      </div>
    </section>
  )
}

