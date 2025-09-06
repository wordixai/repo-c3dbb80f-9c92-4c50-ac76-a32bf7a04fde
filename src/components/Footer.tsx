const Footer = () => {
  return (
    <footer className="bg-pop-purple text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 comic-dots-small opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-4xl font-bangers mb-4 pop-text-shadow">
              POP SHOP
            </h3>
            <p className="font-comic text-lg mb-6">
              Your ultimate destination for retro vibes, pop art fashion, and groovy accessories! 
              Bringing you the coolest threads since the swinging 60s! ✨
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-pop-orange rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="text-xl">📸</span>
              </div>
              <div className="w-12 h-12 bg-pop-pink rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="text-xl">🐦</span>
              </div>
              <div className="w-12 h-12 bg-pop-blue rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="text-xl">📘</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-bangers mb-4 text-pop-yellow">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 font-comic">
              <li><a href="#" className="hover:text-pop-yellow transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-pop-yellow transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-pop-yellow transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-pop-yellow transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-pop-yellow transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-2xl font-bangers mb-4 text-pop-yellow">
              GET IN TOUCH
            </h4>
            <div className="space-y-2 font-comic">
              <p>📧 hello@popshop.com</p>
              <p>📞 1-800-POP-SHOP</p>
              <p>📍 123 Groovy Street<br />Pop City, PC 12345</p>
              <p>🕒 Mon-Fri: 9AM-6PM</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="font-comic text-lg">
            © 2024 Pop Shop. All rights reserved. Keep it groovy! ✌️
          </p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-pop-orange rounded-full opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-pop-pink rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
    </footer>
  )
}

export default Footer