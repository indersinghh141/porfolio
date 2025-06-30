import { Camera, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 text-white py-16 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Camera className="h-9 w-9 text-pink-400" />
            <span className="text-3xl font-bold tracking-tight text-white drop-shadow">Inder Singh</span>
          </div>
          <p className="text-gray-300 mb-8 text-lg font-light">Professional Photography • Capturing Life's Beautiful Moments</p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mb-4">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-pink-400 fill-current" />
            <span>© 2024 Inder Singh Photography. All rights reserved.</span>
          </div>
          <div className="flex justify-center mt-6 space-x-4">
            {/* Example social icons or links can go here */}
            {/* <a href="#" className="hover:text-pink-400 transition-colors">Instagram</a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
