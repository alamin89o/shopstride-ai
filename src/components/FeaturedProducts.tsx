import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import headphones from "@/assets/product-headphones.jpg";
import tshirt from "@/assets/product-tshirt.jpg";
import smartwatch from "@/assets/product-smartwatch.jpg";

// Mock data - replace with API call
const mockProducts = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones with Noise Cancellation",
    price: 89.99,
    originalPrice: 129.99,
    image: headphones,
    rating: 4.5,
    reviewCount: 234,
    category: "Electronics",
    isOnSale: true,
    isFeatured: true
  },
  {
    id: "2", 
    name: "Premium Cotton T-Shirt - Comfort Fit",
    price: 24.99,
    originalPrice: 34.99,
    image: tshirt,
    rating: 4.2,
    reviewCount: 156,
    category: "Fashion",
    isOnSale: true
  },
  {
    id: "3",
    name: "Smart Fitness Watch with Heart Rate Monitor", 
    price: 199.99,
    image: smartwatch,
    rating: 4.7,
    reviewCount: 423,
    category: "Electronics",
    isFeatured: true
  },
  {
    id: "4",
    name: "Eco-Friendly Yoga Mat - Non-Slip Surface",
    price: 45.99,
    originalPrice: 59.99, 
    image: "/api/placeholder/300/300",
    rating: 4.4,
    reviewCount: 189,
    category: "Sports",
    isOnSale: true
  },
  {
    id: "5",
    name: "Stainless Steel Water Bottle - 32oz",
    price: 18.99,
    image: "/api/placeholder/300/300", 
    rating: 4.6,
    reviewCount: 312,
    category: "Home & Garden"
  },
  {
    id: "6",
    name: "Wireless Charging Pad - Fast Charge",
    price: 34.99,
    originalPrice: 49.99,
    image: "/api/placeholder/300/300",
    rating: 4.3,
    reviewCount: 278,
    category: "Electronics",
    isOnSale: true
  }
];

const FeaturedProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productsPerView, setProductsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProductsPerView(1);
      } else if (window.innerWidth < 768) {
        setProductsPerView(2);
      } else if (window.innerWidth < 1024) {
        setProductsPerView(3);
      } else {
        setProductsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlides = Math.max(0, mockProducts.length - productsPerView);

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, maxSlides));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <Badge variant="secondary" className="text-xs">
                Trending Now
              </Badge>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Featured Products</h2>
            <p className="text-muted-foreground">
              Discover our most popular and trending items
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="w-10 h-10 p-0 rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide >= maxSlides}
              className="w-10 h-10 p-0 rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Products Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ 
              transform: `translateX(-${currentSlide * (100 / productsPerView)}%)`,
              width: `${(mockProducts.length / productsPerView) * 100}%`
            }}
          >
            {mockProducts.map((product) => (
              <div 
                key={product.id} 
                className="flex-shrink-0"
                style={{ width: `${100 / mockProducts.length}%` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-6">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="w-10 h-10 p-0 rounded-full"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex items-center gap-1 px-4">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide >= maxSlides}
            className="w-10 h-10 p-0 rounded-full"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;