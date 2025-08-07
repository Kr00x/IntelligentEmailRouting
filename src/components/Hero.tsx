import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Bot, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-border/40 bg-background/50 backdrop-blur">
            <span className="text-sm font-medium bg-gradient-primary bg-clip-text text-transparent">
              ✨ Intelligent Email Routing & AI Assistant
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              OptiSentry
            </span>
            <br />
            <span className="text-foreground">
              Smart Email Classification
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Automatically route customer emails to the right teams with AI-powered classification 
            and provide instant support through our intelligent chatbot assistant.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="hero" variant="hero" asChild>
              <Link to="/run" className="group">
                Start Classifying
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="hero" variant="outline" asChild>
              <Link to="/docs">
                View Documentation
              </Link>
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="text-center space-y-3">
              <div className="flex h-12 w-12 items-center justify-center mx-auto rounded-lg bg-gradient-primary shadow-glow">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Smart Routing</h3>
              <p className="text-muted-foreground text-sm">
                AI-powered email classification with 95%+ accuracy
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="flex h-12 w-12 items-center justify-center mx-auto rounded-lg bg-gradient-primary shadow-glow">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">AI Assistant</h3>
              <p className="text-muted-foreground text-sm">
                24/7 customer support with intelligent responses
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="flex h-12 w-12 items-center justify-center mx-auto rounded-lg bg-gradient-primary shadow-glow">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Analytics</h3>
              <p className="text-muted-foreground text-sm">
                Real-time insights and performance metrics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}