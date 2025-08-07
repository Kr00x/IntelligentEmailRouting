import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ResumeRequestButtonProps {
  className?: string;
}

export function ResumeRequestButton({ className = "" }: ResumeRequestButtonProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const { toast } = useToast();

  const handleResumeRequest = async () => {
    setStatus('sending');
    
    try {
      // Simuliere API-Call für E-Mail-Versand
      // In der echten Implementierung würde hier eine Supabase Edge Function aufgerufen
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus('sent');
      toast({
        title: "Anfrage gesendet",
        description: "Ihre Lebenslauf-Anfrage wurde an den Creator gesendet. Sie erhalten eine E-Mail, sobald der Zugriff gewährt wird.",
      });

      // Reset nach 5 Sekunden
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Fehler beim Senden der Anfrage:', error);
      setStatus('idle');
      toast({
        title: "Fehler",
        description: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    }
  };

  const getButtonContent = () => {
    switch (status) {
      case 'sending':
        return (
          <>
            <Clock className="mr-2 h-4 w-4 animate-spin" />
            Anfrage wird gesendet...
          </>
        );
      case 'sent':
        return (
          <>
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Anfrage gesendet!
          </>
        );
      default:
        return (
          <>
            <Download className="mr-2 h-4 w-4" />
            Lebenslauf anfordern
          </>
        );
    }
  };

  return (
    <Button
      onClick={handleResumeRequest}
      disabled={status !== 'idle'}
      size="lg"
      className={`bg-gradient-primary hover:shadow-glow transition-all duration-300 ${className}`}
    >
      {getButtonContent()}
    </Button>
  );
}