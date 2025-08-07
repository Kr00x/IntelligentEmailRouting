import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  Settings, 
  Zap, 
  BarChart3,
  FileText,
  Code2,
  Database,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";

const Docs = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How E-Mail Routing works - Technische Schritte ohne Floskeln
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Overview */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                System-Übersicht
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                OptiCentry ist ein KI-gestütztes E-Mail-Routing-System, das eingehende E-Mails automatisch 
                klassifiziert und an die entsprechenden Abteilungen weiterleitet. Das System nutzt moderne 
                NLP-Algorithmen für präzise Inhaltsanalyse.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <Mail className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold text-sm">E-Mail Eingang</h4>
                  <p className="text-xs text-muted-foreground">SMTP/IMAP</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Zap className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold text-sm">KI-Klassifizierung</h4>
                  <p className="text-xs text-muted-foreground">DeepSeek API</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <ArrowRight className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold text-sm">Auto-Routing</h4>
                  <p className="text-xs text-muted-foreground">Rule Engine</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step-by-Step Process */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="mr-2 h-5 w-5" />
                Schritt-für-Schritt Prozess
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "E-Mail Empfang",
                    description: "SMTP-Server empfängt eingehende E-Mail und extrahiert Metadaten (Absender, Betreff, Anhänge).",
                    tech: "Node.js SMTP Server, Email Parser"
                  },
                  {
                    step: "2", 
                    title: "Content Preprocessing",
                    description: "Text-Normalisierung, HTML-Tag-Entfernung, Tokenisierung und Feature-Extraktion.",
                    tech: "Natural Language Processing, RegEx"
                  },
                  {
                    step: "3",
                    title: "KI-Klassifizierung", 
                    description: "DeepSeek-API analysiert Inhalt und klassifiziert E-Mail in vordefinierte Kategorien.",
                    tech: "DeepSeek API, Classification Model"
                  },
                  {
                    step: "4",
                    title: "Rule Engine",
                    description: "Konfigurierbarer Regelmotor bestimmt Zieladresse basierend auf Klassifizierung und Priorität.",
                    tech: "Business Rules Engine, Priority Queue"
                  },
                  {
                    step: "5",
                    title: "Automatische Weiterleitung",
                    description: "E-Mail wird an entsprechende Abteilung weitergeleitet mit Tracking-Informationen.",
                    tech: "SMTP Relay, Audit Logging"
                  },
                  {
                    step: "6",
                    title: "Analytics & Monitoring",
                    description: "Echtzeit-Metriken für Volumen, Kategorien, Bearbeitungszeiten und Erfolgsraten.",
                    tech: "Time-Series Database, Real-time Dashboard"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-white font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                      <Badge variant="outline" className="text-xs">{item.tech}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical Architecture */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code2 className="mr-2 h-5 w-5" />
                Technische Architektur
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Frontend</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-3 w-3 text-green-500" /> React 18 + TypeScript</li>
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-3 w-3 text-green-500" /> Tailwind CSS Design System</li>
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-3 w-3 text-green-500" /> Responsive Design (Mobile-First)</li>
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-3 w-3 text-green-500" /> Real-time Analytics Dashboard</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Backend</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-3 w-3 text-green-500" /> Supabase (Auth + Database)</li>
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-3 w-3 text-green-500" /> Edge Functions (Serverless)</li>
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-3 w-3 text-green-500" /> SMTP Integration</li>
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-3 w-3 text-green-500" /> DeepSeek API Integration</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* API Integration */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                DeepSeek API Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Die Integration mit der DeepSeek-API ermöglicht präzise E-Mail-Klassifizierung durch 
                moderne NLP-Modelle. Das System unterstützt Streaming-Antworten für bessere UX.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <code className="text-sm">
                  {`// Beispiel API-Call
const response = await fetch('/api/classify', {
  method: 'POST',
  body: JSON.stringify({ 
    content: emailContent,
    subject: emailSubject 
  })
});`}
                </code>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium mb-2">Features</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Echtzeit-Klassifizierung</li>
                    <li>• Streaming-Antworten</li>
                    <li>• Fehlerbehandlung & Retry</li>
                    <li>• Rate Limiting</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Kategorien</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Support Anfragen</li>
                    <li>• Sales Leads</li>
                    <li>• Bewerbungen</li>
                    <li>• Allgemeine Anfragen</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Start */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="mr-2 h-5 w-5" />
                Quick Start
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <code className="text-sm block">git clone https://github.com/kr00x/optiscentry</code>
                <code className="text-sm block">npm install</code>
                <code className="text-sm block">npm run dev</code>
              </div>
              <p className="text-sm text-muted-foreground">
                Voraussetzungen: Node.js 18+, Supabase Account, DeepSeek API Key
              </p>
              <div className="flex space-x-4">
                <Link to="/demo">
                  <Button variant="default">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
                <Link to="/chatbot">
                  <Button variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    AI Assistant
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Docs;