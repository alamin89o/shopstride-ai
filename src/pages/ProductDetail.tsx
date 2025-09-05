import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Minus, 
  Plus, 
  Share2, 
  Shield, 
  Truck, 
  RotateCcw,
  ChevronLeft
} from "lucide-react";
import { Link } from "react-router-dom";

// Mock product data - replace with API call
const mockProduct = {
  id: "1",
  name: "Wireless Bluetooth Headphones with Advanced Noise Cancellation",
  price: 89.99,
  originalPrice: 129.99,
  images: [
    "/api/placeholder/600/600",
    "/api/placeholder/600/600",
    "/api/placeholder/600/600",
    "/api/placeholder/600/600"
  ],
  rating: 4.5,
  reviewCount: 234,
  category: "Electronics",
  brand: "TechSound",
  sku: "TS-WBH-001",
  inStock: true,
  stockCount: 47,
  description: "Experience premium sound quality with our advanced wireless Bluetooth headphones. Featuring industry-leading noise cancellation technology, these headphones deliver crystal-clear audio whether you're commuting, working, or relaxing at home.",
  features: [
    "Advanced Active Noise Cancellation",
    "30-hour battery life with fast charging",
    "Premium leather ear cushions",
    "Bluetooth 5.0 connectivity",
    "Built-in microphone for calls",
    "Foldable design for portability"
  ],
  specifications: {
    "Frequency Response": "20Hz - 20kHz",
    "Driver Size": "40mm",
    "Impedance": "32Ω",
    "Weight": "250g",
    "Charging Time": "2 hours",
    "Battery Life": "30 hours"
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discountPercentage = mockProduct.originalPrice 
    ? Math.round(((mockProduct.originalPrice - mockProduct.price) / mockProduct.originalPrice) * 100)
    : 0;

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, Math.min(prev + delta, mockProduct.stockCount)));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link> / 
          <Link to="/products" className="hover:text-primary"> Products</Link> / 
          <span className="text-foreground"> {mockProduct.name}</span>
        </nav>

        {/* Back Button */}
        <Button variant="ghost" className="mb-6 p-0 h-auto" asChild>
          <Link to="/products">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Products
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded-xl bg-muted/30">
              <img
                src={mockProduct.images[selectedImage]}
                alt={mockProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {mockProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${mockProduct.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{mockProduct.brand}</Badge>
                {discountPercentage > 0 && (
                  <Badge variant="destructive">-{discountPercentage}% OFF</Badge>
                )}
              </div>
              
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                {mockProduct.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < Math.floor(mockProduct.rating) 
                          ? 'fill-rating text-rating' 
                          : 'text-muted-foreground/30'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {mockProduct.rating} ({mockProduct.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold price-text">
                  ${mockProduct.price.toFixed(2)}
                </span>
                {mockProduct.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${mockProduct.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                SKU: {mockProduct.sku} | {mockProduct.stockCount} in stock
              </p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {mockProduct.description}
            </p>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="px-3"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= mockProduct.stockCount}
                    className="px-3"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="px-4"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                
                <Button variant="outline" size="lg" className="px-4">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <Card className="border-0 bg-muted/20">
              <CardContent className="p-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Truck className="w-4 h-4 text-primary" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <RotateCcw className="w-4 h-4 text-primary" />
                    <span>Easy Returns</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16 space-y-8">
          <Separator />
          
          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {mockProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Specifications</h3>
              <div className="space-y-2">
                {Object.entries(mockProduct.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm py-1">
                    <span className="text-muted-foreground">{key}:</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;