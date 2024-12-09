import { Users } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { WhatsAppButton } from './whatsapp-button'

export function HeroSection() {
  const actionButtons = [
    { title: "Study", href: "/study", bgColor: "bg-yellow-500" },
    { title: "Migrate", href: "/migrate", bgColor: "bg-purple-600" },
    { title: "Work", href: "/work", bgColor: "bg-teal-500" },
    { title: "Visit", href: "/visit", bgColor: "bg-green-500" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Image with chat overlay */}
        <div className="relative">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Immigration Consultant"
            width={800}
            height={600}
            className="rounded-lg w-full"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6 rounded-b-lg">
            <div className="text-white">
              <h2 className="text-xl sm:text-2xl mb-2">Have Questions? Chat with us</h2>
              <div className="flex items-center gap-2">
                <WhatsAppButton phoneNumber="880221999" />
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Action buttons */}
        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl font-bold">What can we do for you today?</h1>
          <div className="grid grid-cols-2 gap-4">
            {actionButtons.map((button) => (
              <Link
                key={button.title}
                href={button.href}
                className={`${button.bgColor} text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg text-center text-sm sm:text-lg font-semibold hover:opacity-90 transition-opacity`}
              >
                {button.title}
              </Link>
            ))}
          </div>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Don&apos;t know what to do?</h3>
                <Link
                  href="/chat"
                  className="text-red-500 hover:text-red-600 font-medium"
                >
                  Chat with Y-Axis Intelligence
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

