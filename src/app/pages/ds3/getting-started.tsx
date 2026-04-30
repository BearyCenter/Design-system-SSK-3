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
          Installation and usage guide for the Sellsuki Design System 3.0 (<code className="text-primary">@uxuissk/design-system-core</code>) —
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
            <div key={s.label} className="flex items-center gap-1.5" style={fontBody}>
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
            <div className="text-muted-foreground mt-1" style={fontBody}>{card.desc}</div>
          </div>
        ))}
      </div>

      {/* Storybook link */}
      <a
        href="https://sellsukidesignsystemv12.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-primary text-primary rounded-lg px-4 py-2 hover:bg-primary/5 transition-colors"
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
                <code className="text-primary">{item.label}</code>
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
        <div className="rounded-xl bg-muted/60 border border-border p-5 space-y-1">
          <div className="text-muted-foreground"># Install DS 3.0</div>
          <div className="text-foreground">npm install @uxuissk/design-system-core@3.2.0</div>
        </div>
      </div>

      {/* Setup */}
      <div>
        <h3 className="text-foreground font-semibold mb-4" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-h4)" }}>
          Required Setup
        </h3>
        <div className="rounded-xl bg-muted/60 border border-border p-5 space-y-1">
          <div className="text-muted-foreground">{"// main.ts — import once at root"}</div>
          <div className="text-primary">{"import '@uxuissk/design-system-core';"}</div>
          <div className="mt-3 text-muted-foreground">{"<!-- Wrap root with provider — injects all tokens -->"}</div>
          <div className="text-foreground">{'<ssk-app-shell-provider brand="patona">'}</div>
          <div className="text-foreground pl-4">{'<ssk-button>Hello DS 3.0</ssk-button>'}</div>
          <div className="text-foreground">{'</ssk-app-shell-provider>'}</div>
        </div>

        <div className="mt-4 border border-amber-200 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800 rounded-xl p-4" style={fontBody}>
          <span className="font-semibold text-amber-700 dark:text-amber-400">⚠️ Required: </span>
          <span className="text-amber-700 dark:text-amber-300">
            ทุก project ต้องครอบด้วย <code className="">{"<ssk-app-shell-provider>"}</code> — หากไม่มี component จะไม่มีสีและ token
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
              <code className="text-primary">"{brand}"</code>
            </div>
          ))}
        </div>
      </div>

      {/* AI Integration — MCP & REST */}
      <div>
        <h3 className="text-foreground font-semibold mb-2" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-h4)" }}>
          AI Integration — Vibecode ด้วย MCP
        </h3>
        <p className="text-muted-foreground mb-4" style={fontBody}>
          ติดตั้ง <code className="text-primary">@uxuissk/ds3-mcp</code> เพื่อให้ AI (Claude, Cursor, Codex, ChatGPT) เข้าใจ DS 3.0 และสร้าง code ที่ใช้ ssk-* ถูกต้อง 100%
        </p>

        {/* Endpoints summary */}
        <div className="border border-border rounded-xl p-6 mb-4 bg-muted/20">
          <h4 className="text-foreground font-semibold mb-3" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-label)" }}>
            🌐 Endpoints
          </h4>
          <div className="space-y-2" style={fontBody}>
            <div>
              <span className="text-muted-foreground">Streamable HTTP MCP:</span>{" "}
              <code className="text-primary">https://ds3-mcp.vercel.app/api/mcp</code>
            </div>
            <div>
              <span className="text-muted-foreground">stdio MCP (npm):</span>{" "}
              <code className="text-primary">npx -y @uxuissk/ds3-mcp</code>
            </div>
            <div>
              <span className="text-muted-foreground">REST API:</span>{" "}
              <code className="text-primary">https://ds3-mcp.vercel.app/api/v1/*</code>
            </div>
            <div>
              <span className="text-muted-foreground">OpenAPI:</span>{" "}
              <code className="text-primary">https://ds3-mcp.vercel.app/api/v1/openapi.json</code>
            </div>
          </div>
        </div>

        {/* Setup per AI */}
        <h4 className="text-foreground font-semibold mb-3 mt-6" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-label)" }}>
          🔌 Setup ต่อ AI
        </h4>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {/* Claude Code / Cursor */}
          <div className="border border-border rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold" style={{ fontFamily: "var(--font-label)" }}>Claude Code / Cursor</span>
              <ssk-badge color="info">stdio</ssk-badge>
            </div>
            <p className="text-muted-foreground mb-3" style={fontBody}>เพิ่มใน <code className="">.mcp.json</code></p>
            <pre className="bg-muted rounded-lg p-3 overflow-x-auto">
{`{
  "mcpServers": {
    "ds3": {
      "command": "npx",
      "args": ["-y", "@uxuissk/ds3-mcp"]
    }
  }
}`}
            </pre>
          </div>

          {/* claude.ai */}
          <div className="border border-border rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold" style={{ fontFamily: "var(--font-label)" }}>claude.ai (web)</span>
              <ssk-badge color="success">HTTP</ssk-badge>
            </div>
            <p className="text-muted-foreground mb-3" style={fontBody}>Settings → Integrations → Add custom MCP</p>
            <pre className="bg-muted rounded-lg p-3 overflow-x-auto">
{`URL: https://ds3-mcp.vercel.app/api/mcp
Name: Sellsuki DS 3.0`}
            </pre>
          </div>

          {/* Codex */}
          <div className="border border-border rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold" style={{ fontFamily: "var(--font-label)" }}>Codex (OpenAI)</span>
              <ssk-badge color="success">HTTP</ssk-badge>
            </div>
            <p className="text-muted-foreground mb-3" style={fontBody}>เพิ่มใน <code className="">~/.codex/config.toml</code></p>
            <pre className="bg-muted rounded-lg p-3 overflow-x-auto">
{`[mcp_servers.ds3]
url = "https://ds3-mcp.vercel.app/api/mcp"`}
            </pre>
          </div>

          {/* ChatGPT */}
          <div className="border border-border rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold" style={{ fontFamily: "var(--font-label)" }}>ChatGPT</span>
              <ssk-badge color="warning">Custom GPT</ssk-badge>
            </div>
            <p className="text-muted-foreground mb-3" style={fontBody}>Create Custom GPT → Action → Import OpenAPI</p>
            <pre className="bg-muted rounded-lg p-3 overflow-x-auto">
{`https://ds3-mcp.vercel.app/api/v1/openapi.json`}
            </pre>
          </div>
        </div>

        {/* Capabilities */}
        <h4 className="text-foreground font-semibold mb-3 mt-6" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-label)" }}>
          🛠️ MCP Capabilities
        </h4>
        <div className="grid md:grid-cols-3 gap-3 mb-4">
          <div className="border border-border rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold" style={{ fontFamily: "var(--font-label)" }}>Tools</span>
              <ssk-badge>11</ssk-badge>
            </div>
            <p className="text-muted-foreground" style={fontBody}>list_components, get_component, get_design_tokens, suggest, validate, generate_form, ...</p>
          </div>
          <div className="border border-border rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold" style={{ fontFamily: "var(--font-label)" }}>Resources</span>
              <ssk-badge>90+</ssk-badge>
            </div>
            <p className="text-muted-foreground" style={fontBody}>ds3://components/*, ds3://tokens/*, ds3://brands/* — markdown docs ของแต่ละ component</p>
          </div>
          <div className="border border-border rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold" style={{ fontFamily: "var(--font-label)" }}>Prompts</span>
              <ssk-badge>7</ssk-badge>
            </div>
            <p className="text-muted-foreground" style={fontBody}>create_login_form, create_dashboard, create_crud_page, create_table_view, create_onboarding_flow, ...</p>
          </div>
        </div>

        {/* Quick Test */}
        <h4 className="text-foreground font-semibold mb-3 mt-6" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-label)" }}>
          🧪 Quick Test (verify ก่อนใช้)
        </h4>
        <div className="border border-border rounded-xl p-5 mb-4">
          <p className="text-muted-foreground mb-2" style={fontBody}>Test endpoint:</p>
          <pre className="bg-muted rounded-lg p-3 overflow-x-auto mb-3">
{`curl https://ds3-mcp.vercel.app/api/mcp`}
          </pre>
          <p className="text-muted-foreground mb-2" style={fontBody}>Expected response:</p>
          <pre className="bg-muted rounded-lg p-3 overflow-x-auto">
{`{
  "status": "ok",
  "server": "ds3-mcp",
  "version": "1.1.0",
  "transport": "streamable-http",
  "capabilities": ["tools", "resources", "prompts"]
}`}
          </pre>
        </div>

        {/* Sample Vibecode prompt */}
        <h4 className="text-foreground font-semibold mb-3 mt-6" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-label)" }}>
          💬 ลอง Vibecode (paste ใน AI ที่ register MCP แล้ว)
        </h4>
        <div className="border border-border rounded-xl p-5 bg-muted/20">
          <p style={{ ...fontBody, whiteSpace: "pre-wrap" }}>
{`ขอช่วยทำหน้า login form สำหรับ Sellsuki CCS3
ใช้ Design System DS 3.0 ของเรา (มี MCP ds3 ติดตั้งให้แล้ว)
ลองเรียกดูเองว่ามี component อะไรบ้าง ใช้ brand ccs3
ขอ HTML ที่เอาไปใช้ได้เลย`}
          </p>
        </div>

        <div className="mt-4 text-muted-foreground" style={fontBody}>
          📚 ดูคู่มือเต็ม:{" "}
          <a href="https://github.com/BearyCenter/ds3-mcp/blob/main/SETUP.md" target="_blank" rel="noopener" className="text-primary hover:underline">SETUP.md</a>{" • "}
          <a href="https://github.com/BearyCenter/ds3-mcp/blob/main/HOW_TO_PO.md" target="_blank" rel="noopener" className="text-primary hover:underline">HOW_TO_PO</a>{" • "}
          <a href="https://github.com/BearyCenter/ds3-mcp/blob/main/HOW_TO_UXUI.md" target="_blank" rel="noopener" className="text-primary hover:underline">HOW_TO_UXUI</a>{" • "}
          <a href="https://github.com/BearyCenter/ds3-mcp/blob/main/HOW_TO_DEV.md" target="_blank" rel="noopener" className="text-primary hover:underline">HOW_TO_DEV</a>
        </div>
      </div>
    </div>
  );
}
