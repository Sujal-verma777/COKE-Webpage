export default function FeaturesSection() {
  const features = [
    {
      icon: "🌍",
      title: "Global Favorite",
      description: "Enjoyed in over 200 countries worldwide",
    },
    {
      icon: "✨",
      title: "Premium Quality",
      description: "Crafted with the finest ingredients",
    },
    {
      icon: "⚡",
      title: "Instant Refresh",
      description: "Perfect for any moment of the day",
    },
    {
      icon: "🎯",
      title: "Iconic Taste",
      description: "The unmistakable flavor you love",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Coca-Cola?</h2>
          <p className="text-xl text-gray-600">Discover what makes us the world's favorite beverage</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
