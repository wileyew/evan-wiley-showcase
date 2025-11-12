import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Brain,
  CheckCircle2,
  Cloud,
  Command,
  Cpu,
  Lock,
  LucideIcon,
  Mail,
  Radar,
  ScanFace,
  Shield,
  Sparkles,
} from "lucide-react";

const Index = () => {
  const productHighlights: {
    title: string;
    tag: string;
    icon: LucideIcon;
    accent: "accent" | "primary" | "glow";
    description: string;
    bullets: string[];
    badges: string[];
    href: string;
  }[] = [
    {
      title: "AI Governance Platform",
      tag: "Responsible AI",
      icon: Brain,
      accent: "accent",
      description: "Enterprise-grade governance framework for responsible AI adoption and compliance at scale.",
      bullets: [
        "Policy orchestration with automated guardrails and audit trails",
        "Continuous risk scoring tuned to your regulatory landscape",
        "Transparent decision intelligence for executive stakeholders",
      ],
      badges: ["AI/ML", "Compliance", "Enterprise"],
      href: "https://www.overflowprompts.net",
    },
    {
      title: "bagsy.space",
      tag: "SaaS Platform",
      icon: Command,
      accent: "primary",
      description: "Modern collaboration OS for cross-functional teams operating in high-velocity environments.",
      bullets: [
        "Realtime occupancy intelligence and smart booking",
        "Unified comms with context-aware notifications",
        "Modular workspace APIs for internal tooling",
      ],
      badges: ["Collaboration", "Realtime", "SaaS"],
      href: "https://bagsy.space",
    },
  ];

  const securityFocus = [
    {
      title: "Security Log Platform",
      icon: Shield,
      description: "Centralized security telemetry with AI-assisted anomaly detection and guided remediation.",
      bullets: [
        "Federated log ingestion with zero data drift",
        "Adaptive detection powered by threat-informed ML",
        "Regulator-ready reporting in one click",
        "Native integrations across SIEM and SOAR ecosystems",
      ],
    },
    {
      title: "Cloud Security Posture",
      icon: Cloud,
      description: "Blueprints for cloud-native teams to deploy secure, compliant infrastructure from day zero.",
      bullets: [
        "Multi-cloud posture scoring tied to business risk",
        "Misconfiguration prevention with policy-as-code",
        "Continuous compliance with automated evidence",
        "Actionable workflows mapped to engineering backlogs",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/80 text-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute -bottom-32 right-8 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_55%)]" />
      </div>

      <div className="relative z-10">
        <header className="border-b border-border/40 bg-background/70 backdrop-blur-xl">
          <div className="container flex items-center justify-between gap-6 py-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-background/60 shadow-[0_0_20px_rgba(120,86,255,0.35)]">
                <Sparkles className="h-5 w-5 text-primary" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Evan Wiley</p>
                <p className="text-sm text-muted-foreground">Security Product Leader · AI Governance · Cloud</p>
              </div>
            </div>
            <div className="hidden items-center gap-4 md:flex">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 rounded-2xl border border-accent/40 bg-accent/10 px-4 py-3 text-left shadow-[0_18px_40px_-28px_rgba(64,207,255,0.7)]">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/50 bg-background/70">
                    <ScanFace className="h-5 w-5 text-accent" />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.45em] text-accent/80">Now Shipping</p>
                    <p className="text-sm font-medium text-white">Veridex · Deepfake Identifier</p>
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
              <Button size="sm" variant="outline" className="border-white/20 bg-white/5 text-foreground hover:bg-white/10">
                <Mail className="mr-2 h-4 w-4" />
                Connect
              </Button>
            </div>
          </div>
        </header>

        <main>
          <section className="relative border-b border-border/40">
            <div className="container grid gap-12 py-24 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-8">
                <Badge variant="secondary" className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                  Product Portfolio
                </Badge>
                <div className="space-y-6">
                  <h1 className="text-balance text-5xl font-semibold leading-tight text-white sm:text-6xl">
                    Building trusted {""}
                    <span className="bg-gradient-to-r from-accent via-primary to-primary-glow bg-clip-text text-transparent">
                      security and AI platforms
                    </span>{" "}
                    for ambitious teams.
                  </h1>
                  <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    I translate complex governance and security problems into human-centered, revenue-driving products.
                    From zero-to-one discovery to scaled expansion, I partner with engineering, GTM, and compliance teams
                    to ship outcomes users trust.
                  </p>
                  <p className="max-w-xl text-sm uppercase tracking-[0.32em] text-muted-foreground/80">
                    <a href="https://bagsy.space" target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/40 underline-offset-4 transition hover:text-primary/80 hover:decoration-primary/60">
                      bagsy.space
                    </a>{" "}
                    emerged during tech layoffs—reimagining driveways as semi-passive income streams for resilient operators.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-accent via-primary to-primary-glow text-primary-foreground shadow-[0_20px_45px_-20px_rgba(120,86,255,0.6)] transition hover:scale-[1.01]">
                    <Mail className="mr-2 h-5 w-5" />
                    Book a Strategy Session
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/15 bg-white/5 text-foreground hover:bg-white/10">
                    View Live Products
                  </Button>
                </div>
                <div className="grid gap-6 sm:grid-cols-3">
                  <Card className="border-white/10 bg-white/[0.04] backdrop-blur-md">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-muted-foreground">SecOps Velocity</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-3xl font-semibold text-white">86%</p>
                      <p className="text-xs text-muted-foreground">Mean time to resolution reduction</p>
                    </CardContent>
                  </Card>
                  <Card className="border-white/10 bg-white/[0.04] backdrop-blur-md">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-muted-foreground">Governance Uplift</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-3xl font-semibold text-white">3x</p>
                      <p className="text-xs text-muted-foreground">Regulatory readiness acceleration</p>
                    </CardContent>
                  </Card>
                  <Card className="border-white/10 bg-white/[0.04] backdrop-blur-md">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-muted-foreground">Team Impact</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-3xl font-semibold text-white">15+</p>
                      <p className="text-xs text-muted-foreground">Security & AI launches shipped</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative flex flex-col gap-6">
                <Card className="border-white/10 bg-white/[0.04] backdrop-blur-md">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <Sparkles className="h-5 w-5 text-accent" />
                      <CardTitle className="text-lg text-white">Career Impact</CardTitle>
                    </div>
                    <CardDescription className="text-sm text-muted-foreground">
                      Outcomes from leading AI security and log intelligence products.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 leading-relaxed">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                      <span>Spearheaded AI-modeled threat detection vision and strategy, elevating security posture across the Salesforce ecosystem.</span>
                    </div>
                    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 leading-relaxed">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                      <span>Drove initiatives that unlocked $300M+ ACV by strengthening customer trust through actionable threat detection.</span>
                    </div>
                    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 leading-relaxed">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                      <span>Operationalized an enterprise log management platform, enabling rapid search and investigation of potential incidents.</span>
              </div>
            </CardContent>
          </Card>
                <Card className="border-white/10 bg-white/[0.04] backdrop-blur-md">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <Cloud className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg text-white">Cloud Security Wins</CardTitle>
                    </div>
                    <CardDescription className="text-sm text-muted-foreground">
                      Scaling governance and protection across hyperscale environments.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 leading-relaxed">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                      <span>Led migration of CSPM platforms spanning 10k+ Salesforce public cloud accounts to expand multi-cloud misconfiguration coverage.</span>
                    </div>
                    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 leading-relaxed">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                      <span>Program-managed security launches for Gov Cloud, unlocking $900M+ in annual order value.</span>
                    </div>
                    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 leading-relaxed">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                      <span>Directed retail and consumer goods security programs driving $200M+ in annual order value.</span>
                    </div>
                    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 leading-relaxed">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                      <span>Deployed policy guardrails to blunt external and insider threats before exploit paths materialized.</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-white/10 bg-white/[0.04] backdrop-blur-md">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-white">Operator Principles</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      Grounding beliefs from shipping governance, security, and sustainability products.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      Build trust-first platforms where compliance is a feature—not a constraint.
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      Design feedback loops that convert telemetry into decisive, human-readable insight.
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      Prioritize economic resilience—ship experiences that create new income streams for users.
                </div>
                  </CardContent>
                </Card>
              </div>
                </div>
          </section>

          <section className="border-b border-border/40 py-20">
            <div className="container space-y-12">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl space-y-4">
                  <Badge variant="secondary" className="border border-white/10 bg-white/5 uppercase tracking-[0.35em] text-xs text-muted-foreground">
                    Products & Platforms
                  </Badge>
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">Secure experiences engineered for velocity</h2>
                  <p className="text-base text-muted-foreground">
                    Designed to scale from scrappy pilot teams to global enterprises, each platform blends robust security with an experience-first product mindset.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Radar className="h-6 w-6 text-accent" />
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Signal Strength · Verified</p>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {productHighlights.map(({ title, tag, icon: Icon, accent, description, bullets, badges, href }) => (
                  <Card
                    key={title}
                    className="group relative border-white/10 bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_25px_55px_-30px_rgba(120,86,255,0.55)]"
                  >
                    <div className="absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="h-full w-full rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-primary/30 blur-[32px]" />
                    </div>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="relative flex h-full flex-col rounded-3xl p-1 text-left transition group-hover:brightness-[1.05]"
                    >
                      <CardHeader className="relative">
                        <div className="flex items-start justify-between gap-6">
                          <div className="inline-flex rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                            <Icon
                              className={`h-7 w-7 ${
                                accent === "accent" ? "text-accent" : accent === "primary" ? "text-primary" : "text-primary-glow"
                              }`}
                            />
                          </div>
                          <Badge variant="secondary" className="border border-white/15 bg-white/10 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                            {tag}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl text-white underline decoration-transparent transition group-hover:decoration-accent/60">
                          {title}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
                      </CardHeader>
                      <CardContent className="relative space-y-6">
                        <div className="space-y-3">
                          {bullets.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </div>
                          ))}
              </div>
              <div className="flex flex-wrap gap-2">
                          {badges.map((badge) => (
                            <Badge key={badge} variant="secondary" className="border border-white/10 bg-white/5 text-xs text-muted-foreground">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </a>
                  </Card>
                ))}
              </div>
        </div>
      </section>

          <section className="border-b border-border/40 bg-white/[0.03] py-20 backdrop-blur-xl">
            <div className="container space-y-12">
              <div className="max-w-3xl space-y-4">
                <Badge variant="secondary" className="border border-white/10 bg-white/5 uppercase tracking-[0.35em] text-xs text-muted-foreground">
                  Security Craft
                </Badge>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Full-spectrum security experience</h2>
                <p className="text-base text-muted-foreground">
                  I build operating models that harmonize product velocity with the rigor of enterprise security. From data
                  pipelines to customer trust, every layer is intentional.
            </p>
          </div>
          
              <div className="grid gap-8 lg:grid-cols-2">
                {securityFocus.map(({ title, icon: Icon, description, bullets }) => (
                  <Card key={title} className="border-white/10 bg-white/[0.04] backdrop-blur-lg">
              <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                          <Icon className="h-6 w-6 text-primary" />
                  </div>
                        <div>
                          <CardTitle className="text-xl text-white">{title}</CardTitle>
                          <CardDescription className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                            Security Product Strategy
                </CardDescription>
                  </div>
                </div>
                      <CardDescription className="pt-3 text-sm text-muted-foreground">{description}</CardDescription>
              </CardHeader>
              <CardContent>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        {bullets.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                            <span>{item}</span>
                  </li>
                        ))}
                </ul>
              </CardContent>
            </Card>
                ))}
          </div>
        </div>
      </section>

          <section className="py-20">
            <div className="container grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div className="space-y-8">
                <Badge variant="secondary" className="border border-white/10 bg-white/5 uppercase tracking-[0.35em] text-xs text-muted-foreground">
                  Advisory Services
                </Badge>
                <Card className="border-accent/30 bg-gradient-to-br from-accent/15 via-transparent to-primary/20 shadow-[0_25px_65px_-35px_rgba(64,207,255,0.6)] backdrop-blur-xl">
                  <CardHeader className="space-y-4 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10">
                      <Brain className="h-7 w-7 text-accent" />
                </div>
                    <CardTitle className="text-3xl text-white">AI Consultancy Services</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      Strategic partnerships for executives who need responsible AI and security initiatives to ship faster with conviction.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-left">
                        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                          <Lock className="h-4 w-4 text-accent" />
                    Strategy & Governance
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• AI roadmaps and value articulation</li>
                    <li>• Governance framework design</li>
                          <li>• Risk modeling & mitigation</li>
                          <li>• Regulatory readiness</li>
                  </ul>
                </div>
                      <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-left">
                        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                          <Shield className="h-4 w-4 text-accent" />
                          Security & Delivery
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Secure ML pipeline design</li>
                          <li>• Privacy and model safeguards</li>
                          <li>• GTM & customer onboarding</li>
                          <li>• Team enablement programs</li>
                  </ul>
                </div>
              </div>
                    <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-center">
                      <p className="text-sm text-muted-foreground">
                        Ready to align product velocity with governance rigor? Let’s architect a roadmap designed for your stage.
                      </p>
                      <Button size="lg" className="mt-5 bg-white text-background hover:bg-white/90">
                  <Mail className="mr-2 h-5 w-5" />
                  Discuss Your Project
                </Button>
              </div>
            </CardContent>
          </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-white/10 bg-white/[0.04] backdrop-blur-xl">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Sparkles className="h-5 w-5 text-accent" />
                      <CardTitle className="text-lg text-white">Selected Signals</CardTitle>
                    </div>
                    <CardDescription className="text-sm text-muted-foreground">
                      Themes and outputs I focus on when partnering with technical founders and CISOs.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground/80">Trust Design</p>
                      <p className="mt-2 text-muted-foreground">
                        Weaving security and compliance narratives directly into user journeys to build credibility from first touch.
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground/80">Data-Informed velocity</p>
                      <p className="mt-2 text-muted-foreground">
                        Instrumenting product discovery and usage analytics so product bets stay tethered to signal-rich feedback loops.
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground/80">Modern GTM</p>
                      <p className="mt-2 text-muted-foreground">
                        Aligning security, product marketing, and customer success to tell a unified story that resonates with technical buyers.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-white/10 bg-white/[0.04] backdrop-blur-xl">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Cpu className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg text-white">Tooling DNA</CardTitle>
                    </div>
                    <CardDescription className="text-sm text-muted-foreground">
                      Operator-level familiarity with the stacks modern data, security, and product teams rely on.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-3 sm:grid-cols-2">
                    {["Snowflake", "Databricks", "Netskope", "Snyk", "Vanta", "Notion", "Linear", "Mode"].map((tool) => (
                      <div key={tool} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted-foreground">
                        {tool}
                      </div>
                    ))}
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
