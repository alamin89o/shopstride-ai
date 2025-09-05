import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Filter, Grid, List, SlidersHorizontal } from "lucide-react";

// Mock products data
const mockProducts = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones with Noise Cancellation",
    price: 89.99,
    originalPrice: 129.99,
    image: "/api/placeholder/300/300",
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
    image: "/api/placeholder/300/300",
    rating: 4.2,
    reviewCount: 156,
    category: "Fashion",
    isOnSale: true
  },
  {
    id: "3",
    name: "Smart Fitness Watch with Heart Rate Monitor",
    price: 199.99,
    image: "/api/placeholder/300/300",
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

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const totalPages = Math.ceil(mockProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = mockProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <span>Home</span> / <span className="text-foreground">Products</span>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">All Products</h1>
            <p className="text-muted-foreground">
              Showing {currentProducts.length} of {mockProducts.length} products
            </p>
          </div>

          {/* Filters and Controls */}
          <div className="flex items-center gap-4">
            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Best Rating</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode */}
            <div className="flex items-center border rounded-lg">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>

            {/* Filter Button */}
            <Button variant="outline" size="sm">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Active Filters */}
        <div className="flex items-center gap-2 mb-6">
          <Badge variant="secondary" className="text-xs">
            All Categories
          </Badge>
          <Badge variant="secondary" className="text-xs">
            All Prices
          </Badge>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 mb-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {currentProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            
            {[...Array(totalPages)].map((_, index) => (
              <Button
                key={index + 1}
                variant={currentPage === index + 1 ? 'default' : 'outline'}
                onClick={() => setCurrentPage(index + 1)}
                className="w-10"
              >
                {index + 1}
              </Button>
            ))}
            
            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Products;