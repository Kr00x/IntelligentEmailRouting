import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Github, 
  ExternalLink, 
  Mail, 
  MapPin, 
  Code2, 
  Briefcase,
  Calendar,
  Award
} from "lucide-react";

const Creator = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Creator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Entwickler und Architekt des OptiCentry E-Mail Routing Systems
            </p>
          </div>
        </div>

        {/* Creator Profile */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="shadow-elegant">
            <CardHeader className="text-center pb-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" alt="Creator" />
                  <AvatarFallback className="text-2xl bg-gradient-primary text-white">KC</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <CardTitle className="text-2xl">Kr00x Creator</CardTitle>
                  <p className="text-muted-foreground">Full-Stack Developer & System Architect</p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>killimai05.com</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Contact & Links */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild>
                  <a href="https://github.com/kr00x" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:contact@killimai05.com">
                    <Mail className="mr-2 h-4 w-4" />
                    E-Mail
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://killimai05.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Website
                  </a>
                </Button>
              </div>

              {/* Bio */}
              <div className="text-center space-y-4 border-t pt-6">
                <h3 className="text-lg font-semibold">Über den Creator</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Spezialisiert auf die Entwicklung intelligenter E-Mail-Routing-Systeme und KI-gestützter 
                  Klassifizierungsalgorithmen. Mit umfangreicher Erfahrung in Enterprise-Software-Architektur 
                  und modernen Web-Technologien.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Skills & Technologies */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code2 className="mr-2 h-5 w-5" />
                Technologien & Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Frontend</h4>
                  <div className="space-y-1">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Backend</h4>
                  <div className="space-y-1">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Supabase</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">AI/ML</h4>
                  <div className="space-y-1">
                    <Badge variant="secondary">DeepSeek</Badge>
                    <Badge variant="secondary">NLP</Badge>
                    <Badge variant="secondary">Classification</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">DevOps</h4>
                  <div className="space-y-1">
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">CI/CD</Badge>
                    <Badge variant="secondary">Cloud</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projects */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="mr-2 h-5 w-5" />
                Featured Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">OptiCentry E-Mail Routing</h4>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/kr00x" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    KI-gestütztes E-Mail-Klassifizierungs- und Routing-System mit automatischer 
                    Weiterleitung und Analytik-Dashboard.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">React</Badge>
                    <Badge variant="outline" className="text-xs">TypeScript</Badge>
                    <Badge variant="outline" className="text-xs">AI/ML</Badge>
                    <Badge variant="outline" className="text-xs">Supabase</Badge>
                  </div>
                </div>

                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">DeepSeek Integration</h4>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/kr00x" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nahtlose Integration der DeepSeek-API für intelligente Chatbot-Funktionalität 
                    und E-Mail-Klassifizierung.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">API Integration</Badge>
                    <Badge variant="outline" className="text-xs">Streaming</Badge>
                    <Badge variant="outline" className="text-xs">Error Handling</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-2 h-5 w-5" />
                Errungenschaften
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-start space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary">
                    <span className="text-xs font-bold text-white">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Enterprise E-Mail System</h4>
                    <p className="text-sm text-muted-foreground">
                      Entwicklung eines skalierbaren E-Mail-Routing-Systems mit &gt;99.9% Uptime
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary">
                    <span className="text-xs font-bold text-white">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">KI-Integration Expertise</h4>
                    <p className="text-sm text-muted-foreground">
                      Erfolgreiche Integration moderner AI-APIs für automatisierte Klassifizierung
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary">
                    <span className="text-xs font-bold text-white">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Open Source Contributor</h4>
                    <p className="text-sm text-muted-foreground">
                      Aktive Beiträge zu Open-Source-Projekten auf GitHub
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Creator;