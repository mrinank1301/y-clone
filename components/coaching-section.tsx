import Image from "next/image"
import Link from "next/link"

export function CoachingSection() {
  const exams = [
    "IELTS", "IELTS-SPRINT", "PTE-Academic",
    "PTE-Core", "GMAT", "GRE",
    "TOEFL", "SAT", "German",
    "CELPIP", "OET", "Register for Free Demo"
  ]

  return (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Coaching Services"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute -right-2 top-1/2 w-4 h-16 bg-red-500 -translate-y-1/2" />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Coaching</h2>
            <p className="text-xl">Ace your scores with our expert coaching services</p>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {exams.map((exam) => (
                <Link
                  key={exam}
                  href="#"
                  className="border border-white/30 rounded px-4 py-2 text-center hover:bg-white/10 transition"
                >
                  {exam}
                </Link>
              ))}
            </div>
            
            <Link
              href="#"
              className="inline-block border border-white/30 rounded px-6 py-2 hover:bg-white/10 transition"
            >
              Coaching Demo Videos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

