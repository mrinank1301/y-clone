import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from 'lucide-react'

export function StudySection() {
  const options = [
    "School students",
    "Graduates",
    "Professional",
    "Parent"
  ]

  return (
    <section className="bg-yellow-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Study Abroad"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute -right-2 top-1/2 w-4 h-16 bg-red-500 -translate-y-1/2" />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Study</h2>
            <p className="text-xl">Discover your career opportunities</p>
            
            <div className="grid grid-cols-2 gap-4">
              {options.map((option) => (
                <Link
                  key={option}
                  href="#"
                  className="border-2 border-black rounded px-4 py-2 text-center hover:bg-black/5 transition"
                >
                  {option}
                </Link>
              ))}
            </div>
            
            <Link
              href="#"
              className="flex items-center justify-between border-2 border-black rounded px-4 py-2 hover:bg-black/5 transition"
            >
              Next
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

