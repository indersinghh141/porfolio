import { Camera, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Camera className="h-8 w-8 text-pink-400" />
            <span className="text-2xl font-semibold">Sarah Chen</span>
          </div>
          <p className="text-gray-400 mb-6">Professional Photography • Capturing Life's Beautiful Moments</p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-pink-400 fill-current" />
            <span>© 2024 Sarah Chen Photography. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
