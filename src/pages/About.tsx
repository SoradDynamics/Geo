import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              About Sorad Geo Pvt. Ltd.
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
              Leading the way in geological exploration and construction excellence
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <div className="prose max-w-none text-muted-foreground space-y-4">
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">Sorad Geo Pvt. Ltd.</strong> is a registered geological and
                  construction company dedicated to exploration, production, and
                  infrastructure development. With expertise in natural resources,
                  minerals, petroleum, and construction works, we are committed to
                  supporting sustainable growth and innovation in Nepal.
                </p>
                <p className="text-lg leading-relaxed">
                  Our team combines decades of geological expertise with modern
                  construction capabilities to deliver exceptional results. We serve
                  clients across various sectors, from mineral exploration to large-scale
                  infrastructure projects, always maintaining the highest standards of
                  quality and environmental responsibility.
                </p>
                <p className="text-lg leading-relaxed">
                  Through responsible resource management and innovative engineering
                  solutions, we contribute to Nepal's economic development while
                  ensuring environmental sustainability for future generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To responsibly explore, develop, and utilize natural resources
                    while delivering quality construction and engineering solutions
                    that drive sustainable growth and benefit local communities
                    across Nepal.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a trusted leader in geology, mining, and construction
                    services, driving progress and sustainability through
                    innovation, expertise, and unwavering commitment to excellence
                    in every project we undertake.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  Commitment to the highest quality standards in all our projects
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-muted-foreground text-sm">
                  Honest and transparent business practices with all stakeholders
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-muted-foreground text-sm">
                  Responsible resource management for future generations
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-earth/10 flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-earth" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  Embracing new technologies and methodologies for better results
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Expertise</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Geological Sciences
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Mineral exploration and surveying</li>
                    <li>• Petroleum geology and processing</li>
                    <li>• Natural resource assessment</li>
                    <li>• Environmental geology</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-secondary">
                    Construction Engineering
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Infrastructure development</li>
                    <li>• Building construction</li>
                    <li>• Tunnel and excavation works</li>
                    <li>• Project management</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-accent">
                    Resource Management
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Sustainable extraction practices</li>
                    <li>• Environmental compliance</li>
                    <li>• Resource optimization</li>
                    <li>• Impact assessment</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-earth">
                    Industrial Solutions
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Cement production facilities</li>
                    <li>• Material processing plants</li>
                    <li>• Manufacturing infrastructure</li>
                    <li>• Quality control systems</li>
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

export default About;
