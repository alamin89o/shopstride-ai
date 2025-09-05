import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  User, 
  Menu,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-foreground">EliteShop</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search for products, brands and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full bg-muted/50 border-0 focus:bg-background transition-smooth"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-1">
              <Heart className="h-4 w-4" />
              <span className="hidden lg:inline">Wishlist</span>
              <Badge variant="secondary" className="ml-1">0</Badge>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="flex items-center space-x-1">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden lg:inline">Cart</span>
              <Badge variant="secondary" className="ml-1">0</Badge>
            </Button>

            {/* User Account */}
            <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span className="hidden lg:inline">Account</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8 py-2 border-t">
          <Link to="/categories" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            All Categories
          </Link>
          <Link to="/electronics" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
            Electronics
          </Link>
          <Link to="/fashion" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
            Fashion
          </Link>
          <Link to="/home" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
            Home & Garden
          </Link>
          <Link to="/sports" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
            Sports
          </Link>
          <Link to="/beauty" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
            Beauty
          </Link>
          <Link to="/deals" className="text-sm font-medium text-accent hover:text-accent-hover transition-smooth">
            Today's Deals
          </Link>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background absolute left-0 right-0 top-full shadow-lg">
            <div className="p-4 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full"
                />
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-3">
                <Link to="/categories" className="text-sm font-medium text-foreground">
                  All Categories
                </Link>
                <Link to="/electronics" className="text-sm text-muted-foreground">
                  Electronics
                </Link>
                <Link to="/fashion" className="text-sm text-muted-foreground">
                  Fashion
                </Link>
                <Link to="/home" className="text-sm text-muted-foreground">
                  Home & Garden
                </Link>
                <Link to="/sports" className="text-sm text-muted-foreground">
                  Sports
                </Link>
                <Link to="/beauty" className="text-sm text-muted-foreground">
                  Beauty
                </Link>
                <Link to="/deals" className="text-sm font-medium text-accent">
                  Today's Deals
                </Link>
              </nav>

              {/* Mobile Actions */}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="ghost" className="justify-start">
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="ghost" className="justify-start">
                  <User className="h-4 w-4 mr-2" />
                  My Account
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;