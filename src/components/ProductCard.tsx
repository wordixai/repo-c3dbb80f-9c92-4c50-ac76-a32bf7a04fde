import { Button } from "@/components/ui/button"
import { PopCard } from "@/components/ui/card"
import { Heart, ShoppingCart, Star } from "lucide-react"

interface ProductCardProps {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  isNew?: boolean
  isSale?: boolean
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  isNew, 
  isSale 
}: ProductCardProps) => {
  return (
    <PopCard variant="frame" className="group cursor-pointer">
      <div className="relative overflow-hidden">
        {/* Image */}
        <div className="aspect-square bg-gradient-to-br from-pop-pink to-pop-purple p-4">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover rounded-2xl border-4 border-white transform group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-6 left-6 space-y-2">
            {isNew && (
              <span className="bg-pop-green text-white px-3 py-1 rounded-full text-sm font-bold bangers tracking-wider">
                NEW!
              </span>
            )}
            {isSale && (
              <span className="bg-pop-red text-white px-3 py-1 rounded-full text-sm font-bold bangers tracking-wider animate-pulse">
                SALE!
              </span>
            )}
          </div>
          
          {/* Favorite Button */}
          <Button 
            variant="pop-outline" 
            size="icon" 
            className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Content */}
        <div className="p-6 bg-white">
          {/* Rating */}
          <div className="flex items-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${
                  i < rating 
                    ? 'text-pop-yellow fill-current' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
            <span className="text-sm text-gray-600 ml-2 font-comic">
              ({rating}.0)
            </span>
          </div>
          
          {/* Product Name */}
          <h3 className="font-comic font-bold text-lg mb-3 group-hover:text-pop-purple transition-colors">
            {name}
          </h3>
          
          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bangers text-pop-orange">
                ${price}
              </span>
              {originalPrice && (
                <span className="text-lg text-gray-500 line-through font-comic">
                  ${originalPrice}
                </span>
              )}
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <Button variant="pop" className="w-full" size="lg">
            <ShoppingCart className="h-5 w-5 mr-2" />
            ADD TO CART
          </Button>
        </div>
      </div>
    </PopCard>
  )
}

export default ProductCard