"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const categories = ["All", "Portraits", "Weddings", "Lifestyle", "Nature"]

const portfolioItems = [
  { id: 1, category: "Portraits", title: "Urban Portrait", image: "/placeholder.svg?height=400&width=300" },
  { id: 2, category: "Weddings", title: "Garden Wedding", image: "/placeholder.svg?height=400&width=300" },
  { id: 3, category: "Lifestyle", title: "Coffee Moments", image: "/placeholder.svg?height=400&width=300" },
  { id: 4, category: "Nature", title: "Golden Hour", image: "/placeholder.svg?height=400&width=300" },
  { id: 5, category: "Portraits", title: "Studio Session", image: "/placeholder.svg?height=400&width=300" },
  { id: 6, category: "Weddings", title: "Beach Ceremony", image: "/placeholder.svg?height=400&width=300" },
  { id: 7, category: "Lifestyle", title: "Family Time", image: "/placeholder.svg?height=400&width=300" },
  { id: 8, category: "Nature", title: "Mountain Vista", image: "/placeholder.svg?height=400&width=300" },
  { id: 9, category: "Portraits", title: "Creative Portrait", image: "/placeholder.svg?height=400&width=300" },
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-6">
            My <span className="font-semibold text-pink-400">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my favorite captures, each telling a unique story through light and emotion.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-pink-400 hover:bg-pink-500 text-white"
                  : "border-pink-400 text-pink-400 hover:bg-pink-50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
