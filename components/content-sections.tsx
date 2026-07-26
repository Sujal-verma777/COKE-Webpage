"use client"

export default function ContentSections() {
  return (
    <div className="w-full bg-background">
      {/* History Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 text-balance">
            A Century of <span className="text-red-600">Refreshment</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Since 1886, Coca-Cola has been the world's most popular soft drink. What started as a pharmacist's curiosity
            in Atlanta has become a global phenomenon, enjoyed by millions every single day.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            The iconic red bottle, the secret formula, and the unmistakable taste have made Coke more than just a
            beverage—it's a cultural icon that brings people together.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen flex items-center justify-center bg-slate-950 px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 text-center text-balance">
            Why People Love <span className="text-red-600">Coke</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Iconic Taste",
                description:
                  "The perfect balance of sweetness, carbonation, and that signature Coke flavor that's been perfected over generations.",
                icon: "🥤",
              },
              {
                title: "Refreshing Moments",
                description:
                  "Whether it's a hot summer day or a celebration with friends, Coke brings refreshment to every moment.",
                icon: "❄️",
              },
              {
                title: "Global Connection",
                description: "Available in over 200 countries, Coke connects people across cultures and continents.",
                icon: "🌍",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-xl p-8 border border-red-600/20 hover:border-red-600/50 transition-all hover:shadow-lg hover:shadow-red-600/20"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Varieties Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900 px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 text-center text-balance">
            Find Your <span className="text-red-600">Flavor</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Coca-Cola", color: "from-red-700 to-red-900" },
              { name: "Diet Coke", color: "from-slate-700 to-slate-900" },
              { name: "Coke Zero", color: "from-gray-800 to-black" },
              { name: "Cherry Coke", color: "from-red-600 to-pink-800" },
            ].map((variety, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${variety.color} rounded-xl p-8 text-center hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-6xl mb-4">🍾</div>
                <h3 className="text-2xl font-bold text-white">{variety.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex items-center justify-center bg-slate-900 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 text-balance">
            Ready to Experience the <span className="text-red-600">Taste</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join billions of people worldwide who choose Coca-Cola for that perfect moment of refreshment.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-lg text-lg transition-colors shadow-lg shadow-red-600/50">
            Find a Store Near You
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-red-600/20 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">About</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-red-600 transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-red-600 transition-colors">
                    All Drinks
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition-colors">
                    Sustainability
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-red-600 transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-red-600 transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Coca-Cola. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
