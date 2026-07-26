export default function HistoryAndIngredients() {
  const ingredients = [
    { name: "Carbonated Water", percentage: "90%" },
    { name: "High Fructose Corn Syrup", percentage: "5%" },
    { name: "Caramel Color", percentage: "2%" },
    { name: "Phosphoric Acid", percentage: "1.5%" },
    { name: "Natural Flavors", percentage: "1%" },
    { name: "Caffeine", percentage: "0.5%" },
  ]

  return (
    <section id="history" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* History */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">A Century of Refreshment</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Coca-Cola was invented in 1886 by pharmacist John Stith Pemberton in Atlanta, Georgia. What started as a
                medicinal tonic has become the world's most popular soft drink, enjoyed by millions every single day.
              </p>
              <p>
                Over 138 years, Coca-Cola has maintained its commitment to quality, innovation, and bringing people
                together. From the iconic contoured bottle to the unforgettable taste, every element has been perfected
                through generations.
              </p>
              <p>
                Today, Coca-Cola is available in over 200 countries and territories, with a diverse portfolio of
                beverages to suit every taste and lifestyle. Our mission remains unchanged: to refresh the world and
                inspire moments of optimism and happiness.
              </p>
            </div>
          </div>

          {/* Ingredients */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Premium Ingredients</h3>
            <p className="text-gray-600">Coca-Cola is crafted with carefully selected ingredients:</p>
            <div className="space-y-3">
              {ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-gray-200 hover:border-red-600 transition"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">{ingredient.name}</span>
                    <span className="text-red-600 font-bold">{ingredient.percentage}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full transition-all"
                      style={{ width: ingredient.percentage }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
