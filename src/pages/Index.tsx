import { Layout } from "@/components/layout/Layout";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { ResumeRequestButton } from "@/components/ResumeRequestButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Zap, Shield, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section mit YouTube */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <Badge variant="secondary" className="mx-auto">
            🚀 E-Mail Routing System Demo
          </Badge>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              OptiCentry
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              Smart Email Classification
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Intelligente E-Mail-Weiterleitung mit KI-gestützter Klassifizierung. 
              Automatische Sortierung und Routing basierend auf Inhaltsanalyse.
            </p>
          </div>

          {/* YouTube Video */}
          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed 
              videoId="dQw4w9WgXcQ" 
              title="OptiCentry E-Mail Routing Demo"
              className="shadow-elegant"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ResumeRequestButton />
            <Link to="/docs">
              <Button variant="outline" size="lg" className="group">
                Dokumentation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="group hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6 text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary mx-auto group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Smart Routing</h3>
              <p className="text-muted-foreground">
                KI-basierte Klassifizierung und automatische Weiterleitung von E-Mails an die richtige Abteilung.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6 text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary mx-auto group-hover:scale-110 transition-transform">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Analytics</h3>
              <p className="text-muted-foreground">
                Detaillierte Statistiken über E-Mail-Volumen, Kategorien und Bearbeitungszeiten.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6 text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary mx-auto group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Sicherheit</h3>
              <p className="text-muted-foreground">
                Enterprise-grade Sicherheit mit Verschlüsselung und Compliance-Unterstützung.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
