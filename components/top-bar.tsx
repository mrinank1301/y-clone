import { Phone, PhoneIcon as WhatsApp } from 'lucide-react'
import Link from "next/link"

export function TopBar() {
  return (
    <div className="bg-white py-2 border-b">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-4 mb-2 sm:mb-0">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm">7670 800 000</span>
          </div>
          <div className="flex items-center gap-2">
            <WhatsApp className="h-4 w-4 text-green-500" />
            <span className="text-sm">+91 880 221 9999</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/signup" className="text-sm hover:text-primary">
            Signup
          </Link>
          <Link href="/login" className="text-sm hover:text-primary">
            Login
          </Link>
          <Link href="/contact" className="text-sm hover:text-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

