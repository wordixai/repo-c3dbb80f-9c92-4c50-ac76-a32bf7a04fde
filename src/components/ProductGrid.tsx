import { Button } from "@/components/ui/button"
import ProductCard from "./ProductCard"

const products = [
  {
    id: 1,
    name: "Retro Rainbow Jacket",
    price: 89,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    rating: 5,
    isNew: true,
    isSale: true
  },
  {
    id: 2,
    name: "Pop Art Sneakers",
    price: 75,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    rating: 4,
    isNew: false,
    isSale: false
  },
  {
    id: 3,
    name: "Comic Book Tee",
    price: 35,
    originalPrice: 45,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 5,
    isNew: false,
    isSale: true
  },
  {
    id: 4,
    name: "Vintage Sunglasses",
    price: 65,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    rating: 4,
    isNew: true,
    isSale: false
  },
  {
    id: 5,
    name: "Groovy Bell Bottoms",
    price: 95,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
    rating: 5,
    isNew: false,
    isSale: false
  },
  {
    id: 6,
    name: "Psychedelic Backpack",
    price: 55,
    originalPrice: 70,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: 4,
    isNew: false,
    isSale: true
  }
]

const ProductGrid = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-pop-yellow via-white to-pop-pink">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bangers text-pop-purple pop-text-shadow mb-4 bounce-in">
            TRENDING NOW!
          </h2>
          <p className="text-xl font-comic text-gray-700 font-bold">
            Check out these totally awesome pieces! 🔥
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="pop" size="pop-xl" className="pulse-pop">
            VIEW MORE GOODIES!
          </Button>
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-pop-blue rounded-full opacity-20 rotate-slow"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-pop-orange rounded-full opacity-20 rotate-slow" style={{animationDirection: 'reverse'}}></div>
    </section>
  )
}

export default ProductGrid