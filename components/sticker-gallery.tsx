"use client"

import { useState } from "react"
import Image from "next/image"

export default function StickerGallery() {
  const [selectedSticker, setSelectedSticker] = useState<number | null>(null)
  const [downloadedStickers, setDownloadedStickers] = useState<number[]>([])

  const stickers = [
    {
      id: 1,
      name: "Energetic Spark",
      character: "Anime girl with red hair and bright smile",
      description: "Celebrate Life",
      color: "bg-red-100",
      image: "/anime-girl-with-red-hair-holding-coca-cola-bottle-.jpg",
    },
    {
      id: 2,
      name: "Cool Vibes",
      character: "Anime boy with blue eyes",
      description: "Ice Cold",
      color: "bg-blue-100",
      image: "/anime-boy-with-blue-eyes-holding-coca-cola-bottle-.jpg",
    },
    {
      id: 3,
      name: "Joyful Spirit",
      character: "Anime girl with pink hair",
      description: "Pure Joy",
      color: "bg-pink-100",
      image: "/anime-girl-with-pink-hair-holding-coca-cola-bottle.jpg",
    },
    {
      id: 4,
      name: "Refreshing Glow",
      character: "Anime character with golden hair",
      description: "Refreshing",
      color: "bg-yellow-100",
      image: "/anime-character-with-golden-hair-holding-coca-cola.jpg",
    },
    {
      id: 5,
      name: "Dynamic Energy",
      character: "Anime boy with orange hair",
      description: "Energy Boost",
      color: "bg-orange-100",
      image: "/anime-boy-with-orange-hair-holding-coca-cola-bottl.jpg",
    },
    {
      id: 6,
      name: "Stellar Moment",
      character: "Anime girl with purple hair",
      description: "Iconic Taste",
      color: "bg-purple-100",
      image: "/anime-girl-with-purple-hair-holding-coca-cola-bott.jpg",
    },
    {
      id: 7,
      name: "Sunshine Buddy",
      character: "Cheerful anime boy with blonde spiky hair",
      description: "Spread Happiness",
      color: "bg-amber-100",
      image: "/anime-boy-blonde-spiky-hair-coca-cola.jpg",
    },
    {
      id: 8,
      name: "Cool Cat",
      character: "Anime girl with cat ears and teal hair",
      description: "Chill & Fresh",
      color: "bg-cyan-100",
      image: "/anime-girl-cat-ears-teal-hair-coca-cola.jpg",
    },
    {
      id: 9,
      name: "Rebel Spirit",
      character: "Anime boy with black and red hair",
      description: "Bold & Daring",
      color: "bg-slate-100",
      image: "/anime-boy-black-red-hair-coca-cola.jpg",
    },
    {
      id: 10,
      name: "Dreamy Vibes",
      character: "Anime girl with silver hair and stars",
      description: "Make a Wish",
      color: "bg-indigo-100",
      image: "/anime-girl-silver-hair-stars-coca-cola.jpg",
    },
    {
      id: 11,
      name: "Party Animal",
      character: "Anime character with rainbow gradient hair",
      description: "Let's Celebrate",
      color: "bg-fuchsia-100",
      image: "/anime-rainbow-hair-party-coca-cola.jpg",
    },
    {
      id: 12,
      name: "Chill Vibes",
      character: "Anime boy with mint green hair and cool attitude",
      description: "Stay Cool",
      color: "bg-emerald-100",
      image: "/anime-boy-mint-green-hair-coca-cola.jpg",
    },
  ]

  const handleDownload = (stickerId: number) => {
    // Create a canvas element to draw the sticker
    const canvas = document.createElement("canvas")
    canvas.width = 300
    canvas.height = 300
    const ctx = canvas.getContext("2d")

    if (ctx) {
      // Get sticker data
      const sticker = stickers.find((s) => s.id === stickerId)
      if (!sticker) return

      // Set background color based on sticker color
      const colorMap: { [key: string]: string } = {
        "bg-red-100": "#fee2e2",
        "bg-yellow-100": "#fef3c7",
        "bg-blue-100": "#dbeafe",
        "bg-purple-100": "#f3e8ff",
        "bg-pink-100": "#fce7f3",
        "bg-orange-100": "#ffedd5",
        "bg-amber-100": "#fff8d7",
        "bg-cyan-100": "#e0f7fa",
        "bg-slate-100": "#f4f4f4",
        "bg-indigo-100": "#e8f4ff",
        "bg-fuchsia-100": "#f8d7da",
        "bg-emerald-100": "#d1f9d1",
      }

      ctx.fillStyle = colorMap[sticker.color] || "#fee2e2"
      ctx.fillRect(0, 0, 300, 300)

      // Draw border
      ctx.strokeStyle = "#dc2626"
      ctx.lineWidth = 4
      ctx.strokeRect(0, 0, 300, 300)

      // Draw text
      ctx.font = "bold 20px Arial"
      ctx.fillStyle = "#111827"
      ctx.textAlign = "center"
      ctx.fillText(sticker.name, 150, 30)

      ctx.font = "16px Arial"
      ctx.fillStyle = "#374151"
      ctx.fillText(sticker.description, 150, 280)

      // Download the canvas as image
      const link = document.createElement("a")
      link.href = canvas.toDataURL("image/png")
      link.download = `coca-cola-sticker-${stickerId}.png`
      link.click()

      // Mark as downloaded
      setDownloadedStickers([...downloadedStickers, stickerId])
    }
  }

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Coca-Cola Anime Stickers</h2>
          <p className="text-xl text-gray-600">Collect unique anime characters with Coca-Cola bottles</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stickers.map((sticker) => (
            <div
              key={sticker.id}
              onClick={() => setSelectedSticker(selectedSticker === sticker.id ? null : sticker.id)}
              className={`${sticker.color} p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-red-600 ${
                selectedSticker === sticker.id ? "ring-4 ring-red-600 scale-105" : ""
              }`}
            >
              <div className="relative w-full h-48 mb-4 bg-white rounded-lg overflow-hidden">
                <Image src={sticker.image || "/placeholder.svg"} alt={sticker.name} fill className="object-cover" />
              </div>
              <p className="text-center text-lg font-bold text-gray-900 mb-1">{sticker.name}</p>
              <p className="text-center text-sm text-gray-600 mb-2">{sticker.character}</p>
              <p className="text-center text-sm font-semibold text-red-600 mb-4">{sticker.description}</p>
              <div className="text-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDownload(sticker.id)
                  }}
                  className={`px-4 py-2 rounded-lg transition text-sm font-semibold ${
                    downloadedStickers.includes(sticker.id)
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-red-600 text-white hover:bg-red-700"
                  }`}
                >
                  {downloadedStickers.includes(sticker.id) ? "Downloaded ✓" : "Download"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedSticker && (
          <div className="mt-12 bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl text-center border-2 border-red-200">
            <p className="text-gray-700 text-lg">
              {stickers.find((s) => s.id === selectedSticker)?.name} selected! Share it with your friends and spread the
              Coca-Cola love.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
