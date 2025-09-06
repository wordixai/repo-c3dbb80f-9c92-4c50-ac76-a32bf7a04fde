import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PopCard } from "@/components/ui/card"

const Newsletter = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pop-gradient-secondary comic-dots"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <PopCard variant="comic" className="max-w-4xl mx-auto text-center p-12">
          <div className="space-y-8">
            {/* Header */}
            <div className="bounce-in">
              <h2 className="text-5xl md:text-6xl font-bangers text-pop-purple pop-text-shadow mb-4">
                STAY GROOVY!
              </h2>
              <p className="text-xl font-comic text-gray-700 font-bold">
                Subscribe to our newsletter for the latest pop culture finds! 📮
              </p>
            </div>
            
            {/* Newsletter Form */}
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <Input 
                  placeholder="Enter your email..."
                  className="flex-1 h-12 text-lg font-comic border-4 border-pop-blue rounded-2xl focus:border-pop-purple transition-colors"
                />
                <Button variant="pop" size="lg" className="px-8">
                  SUBSCRIBE!
                </Button>
              </div>
              <p className="text-sm font-comic text-gray-600 mt-3">
                No spam, just awesome deals! ✨
              </p>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center wiggle">
                <div className="text-4xl mb-2">🎨</div>
                <h3 className="font-bangers text-xl text-pop-orange">ART DROPS</h3>
                <p className="font-comic text-gray-600">Limited edition releases</p>
              </div>
              <div className="text-center wiggle" style={{animationDelay: '0.5s'}}>
                <div className="text-4xl mb-2">👕</div>
                <h3 className="font-bangers text-xl text-pop-pink">FASHION ALERTS</h3>
                <p className="font-comic text-gray-600">Exclusive style updates</p>
              </div>
              <div className="text-center wiggle" style={{animationDelay: '1s'}}>
                <div className="text-4xl mb-2">💫</div>
                <h3 className="font-bangers text-xl text-pop-blue">SPECIAL OFFERS</h3>
                <p className="font-comic text-gray-600">Members-only discounts</p>
              </div>
            </div>
          </div>
        </PopCard>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pop-yellow rounded-full float opacity-40"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-pop-pink rounded-full float opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-pop-green rounded-full float opacity-40" style={{animationDelay: '2s'}}></div>
    </section>
  )
}

export default Newsletter