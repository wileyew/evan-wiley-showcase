import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Cloud, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const WorkExperience = () => {
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
          </div>
        </header>

        <main>
          <section className="border-b border-border/40 py-20">
            <div className="container space-y-12">
              <div className="max-w-3xl space-y-4">
                <Badge variant="secondary" className="border border-white/10 bg-white/5 uppercase tracking-[0.35em] text-xs text-muted-foreground">
                  Work Experience
                </Badge>
                <h1 className="text-3xl font-semibold text-white sm:text-4xl">Enterprise security and AI leadership</h1>
                <p className="text-base text-muted-foreground">
                  Outcomes from leading security and AI products at scale.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="border-white/10 bg-white/[0.04] backdrop-blur-md">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <Brain className="h-5 w-5 text-accent" />
                      <CardTitle className="text-lg text-white">AI Security & Threat Detection</CardTitle>
                    </div>
                    <CardDescription className="text-sm text-muted-foreground">
                      Leading AI security and log intelligence products.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 leading-relaxed">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                      <span>Spearheaded AI-modeled threat detection strategy, elevating security posture across enterprise ecosystems.</span>
                    </div>
                    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 leading-relaxed">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                      <span>Drove initiatives that unlocked $300M+ ACV through actionable threat detection.</span>
                    </div>
                    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 leading-relaxed">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                      <span>Operationalized enterprise log management platform for rapid incident investigation.</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-white/10 bg-white/[0.04] backdrop-blur-md">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <Cloud className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg text-white">Cloud Security & Governance</CardTitle>
                    </div>
                    <CardDescription className="text-sm text-muted-foreground">
                      Scaling governance and protection across hyperscale environments.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 leading-relaxed">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                      <span>Led CSPM migration across 10k+ cloud accounts, expanding multi-cloud coverage.</span>
                    </div>
                    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 leading-relaxed">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                      <span>Program-managed Gov Cloud security launches, unlocking $900M+ in annual order value.</span>
                    </div>
                    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 leading-relaxed">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                      <span>Directed retail security programs driving $200M+ in annual order value.</span>
                    </div>
                    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 leading-relaxed">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                      <span>Deployed policy guardrails to prevent external and insider threats.</span>
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

export default WorkExperience;

