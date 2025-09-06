import { Button } from "@/components/ui/button"
import { ShoppingCart, Search, Menu, Heart, User } from "lucide-react"

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      {/* Background with comic dots */}
      <div className="absolute inset-0 pop-gradient-bg comic-dots opacity-90"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="bounce-in">
            <h1 className="text-4xl md:text-5xl font-bangers text-white pop-text-shadow">
              POP SHOP
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white font-comic font-bold text-lg hover:text-pop-yellow transition-colors wiggle">
              HOME
            </a>
            <a href="#" className="text-white font-comic font-bold text-lg hover:text-pop-yellow transition-colors wiggle">
              FASHION
            </a>
            <a href="#" className="text-white font-comic font-bold text-lg hover:text-pop-yellow transition-colors wiggle">
              ART
            </a>
            <a href="#" className="text-white font-comic font-bold text-lg hover:text-pop-yellow transition-colors wiggle">
              VINTAGE
            </a>
          </nav>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="pop-outline" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="pop-outline" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="pop-outline" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="pop" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-pop-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                3
              </span>
            </Button>
            <Button variant="pop-outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Hero Section */}
        <div className="mt-12 text-center">
          <div className="bounce-in">
            <h2 className="text-6xl md:text-8xl font-bangers text-white pop-text-shadow mb-4">
              GROOVY VIBES!
            </h2>
            <p className="text-xl md:text-2xl font-comic text-white font-bold mb-8">
              Discover the most radical fashion & art pieces! ✨
            </p>
            <Button variant="pop" size="pop-xl" className="mb-8">
              SHOP NOW!
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-pop-yellow rounded-full float opacity-60"></div>
      <div className="absolute top-32 right-20 w-12 h-12 bg-pop-pink rounded-full float opacity-60" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-pop-blue rounded-full float opacity-60" style={{animationDelay: '2s'}}></div>
    </header>
  )
}

export default Header