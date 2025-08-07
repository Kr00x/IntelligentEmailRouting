import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Play, 
  Monitor, 
  Activity, 
  Clock,
  CheckCircle2,
  AlertCircle,
  BarChart3
} from "lucide-react";

const Demo = () => {
  // Mock-Daten für die Live-Demo
  const liveStats = {
    totalEmails: 1247,
    processed: 1239,
    pending: 8,
    categories: {
      support: 456,
      sales: 287,
      applications: 189,
      general: 307
    },
    avgProcessingTime: "0.8s",
    uptime: "99.9%"
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Live Demo
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Erleben Sie das OptiCentry E-Mail Routing System in Aktion
            </p>
          </div>
          
          {/* Status Badge */}
          <div className="flex justify-center">
            <Badge variant="default" className="bg-green-500 hover:bg-green-600">
              <Activity className="mr-1 h-3 w-3" />
              System Online
            </Badge>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Live Stats Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total E-Mails</p>
                    <p className="text-2xl font-bold text-primary">{liveStats.totalEmails.toLocaleString()}</p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-primary opacity-60" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Verarbeitet</p>
                    <p className="text-2xl font-bold text-green-600">{liveStats.processed.toLocaleString()}</p>
                  </div>
                  <CheckCircle2 className="h-8 w-8 text-green-600 opacity-60" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Warteschlange</p>
                    <p className="text-2xl font-bold text-yellow-600">{liveStats.pending}</p>
                  </div>
                  <Clock className="h-8 w-8 text-yellow-600 opacity-60" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Uptime</p>
                    <p className="text-2xl font-bold text-green-600">{liveStats.uptime}</p>
                  </div>
                  <Activity className="h-8 w-8 text-green-600 opacity-60" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Categories Distribution */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2 h-5 w-5" />
                Kategorien-Verteilung (Letzte 24h)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(liveStats.categories).map(([category, count]) => {
                  const percentage = (count / liveStats.processed * 100).toFixed(1);
                  const categoryNames = {
                    support: 'Support Anfragen',
                    sales: 'Sales Leads', 
                    applications: 'Bewerbungen',
                    general: 'Allgemeine Anfragen'
                  };
                  
                  return (
                    <div key={category} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{categoryNames[category as keyof typeof categoryNames]}</span>
                        <span className="text-muted-foreground">{count} ({percentage}%)</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Live Processing Monitor */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Monitor className="mr-2 h-5 w-5" />
                Live Processing Monitor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Simulated recent emails */}
                {[
                  {
                    id: "email_001",
                    subject: "Anfrage zur Produktdemonstration",
                    category: "Sales",
                    status: "processed",
                    timestamp: "vor 2 Min",
                    processingTime: "0.6s"
                  },
                  {
                    id: "email_002", 
                    subject: "Bewerbung als Frontend Developer",
                    category: "Bewerbungen",
                    status: "processed",
                    timestamp: "vor 5 Min",
                    processingTime: "0.9s"
                  },
                  {
                    id: "email_003",
                    subject: "Problem mit E-Mail-Weiterleitung",
                    category: "Support",
                    status: "processing",
                    timestamp: "vor 7 Min", 
                    processingTime: "processing..."
                  },
                  {
                    id: "email_004",
                    subject: "Allgemeine Informationsanfrage",
                    category: "Allgemein",
                    status: "processed",
                    timestamp: "vor 12 Min",
                    processingTime: "0.4s"
                  }
                ].map((email, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-gradient-card">
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm truncate">{email.subject}</p>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">{email.category}</Badge>
                        <span className="text-xs text-muted-foreground">{email.timestamp}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-muted-foreground">{email.processingTime}</span>
                      {email.status === 'processed' ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      ) : (
                        <div className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2 h-5 w-5" />
                Performance Metriken
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Durchschnittliche Verarbeitungszeit</p>
                  <p className="text-3xl font-bold text-primary">{liveStats.avgProcessingTime}</p>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Klassifizierungs-Genauigkeit</p>
                  <p className="text-3xl font-bold text-green-600">97.8%</p>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Fehlerrate</p>
                  <p className="text-3xl font-bold text-red-500">0.1%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Möchten Sie das System selbst testen?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Play className="mr-2 h-4 w-4" />
                Interaktive Demo starten
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/kr00x" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Source Code ansehen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Demo;