"use client"

export default function HeroSection({ onExploreClick }: { onExploreClick: () => void }) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
              ✨ Iconic Since 1886
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Taste the <span className="text-red-600">Refresh</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience the world's most beloved beverage. Crafted with premium ingredients and over a century of
              tradition.
            </p>
            <div className="flex gap-4 pt-4">
              <button
                onClick={onExploreClick}
                className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition font-semibold"
              >
                Explore Products
              </button>
              <button
                onClick={() => document.getElementById("history")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-full hover:bg-red-50 transition font-semibold"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full">
            <img
              src="/coca-cola-bottle-professional-product-shot.jpg"
              alt="Coca-Cola Bottle"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <p className="text-sm font-semibold text-gray-900">Refreshing Since 1886</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
