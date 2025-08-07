import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Settings, 
  Upload, 
  Database, 
  Users,
  Shield,
  BarChart3,
  Wrench
} from "lucide-react";

const Admin = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Admin Portal</h1>
          <p className="text-muted-foreground">
            Manage datasets, baselines, and system configurations
          </p>
        </div>

        {/* Admin Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Dataset Management */}
          <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                <Upload className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Dataset Upload</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Upload and manage training datasets for email classification
            </p>
            <Button variant="outline" className="w-full">
              Manage Datasets
            </Button>
          </Card>

          {/* Baseline Manager */}
          <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                <Database className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Baseline Manager</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Set and monitor performance baselines for model evaluation
            </p>
            <Button variant="outline" className="w-full">
              Configure Baselines
            </Button>
          </Card>

          {/* User Management */}
          <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                <Users className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">User Management</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Manage user accounts, roles, and permissions
            </p>
            <Button variant="outline" className="w-full">
              Manage Users
            </Button>
          </Card>

          {/* Error Analysis */}
          <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                <Wrench className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Error Analysis</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Analyze misclassifications and improve model performance
            </p>
            <Button variant="outline" className="w-full">
              View Analysis
            </Button>
          </Card>

          {/* Security Settings */}
          <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Security</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Configure security settings and access controls
            </p>
            <Button variant="outline" className="w-full">
              Security Settings
            </Button>
          </Card>

          {/* Analytics */}
          <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Advanced Analytics</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Deep dive into system metrics and performance data
            </p>
            <Button variant="outline" className="w-full">
              View Analytics
            </Button>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;