import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Send, 
  Loader2,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const Run = () => {
  const [emailText, setEmailText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    classification: string;
    confidence: number;
    department: string;
    priority: string;
  } | null>(null);

  const handleClassify = async () => {
    if (!emailText.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setResult({
      classification: "Customer Support",
      confidence: 0.94,
      department: "Support Team",
      priority: "Medium"
    });
    
    setIsLoading(false);
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.9) return "bg-green-500";
    if (confidence >= 0.7) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Email Classifier</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Paste an email below to automatically classify it and route it to the appropriate department.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card className="p-6 bg-gradient-card border-border/50">
              <div className="flex items-center space-x-2 mb-4">
                <Mail className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">Email Content</h2>
              </div>
              
              <Textarea
                placeholder="Paste your email content here..."
                value={emailText}
                onChange={(e) => setEmailText(e.target.value)}
                className="min-h-[300px] resize-none"
              />
              
              <Button 
                onClick={handleClassify}
                disabled={!emailText.trim() || isLoading}
                className="w-full mt-4"
                variant="hero"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Classifying...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Classify Email
                  </>
                )}
              </Button>
            </Card>

            {/* Results Section */}
            <Card className="p-6 bg-gradient-card border-border/50">
              <div className="flex items-center space-x-2 mb-4">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">Classification Results</h2>
              </div>

              {!result && !isLoading && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Enter an email above to see classification results
                  </p>
                </div>
              )}

              {isLoading && (
                <div className="flex flex-col items-center justify-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
                  <p className="text-muted-foreground">
                    Analyzing email content...
                  </p>
                </div>
              )}

              {result && (
                <div className="space-y-6">
                  {/* Classification */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      Classification
                    </label>
                    <div className="flex items-center space-x-2">
                      <Badge variant="default" className="text-lg px-3 py-1">
                        {result.classification}
                      </Badge>
                    </div>
                  </div>

                  {/* Confidence */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      Confidence Score
                    </label>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-secondary rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getConfidenceColor(result.confidence)}`}
                          style={{ width: `${result.confidence * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">
                        {Math.round(result.confidence * 100)}%
                      </span>
                    </div>
                  </div>

                  {/* Department */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      Recommended Department
                    </label>
                    <div className="p-3 rounded-lg bg-secondary">
                      <span className="font-medium">{result.department}</span>
                    </div>
                  </div>

                  {/* Priority */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      Priority Level
                    </label>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={result.priority === 'High' ? 'destructive' : 'secondary'}
                        className="px-3 py-1"
                      >
                        {result.priority}
                      </Badge>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Run;