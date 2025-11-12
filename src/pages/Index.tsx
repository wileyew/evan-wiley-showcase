import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Cloud, Brain, CheckCircle2, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 via-transparent to-primary-glow/5" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-3xl">
            <Badge className="mb-4" variant="secondary">
              Product Portfolio
            </Badge>
            <h1 className="text-5xl font-bold mb-6 text-foreground">
              Evan Wiley
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Security-focused product leader specializing in AI Governance, Cloud Security, 
              and innovative SaaS solutions. Building products that make security accessible 
              and AI deployments responsible.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="shadow-lg">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
              <Button size="lg" variant="outline">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Products & Platforms</h2>
          <p className="text-muted-foreground">
            Enterprise-grade solutions for modern security and collaboration challenges
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* AI Governance */}
          <Card className="border-2 hover:border-primary-accent/50 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary-accent/10 rounded-lg">
                  <Brain className="h-8 w-8 text-primary-accent" />
                </div>
                <Badge>AI Governance</Badge>
              </div>
              <CardTitle className="text-2xl">AI Governance Platform</CardTitle>
              <CardDescription className="text-base mt-2">
                Enterprise-grade governance framework for responsible AI deployment and compliance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Policy enforcement and audit trails for AI models</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Risk assessment and compliance monitoring</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Ethical AI guidelines integration</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">AI/ML</Badge>
                <Badge variant="secondary">Compliance</Badge>
                <Badge variant="secondary">Enterprise</Badge>
              </div>
            </CardContent>
          </Card>

          {/* bagsy.space */}
          <Card className="border-2 hover:border-primary-accent/50 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary-glow/10 rounded-lg">
                  <CheckCircle2 className="h-8 w-8 text-primary-glow" />
                </div>
                <Badge variant="secondary">SaaS Platform</Badge>
              </div>
              <CardTitle className="text-2xl">bagsy.space</CardTitle>
              <CardDescription className="text-base mt-2">
                Collaborative workspace solution for modern teams with real-time coordination
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary-glow mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Real-time collaboration and resource management</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary-glow mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Intuitive booking and scheduling system</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary-glow mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Team coordination tools</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Collaboration</Badge>
                <Badge variant="secondary">Real-time</Badge>
                <Badge variant="secondary">SaaS</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security Experience Section */}
      <section className="bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Security Expertise</h2>
            <p className="text-muted-foreground">
              Deep security experience across logging, monitoring, and cloud security posture management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Security Log Platform */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <Shield className="h-6 w-6 text-destructive" />
                  </div>
                  <CardTitle>Security Log Platform</CardTitle>
                </div>
                <CardDescription>
                  Centralized security event monitoring and threat detection system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Real-time security event aggregation and analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Automated threat detection and alerting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Compliance reporting and audit trail management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Integration with SIEM and security tools</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cloud Security */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-accent/10 rounded-lg">
                    <Cloud className="h-6 w-6 text-primary-accent" />
                  </div>
                  <CardTitle>Cloud Security Posture Management</CardTitle>
                </div>
                <CardDescription>
                  Continuous cloud security assessment and remediation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-accent mt-1">•</span>
                    <span>Multi-cloud security posture assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-accent mt-1">•</span>
                    <span>Automated misconfiguration detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-accent mt-1">•</span>
                    <span>Policy-as-code enforcement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-accent mt-1">•</span>
                    <span>Continuous compliance monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Consultancy Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary-accent/30 bg-gradient-to-br from-primary-accent/5 to-primary-glow/5">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-accent/10 rounded-full">
                  <Brain className="h-10 w-10 text-primary-accent" />
                </div>
              </div>
              <CardTitle className="text-3xl mb-2">AI Consultancy Services</CardTitle>
              <CardDescription className="text-base">
                Available for strategic AI advisory and implementation projects
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-foreground">
                    <Lock className="h-5 w-5 text-primary-accent" />
                    Strategy & Governance
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• AI strategy and roadmap development</li>
                    <li>• Governance framework design</li>
                    <li>• Risk assessment and mitigation</li>
                    <li>• Compliance and ethical AI guidelines</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-foreground">
                    <Shield className="h-5 w-5 text-primary-accent" />
                    Security & Implementation
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Secure AI deployment practices</li>
                    <li>• Model security and privacy</li>
                    <li>• Integration with existing systems</li>
                    <li>• Training and enablement</li>
                  </ul>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border text-center">
                <p className="text-muted-foreground mb-4">
                  Looking for expert guidance on AI adoption, security, or governance?
                </p>
                <Button size="lg" className="shadow-lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Discuss Your Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Evan Wiley. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
