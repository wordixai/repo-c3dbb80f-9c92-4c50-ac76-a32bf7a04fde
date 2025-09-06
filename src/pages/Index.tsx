import Header from "@/components/Header"
import ProductGrid from "@/components/ProductGrid"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <ProductGrid />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Index