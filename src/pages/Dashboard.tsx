import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  TrendingUp, 
  Users, 
  Clock,
  ArrowUpRight,
  BarChart3
} from "lucide-react";

const metrics = [
  {
    title: "Emails Processed",
    value: "2,847",
    change: "+12.5%",
    icon: Mail,
    trend: "up"
  },
  {
    title: "Classification Accuracy", 
    value: "96.8%",
    change: "+2.1%",
    icon: TrendingUp,
    trend: "up"
  },
  {
    title: "Active Users",
    value: "142",
    change: "+8.2%", 
    icon: Users,
    trend: "up"
  },
  {
    title: "Avg Response Time",
    value: "1.2s",
    change: "-0.3s",
    icon: Clock,
    trend: "down"
  }
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor your email classification performance and system metrics
            </p>
          </div>
          <Button variant="hero" className="space-x-2">
            <BarChart3 className="h-4 w-4" />
            <span>View Reports</span>
          </Button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <Card key={metric.title} className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">
                      {metric.title}
                    </p>
                    <p className="text-2xl font-bold">
                      {metric.value}
                    </p>
                    <div className="flex items-center space-x-1">
                      <ArrowUpRight className={`h-3 w-3 ${
                        metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                      }`} />
                      <span className={`text-xs font-medium ${
                        metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-gradient-card border-border/50">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Mail className="h-4 w-4 mr-2" />
                Classify New Emails
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Manage Teams
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm">Email batch processed successfully</span>
                <span className="text-xs text-muted-foreground ml-auto">2m ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span className="text-sm">New model deployed</span>
                <span className="text-xs text-muted-foreground ml-auto">1h ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                <span className="text-sm">System maintenance completed</span>
                <span className="text-xs text-muted-foreground ml-auto">3h ago</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;