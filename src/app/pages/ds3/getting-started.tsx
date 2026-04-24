import { Layers, ChevronRight, CheckCircle2, Package, Zap, Palette, ExternalLink } from "lucide-react";
import { fontBody, fontLabel } from "../_showcase-factory";

export function DS3GettingStartedPage() {
  return (
    <div className="space-y-14 max-w-4xl">
      {/* Breadcrumb + Header */}
      <div>
        <div className="flex items-center gap-2 text-primary mb-2 caption">
          <Layers size={14} />
          <span>Docs</span>
          <ChevronRight size={12} />
          <span>Getting Started</span>
        </div>
        <h2 className="text-foreground" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-h2)", fontWeight: "700", lineHeight: "1.2" }}>
          Getting Started
        </h2>
        <p className="text-muted-foreground mt-2 max-w-2xl" style={fontBody}>
          Installation and usage guide for the Sellsuki Design System 3.0 (<code className="text-primary text-sm">@uxuissk/design-system-core</code>) —
          Web Components (Lit), framework-agnostic, the foundation for every Sellsuki product.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 mt-4">
          {[
            { label: "Components", value: "40+", color: "text-primary" },
            { label: "Version", value: "3.0.1", color: "text-primary" },
            { label: "Architecture", value: "Lit Web Components", color: "text-blue-500" },
            { label: "Tokens", value: "CSS Custom Properties", color: "text-green-500" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-1.5 text-sm" style={fontBody}>
              <span className={`font-bold ${s.color}`}>{s.value}</span>
              <span className="text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { icon: <Package size={20} />, title: "Installation", desc: "ติดตั้งใน 5 นาที" },
          { icon: <Zap size={20} />, title: "Framework-agnostic", desc: "React, Vue, Vanilla HTML" },
          { icon: <Palette size={20} />, title: "Design Tokens", desc: "Semantic token system" },
        ].map((card) => (
          <div key={card.title} className="border border-border rounded-xl p-5 hover:bg-muted/40 transition-colors cursor-pointer">
            <div className="text-primary mb-2">{card.icon}</div>
            <div className="font-semibold text-foreground" style={fontLabel}>{card.title}</div>
            <div className="text-muted-foreground text-sm mt-1" style={fontBody}>{card.desc}</div>
          </div>
        ))}
      </div>

      {/* Storybook link */}
      <a
        href="https://sellsukidesignsystemv12.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-primary text-primary rounded-lg px-4 py-2 text-sm hover:bg-primary/5 transition-colors"
        style={fontLabel}
      >
        <ExternalLink size={14} />
        Storybook (DS 2.0 Reference)
      </a>

      {/* Prerequisites */}
      <div>
        <h3 className="text-foreground font-semibold mb-4" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-h4)" }}>
          Prerequisites
        </h3>
        <div className="border border-border rounded-xl p-6 space-y-3">
          <p className="text-foreground font-medium mb-4" style={fontBody}>ก่อนเริ่มติดตั้ง ตรวจสอบว่ามี:</p>
          {[
            { label: "Node.js", detail: "v18.0 ขึ้นไป" },
            { label: "Package Manager", detail: "npm, yarn, หรือ pnpm" },
            { label: "@uxuissk/design-system-core", detail: "Design System library (Lit Web Components)" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-green-500 shrink-0" />
              <span className="text-foreground font-medium" style={fontBody}>
                <code className="text-primary text-sm">{item.label}</code>
                <span className="text-muted-foreground ml-2">— {item.detail}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Installation */}
      <div>
        <h3 className="text-foreground font-semibold mb-4" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-h4)" }}>
          Installation
        </h3>
        <div className="rounded-xl bg-muted/60 border border-border p-5 font-mono text-sm space-y-1">
          <div className="text-muted-foreground"># Install DS 3.0</div>
          <div className="text-foreground">npm install @uxuissk/design-system-core@3.0.1</div>
        </div>
      </div>

      {/* Setup */}
      <div>
        <h3 className="text-foreground font-semibold mb-4" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-h4)" }}>
          Required Setup
        </h3>
        <div className="rounded-xl bg-muted/60 border border-border p-5 font-mono text-sm space-y-1">
          <div className="text-muted-foreground">{"// main.ts — import once at root"}</div>
          <div className="text-primary">{"import '@uxuissk/design-system-core';"}</div>
          <div className="mt-3 text-muted-foreground">{"<!-- Wrap root with provider — injects all tokens -->"}</div>
          <div className="text-foreground">{'<ssk-app-shell-provider brand="patona">'}</div>
          <div className="text-foreground pl-4">{'<ssk-button>Hello DS 3.0</ssk-button>'}</div>
          <div className="text-foreground">{'</ssk-app-shell-provider>'}</div>
        </div>

        <div className="mt-4 border border-amber-200 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800 rounded-xl p-4 text-sm" style={fontBody}>
          <span className="font-semibold text-amber-700 dark:text-amber-400">⚠️ Required: </span>
          <span className="text-amber-700 dark:text-amber-300">
            ทุก project ต้องครอบด้วย <code className="font-mono">{"<ssk-app-shell-provider>"}</code> — หากไม่มี component จะไม่มีสีและ token
          </span>
        </div>
      </div>

      {/* Brand values */}
      <div>
        <h3 className="text-foreground font-semibold mb-4" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-h4)" }}>
          Brand Values
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {["patona", "ccs3", "oc2plus"].map((brand) => (
            <div key={brand} className="border border-border rounded-lg p-4 text-center">
              <code className="text-primary font-mono text-sm">"{brand}"</code>
            </div>
          ))}
        </div>
      </div>

      {/* Live Demo */}
      <div>
        <h3 className="text-foreground font-semibold mb-4" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-h4)" }}>
          Live Demo — DS 3.0 Components
        </h3>
        <div className="border border-border rounded-xl p-6 space-y-4">
          <ssk-app-shell-provider brand="patona">
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
              <ssk-button>Primary</ssk-button>
              <ssk-button variant="outline">Outline</ssk-button>
              <ssk-button variant="ghost">Ghost</ssk-button>
              <ssk-badge>Badge</ssk-badge>
              <ssk-badge color="success">Success</ssk-badge>
              <ssk-spinner size="sm"></ssk-spinner>
            </div>
            <div style={{ marginTop: "16px" }}>
              <ssk-input placeholder="DS 3.0 input component" style={{ width: "300px" }}></ssk-input>
            </div>
          </ssk-app-shell-provider>
        </div>
      </div>
    </div>
  );
}
