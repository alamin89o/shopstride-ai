import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShoppingBag, Zap, Shield, Truck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[600px] flex items-center">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
      
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <Zap className="w-3 h-3 mr-1" />
                New Collection Available
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Discover</span>{" "}
                <span className="text-white">Premium</span>{" "}
                <span className="gradient-text bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                  Products
                </span>
              </h1>
              
              <p className="text-lg text-white/90 max-w-md">
                Shop the latest trends with unbeatable prices. Quality products, 
                fast delivery, and exceptional customer service.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-hover text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <ShoppingBag className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Shop Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                View Categories
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2 text-white/80">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Secure Shopping</span>
              </div>
              
              <div className="flex items-center space-x-2 text-white/80">
                <Truck className="w-5 h-5" />
                <span className="text-sm font-medium">Free Shipping</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Stats */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose EliteShop?</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/10 rounded-xl">
                    <div className="text-2xl font-bold text-white">50K+</div>
                    <div className="text-sm text-white/80">Happy Customers</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white/10 rounded-xl">
                    <div className="text-2xl font-bold text-white">10K+</div>
                    <div className="text-sm text-white/80">Products</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white/10 rounded-xl">
                    <div className="text-2xl font-bold text-white">99%</div>
                    <div className="text-sm text-white/80">Satisfaction</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white/10 rounded-xl">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-sm text-white/80">Support</div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <div className="flex items-center justify-between text-sm text-white/80 mb-2">
                    <span>Customer Satisfaction</span>
                    <span>98%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;