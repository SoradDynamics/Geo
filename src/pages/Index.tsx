import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mountain,
  Pickaxe,
  Building2,
  Factory,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-geological.jpg";

const Index = () => {
  const services = [
    {
      icon: Pickaxe,
      title: "Mineral & Resource Exploration",
      description:
        "Expert geological surveys for coal, petroleum, natural gas, salt, marble, copper, gold, uranium, and other valuable minerals.",
    },
    {
      icon: Building2,
      title: "Construction & Engineering",
      description:
        "Quality infrastructure development including roads, bridges, buildings, dams, hydropower projects, and tunnels.",
    },
    {
      icon: Factory,
      title: "Industrial & Manufacturing",
      description:
        "Comprehensive industrial solutions for cement production, brick manufacturing, steel processing, and material handling.",
    },
  ];

  const values = [
    "Expert geological and engineering teams",
    "Sustainable resource development",
    "Quality construction services",
    "Cutting-edge exploration technology",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Exploring Earth, Building the Future
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 animate-fade-in">
              Sorad Geo Pvt. Ltd. specializes in geological surveys, mineral
              exploration, natural resource management, and construction services
              across Nepal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/about">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Core Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive geological and construction solutions for sustainable
                development and infrastructure growth in Nepal.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/services">
                <Button variant="outline" size="lg">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Sorad Geo?
                </h2>
                <p className="text-muted-foreground mb-6">
                  We combine decades of geological expertise with modern
                  construction capabilities to deliver exceptional results for our
                  clients across Nepal.
                </p>
                <ul className="space-y-4">
                  {values.map((value, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{value}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/about" className="inline-block mt-6">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    About Our Company
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="border-border">
                  <CardContent className="pt-6">
                    <Mountain className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-2">10+</h3>
                    <p className="text-muted-foreground">Years of Experience</p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="pt-6">
                    <Pickaxe className="h-12 w-12 text-secondary mb-4" />
                    <h3 className="text-2xl font-bold mb-2">50+</h3>
                    <p className="text-muted-foreground">Projects Completed</p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="pt-6">
                    <Building2 className="h-12 w-12 text-accent mb-4" />
                    <h3 className="text-2xl font-bold mb-2">100%</h3>
                    <p className="text-muted-foreground">Client Satisfaction</p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="pt-6">
                    <Factory className="h-12 w-12 text-earth mb-4" />
                    <h3 className="text-2xl font-bold mb-2">24/7</h3>
                    <p className="text-muted-foreground">Support Available</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              Get in touch with our team to discuss your geological survey or
              construction needs.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
