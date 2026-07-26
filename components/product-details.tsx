export default function ProductDetails({ selectedProductIndex }: { selectedProductIndex: number | null }) {
  const productDetails = [
    {
      name: "Coca-Cola Classic",
      description: "The original and iconic taste that has delighted consumers for over 130 years.",
      details: [
        "Refreshing carbonated beverage",
        "Perfect balance of sweetness and fizz",
        "Available in multiple sizes",
        "Best served ice cold",
      ],
      benefits: ["Instant refreshment", "Great taste", "Perfect for any occasion"],
    },
    {
      name: "Coca-Cola Zero Sugar",
      description: "All the taste of Coca-Cola Classic with zero sugar. Enjoy guilt-free refreshment.",
      details: [
        "Zero sugar formula",
        "Same great Coca-Cola taste",
        "Fewer calories",
        "Sweetened with aspartame and acesulfame potassium",
      ],
      benefits: ["Zero sugar", "Great taste", "Healthier choice"],
    },
    {
      name: "Coca-Cola Cherry",
      description: "A bold twist on the classic with smooth cherry flavor blended perfectly with Coca-Cola.",
      details: [
        "Cherry flavored carbonated beverage",
        "Smooth and refreshing",
        "Unique taste experience",
        "Perfect for cherry lovers",
      ],
      benefits: ["Unique flavor", "Refreshing", "Limited edition appeal"],
    },
    {
      name: "Coca-Cola Vanilla",
      description: "Smooth vanilla notes combined with the classic Coca-Cola taste for a premium experience.",
      details: [
        "Vanilla flavored carbonated beverage",
        "Smooth and creamy taste",
        "Premium quality ingredients",
        "Sophisticated flavor profile",
      ],
      benefits: ["Premium taste", "Smooth flavor", "Sophisticated choice"],
    },
  ]

  const productsToDisplay = selectedProductIndex !== null ? [productDetails[selectedProductIndex]] : productDetails

  return (
    <section id="product-details" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Product Details</h2>
          <p className="text-xl text-gray-600">Discover what makes each Coca-Cola special</p>
        </div>

        <div className="space-y-12">
          {productsToDisplay.map((product, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border-2 border-red-600 hover:shadow-xl transition"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h3>
              <p className="text-lg text-gray-600 mb-6">{product.description}</p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Details */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {product.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-red-600 font-bold mt-1">✓</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Benefits</h4>
                  <div className="space-y-3">
                    {product.benefits.map((benefit, idx) => (
                      <div key={idx} className="bg-red-50 p-3 rounded-lg border border-red-200">
                        <p className="text-gray-900 font-semibold">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
