import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Brain,
  Lock,
  Mail,
  Menu,
  ScanFace,
  Shield,
  Command,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/80 text-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute -bottom-32 right-8 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_55%)]" />
      </div>

      <div className="relative z-10">
        <header className="border-b border-border/40 bg-background/70 backdrop-blur-xl">
          <div className="container flex items-center justify-between gap-6 py-3">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/logo.svg" 
                alt="walkerwiley Professional Services" 
                className="h-16 w-auto"
              />
            </Link>
            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="border-white/20 bg-white/5 text-foreground hover:bg-white/10 md:hidden">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] border-border/40 bg-background/95 backdrop-blur-xl">
                  <nav className="mt-8 flex flex-col gap-4">
                    <Link
                      to="/"
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:bg-white/10"
                    >
                      <p className="text-sm font-medium text-white">Home</p>
                      <p className="text-xs text-muted-foreground">Product manager consultancy services</p>
                    </Link>
                    <Link
                      to="/work-experience"
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:bg-white/10"
                    >
                      <p className="text-sm font-medium text-white">Work Experience</p>
                      <p className="text-xs text-muted-foreground">Enterprise security and AI leadership</p>
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
              <nav className="hidden items-center gap-6 md:flex">
                <Link
                  to="/"
                  className="text-sm font-medium text-foreground transition hover:text-white"
                >
                  Home
                </Link>
                <Link
                  to="/work-experience"
                  className="text-sm font-medium text-foreground transition hover:text-white"
                >
                  Work Experience
                </Link>
              </nav>
              <div className="hidden items-center gap-4 lg:flex">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 rounded-2xl border border-accent/40 bg-accent/10 px-4 py-3 text-left shadow-[0_18px_40px_-28px_rgba(64,207,255,0.7)]">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/50 bg-background/70">
                    <ScanFace className="h-5 w-5 text-accent" />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.45em] text-accent/80">Now Shipping</p>
                    <p className="text-sm font-medium text-white">Phantom Trace · Deepfake Identifier</p>
                  </div>
                </div>
                <a
                  href="https://bagsy.space"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-primary/40 bg-primary/10 px-4 py-3 text-left shadow-[0_18px_40px_-28px_rgba(120,86,255,0.7)] transition hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/15"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/50 bg-background/70">
                    <Command className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.45em] text-primary/80">Now Shipping</p>
                    <p className="text-sm font-medium text-white">
                      bagsy.space · Driveway Marketplace
                    </p>
                    <p className="text-[11px] text-muted-foreground/80">Born from layoffs—helping people earn semi-passive driveway income.</p>
                  </div>
                </a>
              </div>
              </div>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-white/20 bg-white/5 text-foreground hover:bg-white/10"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/evan-wiley" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Connect
                </a>
              </Button>
            </div>
          </div>
        </header>

        <main>
          <section className="relative border-b border-border/40">
            <div className="container py-24">
              <div className="mx-auto max-w-4xl space-y-8 text-center">
                <Badge variant="secondary" className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                  Product Manager · Consultancy Services
                </Badge>
                <div className="space-y-6">
                  <h1 className="text-balance text-5xl font-semibold leading-tight text-white sm:text-6xl">
                    Product Manager providing {""}
                    <span className="bg-gradient-to-r from-accent via-primary to-primary-glow bg-clip-text text-transparent">
                      consultancy services
                    </span>{" "}
                    for ambitious teams.
                  </h1>
                  <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    I help engineering, GTM, and compliance teams translate complex governance and security challenges into human-centered, revenue-driving products.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-accent via-primary to-primary-glow text-primary-foreground shadow-[0_20px_45px_-20px_rgba(120,86,255,0.6)] transition hover:scale-[1.01]"
                    asChild
                  >
                    <a 
                      href="https://calendly.com/service-champ/1-1-with-evan?utm_source=schedule_from_linkedin" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Book a Strategy Session
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-border/40 py-20">
            <div className="container">
              <div className="mx-auto max-w-3xl space-y-8">
                <div className="text-center space-y-4">
                  <Badge variant="secondary" className="border border-white/10 bg-white/5 uppercase tracking-[0.35em] text-xs text-muted-foreground">
                    Services
                  </Badge>
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">Consultancy Services</h2>
                  <p className="text-base text-muted-foreground">
                    I provide product management consultancy services to help teams build better products.
                  </p>
                </div>
                <Card className="border-accent/30 bg-gradient-to-br from-accent/15 via-transparent to-primary/20 shadow-[0_25px_65px_-35px_rgba(64,207,255,0.6)] backdrop-blur-xl">
                  <CardHeader className="space-y-4 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10">
                      <Brain className="h-7 w-7 text-accent" />
                    </div>
                    <CardTitle className="text-3xl text-white">Product Management Consultancy</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      Strategic partnerships for teams shipping products faster and more effectively.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-left">
                        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                          <Lock className="h-4 w-4 text-accent" />
                          Strategy & Planning
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Product roadmaps</li>
                          <li>• Strategy development</li>
                          <li>• Market analysis</li>
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-left">
                        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                          <Shield className="h-4 w-4 text-accent" />
                          Execution & Delivery
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Product delivery</li>
                          <li>• Team enablement</li>
                          <li>• Process optimization</li>
                        </ul>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-center">
                      <p className="text-sm text-muted-foreground">
                        Ready to improve your product development process? Let's discuss how I can help.
                      </p>
                      <Button 
                        size="lg" 
                        className="mt-5 bg-white text-background hover:bg-white/90"
                        asChild
                      >
                        <a 
                          href="https://calendly.com/service-champ/1-1-with-evan?utm_source=schedule_from_linkedin" 
                          target="_blank" 
                          rel="noreferrer"
                        >
                          <Mail className="mr-2 h-5 w-5" />
                          Discuss Your Project
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-border/40 bg-background/60 py-10 backdrop-blur-xl">
          <div className="container flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Evan Wiley</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Fractional product leadership for AI, security, and compliance-forward teams.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="transition hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="transition hover:text-white">
                GitHub
              </a>
              <a href="#" className="transition hover:text-white">
                Contact
              </a>
            </div>
            <p className="text-xs text-muted-foreground/80">© {new Date().getFullYear()} Evan Wiley. All rights reserved.</p>
          </div>
        </footer>
        </div>
    </div>
  );
};

export default Index;
