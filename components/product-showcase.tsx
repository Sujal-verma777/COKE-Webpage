"use client"

export default function ProductShowcase({ onSelectProduct }: { onSelectProduct: (index: number) => void }) {
  const products = [
    {
      name: "Coca-Cola Classic",
      description: "The original taste that started it all",
      image: "/coca-cola-classic-bottle.jpg",
      badge: "Best Seller",
    },
    {
      name: "Coca-Cola Zero Sugar",
      description: "Same great taste, zero sugar",
      image: "/coca-cola-zero-sugar-bottle.jpg",
      badge: "Popular",
    },
    {
      name: "Coca-Cola Cherry",
      description: "Bold cherry flavor with classic Coke",
      image: "/coca-cola-cherry-bottle.jpg",
      badge: "New",
    },
    {
      name: "Coca-Cola Vanilla",
      description: "Smooth vanilla twist on a classic",
      image: "/coca-cola-vanilla-bottle.jpg",
      badge: "Premium",
    },
  ]

  const handleViewDetails = (index: number) => {
    onSelectProduct(index)
    setTimeout(() => {
      const element = document.getElementById("product-details")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Product Range</h2>
          <p className="text-xl text-gray-600">Discover the perfect Coca-Cola for every moment</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden h-64 bg-gray-100">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.badge}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <button
                  onClick={() => handleViewDetails(index)}
                  className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
