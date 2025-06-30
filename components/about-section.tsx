import Image from "next/image"
import { Award, Camera, Heart, Users } from "lucide-react"

const stats = [
  { icon: Camera, value: "500+", label: "Photo Sessions" },
  { icon: Heart, value: "200+", label: "Happy Couples" },
  { icon: Users, value: "1000+", label: "Portraits Taken" },
  { icon: Award, value: "15+", label: "Awards Won" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pastel-peach via-pastel-yellow to-pastel-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Inder Singh - Professional Photographer"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
              <Camera className="h-12 w-12 text-pink-400" />
            </div>
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-6">
              About <span className="font-semibold text-pink-400">Inder</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                With over 8 years of experience in photography, I specialize in capturing the authentic emotions and
                genuine moments that make each story unique. My passion lies in creating timeless images that you'll
                treasure for generations.
              </p>
              <p>
                Based in San Francisco, I work with couples, families, and individuals who value artistry and
                authenticity. My approach is relaxed and natural, allowing your true personality to shine through every
                photograph.
              </p>
              <p>
                When I'm not behind the camera, you can find me exploring new hiking trails, experimenting with film
                photography, or planning my next travel adventure.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md mb-3">
                    <stat.icon className="h-6 w-6 text-pink-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
