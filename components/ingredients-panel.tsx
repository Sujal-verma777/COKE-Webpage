"use client"

import { useState } from "react"
import { X } from "lucide-react"

const ingredients = [
  { name: "Carbonated Water", percentage: 90, description: "Purified water infused with CO2 for that signature fizz" },
  { name: "High Fructose Corn Syrup", percentage: 5, description: "Natural sweetener providing the perfect taste" },
  { name: "Caramel Color", percentage: 2, description: "Gives Coke its iconic dark brown color" },
  { name: "Phosphoric Acid", percentage: 1.5, description: "Adds tartness and acts as a preservative" },
  { name: "Natural Flavors", percentage: 1, description: "Secret blend of spices and extracts" },
  { name: "Caffeine", percentage: 0.5, description: "Provides a gentle energy boost" },
]

export default function IngredientsPanel({ onClose }: { onClose: () => void }) {
  const [selectedIngredient, setSelectedIngredient] = useState(0)

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-red-600/30">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-red-600 to-red-700 p-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">What's Inside</h2>
          <button onClick={onClose} className="p-2 hover:bg-red-700 rounded-lg transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Ingredient List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {ingredients.map((ingredient, index) => (
              <button
                key={index}
                onClick={() => setSelectedIngredient(index)}
                className={`p-4 rounded-lg text-left transition-all ${
                  selectedIngredient === index
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/50"
                    : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                }`}
              >
                <div className="font-semibold mb-2">{ingredient.name}</div>
                <div className="text-sm opacity-75">{ingredient.percentage}%</div>
              </button>
            ))}
          </div>

          {/* Selected Ingredient Details */}
          <div className="bg-slate-800 rounded-lg p-6 border border-red-600/20">
            <h3 className="text-2xl font-bold text-red-600 mb-3">{ingredients[selectedIngredient].name}</h3>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">Concentration</span>
                <span className="text-red-600 font-semibold">{ingredients[selectedIngredient].percentage}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-red-600 to-red-500 h-2 rounded-full transition-all"
                  style={{ width: `${ingredients[selectedIngredient].percentage * 10}%` }}
                />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">{ingredients[selectedIngredient].description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
