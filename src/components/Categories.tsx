import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Shirt, 
  Home, 
  Dumbbell, 
  Sparkles, 
  BookOpen,
  Car,
  Baby,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    icon: Smartphone,
    description: "Latest gadgets & tech",
    itemCount: "2,847",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    id: "fashion",
    name: "Fashion",
    icon: Shirt,
    description: "Trending styles & apparel",
    itemCount: "5,234",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    id: "home",
    name: "Home & Garden",
    icon: Home,
    description: "Home decor & essentials",
    itemCount: "3,156",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    id: "sports",
    name: "Sports",
    icon: Dumbbell,
    description: "Fitness & outdoor gear",
    itemCount: "1,923",
    gradient: "from-orange-500 to-red-600"
  },
  {
    id: "beauty",
    name: "Beauty",
    icon: Sparkles,
    description: "Skincare & cosmetics",
    itemCount: "2,471",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: "books",
    name: "Books",
    icon: BookOpen,
    description: "Books & digital media",
    itemCount: "8,392",
    gradient: "from-indigo-500 to-blue-600"
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: Car,
    description: "Car parts & accessories",
    itemCount: "1,567",
    gradient: "from-gray-500 to-slate-600"
  },
  {
    id: "baby",
    name: "Baby & Kids",
    icon: Baby,
    description: "Baby care & toys",
    itemCount: "2,089",
    gradient: "from-yellow-500 to-orange-600"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover thousands of products across all your favorite categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            
            return (
              <Link key={category.id} to={`/${category.id}`}>
                <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-card overflow-hidden">
                  <CardContent className="relative p-6 text-center space-y-4">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    {/* Icon */}
                    <div className="relative">
                      <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${category.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                    </div>

                    {/* Category Info */}
                    <div className="relative space-y-2">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {category.description}
                      </p>
                      <p className="text-xs font-medium text-primary">
                        {category.itemCount} items
                      </p>
                    </div>

                    {/* Hover Arrow */}
                    <div className="relative">
                      <ArrowRight className="w-4 h-4 mx-auto text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="px-8" asChild>
            <Link to="/categories">
              View All Categories
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;