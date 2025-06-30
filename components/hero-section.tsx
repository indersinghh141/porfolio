import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pastel-pink via-pastel-blue to-pastel-green"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fadeIn">
            <h1 className="text-5xl lg:text-7xl font-light text-gray-800 mb-6">
              Capturing
              <span className="block font-semibold text-pink-400">Moments</span>
              <span className="block font-light">That Matter</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional photographer specializing in portraits, weddings, and lifestyle photography. Creating
              timeless memories with an artistic touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full">
                View Portfolio
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-pink-400 text-pink-400 hover:bg-pink-50 px-8 py-3 rounded-full bg-transparent"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Professional photographer at work"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-pastel-yellow rounded-full opacity-70"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-pastel-purple rounded-full opacity-70"></div>
          </div>
        </div>

        <div className="text-center mt-16">
          <ArrowDown className="h-6 w-6 text-gray-400 mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  )
}
