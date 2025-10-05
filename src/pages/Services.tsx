import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pickaxe,
  Building2,
  Factory,
  Fuel,
  Gem,
  Mountain,
  Construction,
  Home,
  Waves,
  Drill,
  Cog,
  Box,
} from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      category: "Mineral & Resource Exploration",
      icon: Pickaxe,
      color: "text-primary",
      services: [
        {
          icon: Pickaxe,
          title: "Coal Production & Mining",
          description:
            "Comprehensive coal exploration, extraction, and production services with environmental compliance.",
        },
        {
          icon: Fuel,
          title: "Petroleum Exploration & Processing",
          description:
            "Advanced petroleum survey techniques and processing solutions for oil and gas resources.",
        },
        {
          icon: Waves,
          title: "Natural Gas Production",
          description:
            "Natural gas exploration, extraction, and development with modern technologies.",
        },
        {
          icon: Gem,
          title: "Precious Minerals Extraction",
          description:
            "Expert extraction of salt, marble, copper, gold, uranium, and other valuable minerals.",
        },
        {
          icon: Mountain,
          title: "Non-Metal & Metal Mining",
          description:
            "Comprehensive mining operations for both metallic and non-metallic minerals.",
        },
      ],
    },
    {
      category: "Construction & Engineering",
      icon: Building2,
      color: "text-secondary",
      services: [
        {
          icon: Construction,
          title: "Road & Bridge Construction",
          description:
            "Modern infrastructure development including highways, roads, and bridge construction projects.",
        },
        {
          icon: Home,
          title: "Residential & Commercial Buildings",
          description:
            "Quality construction of residential complexes, commercial buildings, and mixed-use developments.",
        },
        {
          icon: Waves,
          title: "Dam & Hydropower Projects",
          description:
            "Specialized construction for dams, hydropower facilities, and water management infrastructure.",
        },
        {
          icon: Drill,
          title: "Tunnel & Excavation Works",
          description:
            "Expert tunnel construction and excavation services using advanced drilling and blasting techniques.",
        },
        {
          icon: Building2,
          title: "Silica & Chemical Construction",
          description:
            "Specialized construction for silica processing and chemical-related facilities.",
        },
      ],
    },
    {
      category: "Industrial & Manufacturing Works",
      icon: Factory,
      color: "text-accent",
      services: [
        {
          icon: Factory,
          title: "Cement Production Facilities",
          description:
            "Complete cement plant setup, maintenance, and optimization services.",
        },
        {
          icon: Box,
          title: "Brick & Block Manufacturing",
          description:
            "Modern brick and block production facilities with quality control systems.",
        },
        {
          icon: Cog,
          title: "Steel & Material Processing",
          description:
            "Steel processing, stone crushing, and other material handling operations.",
        },
        {
          icon: Building2,
          title: "Industrial Infrastructure",
          description:
            "Complete industrial plant construction and facility management services.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
              Comprehensive geological exploration, construction, and industrial
              solutions tailored to your needs
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
              <p className="text-muted-foreground text-lg">
                Sorad Geo Pvt. Ltd. provides a complete range of geological,
                construction, and industrial services. From mineral exploration to
                large-scale infrastructure projects, we deliver excellence at every
                stage.
              </p>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        {serviceCategories.map((category, categoryIndex) => (
          <section
            key={categoryIndex}
            className={categoryIndex % 2 === 0 ? "py-16 bg-muted" : "py-16 bg-background"}
          >
            <div className="container mx-auto px-4">
              <div className="mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-16 h-16 rounded-full bg-card flex items-center justify-center border-2 ${category.color.replace('text-', 'border-')}`}>
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-center mb-2">
                  {category.category}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {category.services.map((service, serviceIndex) => (
                  <Card
                    key={serviceIndex}
                    className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${category.color.replace('text-', 'bg-')}/10 flex items-center justify-center mb-2`}>
                        <service.icon className={`h-6 w-6 ${category.color}`} />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Additional Capabilities */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Additional Capabilities
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Project Management
                  </h3>
                  <ul className="space-y-2 text-primary-foreground/90">
                    <li>• Complete project planning and execution</li>
                    <li>• Quality assurance and control</li>
                    <li>• Timeline and budget management</li>
                    <li>• Stakeholder coordination</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Environmental Compliance
                  </h3>
                  <ul className="space-y-2 text-primary-foreground/90">
                    <li>• Environmental impact assessments</li>
                    <li>• Regulatory compliance management</li>
                    <li>• Sustainable practice implementation</li>
                    <li>• Waste management solutions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Technical Expertise
                  </h3>
                  <ul className="space-y-2 text-primary-foreground/90">
                    <li>• Geological surveying and mapping</li>
                    <li>• Structural engineering design</li>
                    <li>• Advanced drilling techniques</li>
                    <li>• Material testing and analysis</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Safety Standards</h3>
                  <ul className="space-y-2 text-primary-foreground/90">
                    <li>• Comprehensive safety protocols</li>
                    <li>• Regular safety training programs</li>
                    <li>• Modern safety equipment</li>
                    <li>• Emergency response planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
