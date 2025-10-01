"use client"

import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useRef, useEffect } from "react"

const PreskumajProdukty = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Pridanie smooth scroll efektu pre dotykové ťahanie na mobile
  useEffect(() => {
    const slider = scrollRef.current
    if (!slider) return

    let isDown = false
    let startX: number
    let scrollLeft: number

    const start = (e: MouseEvent | TouchEvent) => {
      isDown = true
      slider.classList.add("active")
      const pageX = "touches" in e ? e.touches[0].pageX : e.pageX
      startX = pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    }

    const end = () => {
      isDown = false
      slider.classList.remove("active")
    }

    const move = (e: MouseEvent | TouchEvent) => {
      if (!isDown) return
      e.preventDefault()
      const pageX = "touches" in e ? e.touches[0].pageX : e.pageX
      const x = pageX - slider.offsetLeft
      const walk = (x - startX) * 2
      slider.scrollLeft = scrollLeft - walk
    }

    slider.addEventListener("mousedown", start)
    slider.addEventListener("touchstart", start)
    slider.addEventListener("mousemove", move)
    slider.addEventListener("touchmove", move)
    slider.addEventListener("mouseleave", end)
    slider.addEventListener("mouseup", end)
    slider.addEventListener("touchend", end)

    return () => {
      slider.removeEventListener("mousedown", start)
      slider.removeEventListener("touchstart", start)
      slider.removeEventListener("mousemove", move)
      slider.removeEventListener("touchmove", move)
      slider.removeEventListener("mouseleave", end)
      slider.removeEventListener("mouseup", end)
      slider.removeEventListener("touchend", end)
    }
  }, [])

  const products = [
    {
      name: "Mac",
      desktopImage: "https://slvk.b-cdn.net/images/apple/mac.jpg",
      mobileImage: "https://slvk.b-cdn.net/images/apple/mac-mobile.jpg",
      price: "729,00 €",
      link: "/products/mac"
    },
    {
      name: "iPhone",
      desktopImage: "https://slvk.b-cdn.net/images/apple/iphone.jpg",
      mobileImage: "https://slvk.b-cdn.net/images/apple/iphone-mobile.jpg",
      price: "699,00 €",
      link: "/products/iphone"
    },
    {
      name: "iPad",
      desktopImage: "https://slvk.b-cdn.net/images/apple/ipad.jpg",
      mobileImage: "https://slvk.b-cdn.net/images/apple/ipad-mobile.jpg",
      price: "399,00 €",
      link: "/products/ipad"
    },
    {
      name: "WATCH",
      desktopImage: "https://slvk.b-cdn.net/images/apple/watch.jpg",
      mobileImage: "https://slvk.b-cdn.net/images/apple/watch-mobile.jpg",
      price: "209,00 €",
      link: "/products/watch"
    },
    {
      name: "Audio",
      desktopImage: "https://slvk.b-cdn.net/images/apple/audio.jpg",
      mobileImage: "https://slvk.b-cdn.net/images/apple/audio-mobile.jpg",
      price: "149,00 €",
      link: "/products/audio"
    },
    {
      name: "TV & Domácnosť",
      desktopImage: "https://slvk.b-cdn.net/images/apple/tv.jpg",
      mobileImage: "https://slvk.b-cdn.net/images/apple/tv-mobile.jpg",
      price: "71,00 €",
      link: "/products/tv"
    },
    {
      name: "Príslušenstvo",
      desktopImage: "https://slvk.b-cdn.net/images/apple/accessories.jpg",
      mobileImage: "https://slvk.b-cdn.net/images/apple/accessories-mobile.jpg",
      price: "11,00 €",
      link: "/products/prislusenstvo"
    },
    {
      name: "AirTag",
      desktopImage: "https://slvk.b-cdn.net/images/apple/airtag.jpg",
      mobileImage: "https://slvk.b-cdn.net/images/apple/airtag-mobile.jpg",
      price: "32,00 €",
      link: "/products/airtag"
    }
  ]

  return (
    <div className="py-12">
      <div className="content-container">
        <Text className="text-3xl font-semibold mb-8 px-4 md:px-0">
          Preskúmaj všetky produkty Apple.
        </Text>
        {/* Mobile scroll container */}
        <div className="md:hidden -mx-4 px-4">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch"
            }}
          >
            {products.map((product) => (
              <div key={product.name} className="flex-shrink-0 w-[180px] snap-start">
                <LocalizedClientLink
                  href={product.link}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="w-full aspect-square mb-4 relative overflow-hidden rounded-lg bg-gray-50 p-4">
                    <picture>
                      <source media="(min-width: 768px)" srcSet={product.desktopImage} />
                      <img
                        src={product.mobileImage}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
                      />
                    </picture>
                  </div>
                  <Text className="font-medium mb-1">
                    {product.name === "WATCH" ? "⌚️WATCH" : product.name}
                  </Text>
                  <Text className="text-sm text-gray-600">
                    Od {product.price}
                  </Text>
                </LocalizedClientLink>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8">
          {products.map((product) => (
            <LocalizedClientLink
              key={product.name}
              href={product.link}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-full aspect-square mb-4 relative overflow-hidden rounded-lg bg-gray-50 p-4">
                <picture>
                  <source media="(min-width: 768px)" srcSet={product.desktopImage} />
                  <img
                    src={product.mobileImage}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                </picture>
              </div>
              <Text className="font-medium mb-1">
                {product.name === "WATCH" ? "⌚️WATCH" : product.name}
              </Text>
              <Text className="text-sm text-gray-600">
                Od {product.price}
              </Text>
            </LocalizedClientLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PreskumajProdukty