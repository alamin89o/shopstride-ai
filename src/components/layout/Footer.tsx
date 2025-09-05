import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Shield,
  Truck,
  RotateCcw
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      {/* Newsletter Section */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Stay Updated with Our Latest Offers
              </h3>
              <p className="text-muted-foreground">
                Subscribe to our newsletter and never miss a deal!
              </p>
            </div>
            
            <div className="flex w-full md:w-auto max-w-md gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button className="px-6">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-foreground">EliteShop</span>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for premium products at unbeatable prices. 
              Quality guaranteed, satisfaction assured.
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>123 Commerce Street, Business District</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>support@eliteshop.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors">
                Shipping Info
              </Link>
              <Link to="/returns" className="text-muted-foreground hover:text-primary transition-colors">
                Returns & Exchanges
              </Link>
              <Link to="/size-guide" className="text-muted-foreground hover:text-primary transition-colors">
                Size Guide
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Categories</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/electronics" className="text-muted-foreground hover:text-primary transition-colors">
                Electronics
              </Link>
              <Link to="/fashion" className="text-muted-foreground hover:text-primary transition-colors">
                Fashion & Apparel
              </Link>
              <Link to="/home" className="text-muted-foreground hover:text-primary transition-colors">
                Home & Garden
              </Link>
              <Link to="/sports" className="text-muted-foreground hover:text-primary transition-colors">
                Sports & Outdoors
              </Link>
              <Link to="/beauty" className="text-muted-foreground hover:text-primary transition-colors">
                Beauty & Personal Care
              </Link>
              <Link to="/books" className="text-muted-foreground hover:text-primary transition-colors">
                Books & Media
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Customer Service</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/account" className="text-muted-foreground hover:text-primary transition-colors">
                My Account
              </Link>
              <Link to="/orders" className="text-muted-foreground hover:text-primary transition-colors">
                Order Tracking
              </Link>
              <Link to="/wishlist" className="text-muted-foreground hover:text-primary transition-colors">
                Wishlist
              </Link>
              <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="border-t bg-muted/20">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Truck className="w-5 h-5 text-primary" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <RotateCcw className="w-5 h-5 text-primary" />
              <span>Easy Returns</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <CreditCard className="w-5 h-5 text-primary" />
              <span>Payment Options</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 EliteShop. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;