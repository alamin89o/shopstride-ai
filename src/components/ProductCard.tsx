import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  isOnSale?: boolean;
  isFeatured?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviewCount, 
  category,
  isOnSale = false,
  isFeatured = false 
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discountPercentage = originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <Card 
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-product border-0 bg-gradient-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isOnSale && (
            <Badge variant="destructive" className="bg-sale text-white shadow-md">
              -{discountPercentage}%
            </Badge>
          )}
          {isFeatured && (
            <Badge className="bg-accent text-accent-foreground shadow-md">
              Featured
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          size="sm"
          variant="ghost"
          className={`absolute top-3 right-3 w-8 h-8 p-0 rounded-full bg-white/90 hover:bg-white transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart 
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-muted-foreground'
            }`} 
          />
        </Button>

        {/* Quick Actions */}
        <div className={`absolute bottom-3 left-3 right-3 flex gap-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Button 
            size="sm" 
            className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground shadow-md"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
          
          <Button 
            size="sm" 
            variant="secondary"
            className="px-3 bg-white/90 hover:bg-white shadow-md"
            asChild
          >
            <Link to={`/product/${id}`}>
              <Eye className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Category */}
        <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
          {category}
        </p>

        {/* Product Name */}
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-sm leading-tight line-clamp-2 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${
                  i < Math.floor(rating) 
                    ? 'fill-rating text-rating' 
                    : 'text-muted-foreground/30'
                }`} 
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg price-text">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;