import { useState } from "react";
import { Layers, ChevronRight } from "lucide-react";
import { fontBody, fontLabel } from "../_showcase-factory";

// ── Token data ────────────────────────────────────────────────────────────────

const fontSizeTokens = [
  { token: "--font-size-h1",      px: "44px", weightToken: "--weight-h1",      weight: "400", role: "Page title" },
  { token: "--font-size-h2",      px: "36px", weightToken: "--weight-h2",      weight: "400", role: "Section title" },
  { token: "--font-size-h3",      px: "28px", weightToken: "--weight-h3",      weight: "700", role: "Heading" },
  { token: "--font-size-h4",      px: "24px", weightToken: "--weight-h4",      weight: "500", role: "Sub-heading" },
  { token: "--font-size-p",       px: "20px", weightToken: "--weight-p",       weight: "400", role: "Body text" },
  { token: "--font-size-label",   px: "20px", weightToken: "--weight-label",   weight: "400", role: "Label" },
  { token: "--font-size-caption", px: "18px", weightToken: "--weight-caption", weight: "400", role: "Caption (minimum ⚠️)" },
  { token: "--font-size-button",  px: "18px", weightToken: "--weight-button",  weight: "600", role: "Button" },
];

const colorGroups = [
  { group: "Text", tokens: [
    { token: "--text-primary",         label: "Primary" },
    { token: "--text-secondary",       label: "Secondary" },
    { token: "--text-disabled",        label: "Disabled" },
    { token: "--text-brand-primary",   label: "Brand" },
    { token: "--text-danger-primary",  label: "Danger" },
    { token: "--text-success-primary", label: "Success" },
    { token: "--text-warning-primary", label: "Warning" },
    { token: "--text-info",            label: "Info" },
  ]},
  { group: "Background", tokens: [
    { token: "--bg-primary",          label: "Primary" },
    { token: "--bg-secondary",        label: "Secondary" },
    { token: "--bg-disabled",         label: "Disabled" },
    { token: "--bg-brand-primary",    label: "Brand Light" },
    { token: "--bg-brand-secondary",  label: "Brand" },
    { token: "--bg-brand-solid",      label: "Brand Solid" },
    { token: "--bg-danger-primary",   label: "Danger" },
    { token: "--bg-danger-solid",     label: "Danger Solid" },
    { token: "--bg-success-primary",  label: "Success" },
    { token: "--bg-success-solid",    label: "Success Solid" },
    { token: "--bg-warning-primary",  label: "Warning" },
    { token: "--bg-info-primary",     label: "Info" },
  ]},
  { group: "Stroke (Border)", tokens: [
    { token: "--stroke-primary",        label: "Primary" },
    { token: "--stroke-secondary",      label: "Secondary" },
    { token: "--stroke-brand",          label: "Brand" },
    { token: "--stroke-brand-solid",    label: "Brand Solid" },
    { token: "--stroke-danger",         label: "Danger" },
    { token: "--stroke-danger-solid",   label: "Danger Solid" },
    { token: "--stroke-success",        label: "Success" },
    { token: "--stroke-success-solid",  label: "Success Solid" },
    { token: "--stroke-warning",        label: "Warning" },
    { token: "--stroke-info",           label: "Info" },
  ]},
  { group: "Foreground", tokens: [
    { token: "--fg-primary",           label: "Primary" },
    { token: "--fg-secondary",         label: "Secondary" },
    { token: "--fg-brand-primary",     label: "Brand" },
    { token: "--fg-danger-primary",    label: "Danger" },
    { token: "--fg-success-primary",   label: "Success" },
    { token: "--fg-warning-primary",   label: "Warning" },
  ]},
];

const radiusTokens = [
  { token: "--radius-none", value: "0px" },
  { token: "--radius-xxs",  value: "2px" },
  { token: "--radius-xs",   value: "4px" },
  { token: "--radius-sm",   value: "6px" },
  { token: "--radius-md",   value: "8px" },
  { token: "--radius-lg",   value: "12px" },
  { token: "--radius-xl",   value: "16px" },
  { token: "--radius-2xl",  value: "20px" },
  { token: "--radius-3xl",  value: "24px" },
  { token: "--radius-4xl",  value: "32px" },
  { token: "--radius-full", value: "9999px" },
];

const elevationTokens = [
  { token: "--elevation-sm", label: "sm",  usage: "Subtle card" },
  { token: "--elevation-md", label: "md",  usage: "Default card" },
  { token: "--elevation-lg", label: "lg",  usage: "Floating panel" },
  { token: "--elevation-xl", label: "xl",  usage: "Modal / overlay" },
];

const brands: { value: Brand; label: string }[] = [
  { value: "ccs3",    label: "Sellsuki / CCS3" },
  { value: "patona",  label: "Patona" },
  { value: "oc2plus", label: "OC2Plus" },
];
type Brand = "ccs3" | "patona" | "oc2plus";

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-foreground font-semibold mb-4" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-h4)" }}>
      {children}
    </h3>
  );
}

function TokenCode({ children }: { children: string }) {
  return (
    <code className="text-primary" style={{ fontFamily: "var(--font-p)", fontSize: "var(--font-size-caption)" }}>
      {children}
    </code>
  );
}

// ── Sections ──────────────────────────────────────────────────────────────────

function TypographySection() {
  return (
    <div className="space-y-10">
      <div>
        <SectionTitle>Font Size</SectionTitle>
        <div className="rounded-xl border border-border overflow-hidden">
          <div className="grid bg-muted/60 px-4 py-2 text-muted-foreground" style={{ gridTemplateColumns: "220px 60px 120px 1fr", ...fontBody }}>
            <span>Token</span><span>px</span><span>Weight token</span><span>Preview</span>
          </div>
          {fontSizeTokens.map((t, i) => (
            <div
              key={t.token}
              className={`grid px-4 py-3 items-center border-t border-border ${t.token === "--font-size-caption" ? "bg-amber-50 dark:bg-amber-950/20" : ""}`}
              style={{ gridTemplateColumns: "220px 60px 120px 1fr" }}
            >
              <TokenCode>{t.token}</TokenCode>
              <span className="text-muted-foreground" style={fontBody}>{t.px}</span>
              <span className="text-muted-foreground" style={fontBody}>{t.weightToken}</span>
              <span style={{ fontFamily: "var(--font-p)", fontSize: `var(${t.token})`, fontWeight: `var(${t.weightToken})`, lineHeight: 1.2 }}>
                {t.role}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-amber-600 dark:text-amber-400" style={fontBody}>
          ⚠️ --font-size-caption (18px) = minimum — ห้ามต่ำกว่านี้
        </p>
      </div>

      <div>
        <SectionTitle>Font Weight</SectionTitle>
        <div className="space-y-2">
          {[
            { token: "--font-weight-normal",   value: "400", label: "Normal" },
            { token: "--font-weight-medium",   value: "500", label: "Medium" },
            { token: "--font-weight-semibold", value: "600", label: "Semibold" },
            { token: "--font-weight-bold",     value: "700", label: "Bold" },
          ].map((w) => (
            <div key={w.token} className="flex items-center gap-6 px-4 py-3 border border-border rounded-xl">
              <TokenCode>{w.token}</TokenCode>
              <span className="text-muted-foreground w-8" style={fontBody}>{w.value}</span>
              <span style={{ fontFamily: "var(--font-p)", fontSize: "var(--font-size-p)", fontWeight: `var(${w.token})` }}>
                The quick brown fox — {w.label} / ก ข ค ง
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ColorsSection({ brand }: { brand: Brand }) {
  return (
    <ssk-app-shell-provider brand={brand}>
      <div className="space-y-8">
        {colorGroups.map((g) => (
          <div key={g.group}>
            <h4 className="text-foreground font-semibold mb-3" style={fontLabel}>{g.group}</h4>
            <div className="flex flex-col gap-2">
              {g.tokens.map((t) => (
                <div key={t.token} className="flex items-center gap-4 px-4 py-2 rounded-xl border border-border">
                  <div
                    className="shrink-0 rounded-lg border border-black/8"
                    style={{ width: 48, height: 48, background: `var(${t.token})`, boxShadow: "0 1px 4px rgba(0,0,0,0.12)" }}
                  />
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <code style={{ fontFamily: "var(--font-p)", fontSize: "var(--font-size-caption, 18px)", color: "var(--text-primary)" }}>
                      {t.token}
                    </code>
                    <span style={{ fontFamily: "var(--font-p)", fontSize: "var(--font-size-caption, 18px)", color: "var(--text-secondary)" }}>
                      {t.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ssk-app-shell-provider>
  );
}

function RadiusSection() {
  return (
    <div className="flex flex-wrap gap-6 items-end">
      {radiusTokens.map((r) => (
        <div key={r.token} className="flex flex-col items-center gap-2">
          <div
            className="w-16 h-16 border-2 border-primary bg-primary/10"
            style={{ borderRadius: `var(${r.token})` }}
          />
          <TokenCode>{r.token}</TokenCode>
          <span className="text-muted-foreground" style={fontBody}>{r.value}</span>
        </div>
      ))}
    </div>
  );
}

function ElevationSection() {
  return (
    <div className="flex flex-wrap gap-10 items-start p-8 rounded-xl bg-muted/40">
      {elevationTokens.map((e) => (
        <div key={e.token} className="flex flex-col items-center gap-3">
          <div
            className="w-36 h-24 bg-background rounded-xl flex items-center justify-center"
            style={{ boxShadow: `var(${e.token})` }}
          >
            <span className="font-semibold" style={{ fontFamily: "var(--font-p)", fontSize: "var(--font-size-h4)" }}>{e.label}</span>
          </div>
          <TokenCode>{e.token}</TokenCode>
          <span className="text-muted-foreground" style={fontBody}>{e.usage}</span>
        </div>
      ))}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

const tabs = ["Typography", "Colors", "Radius", "Elevation"] as const;
type Tab = typeof tabs[number];

export function DS3DesignTokensPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Typography");
  const [activeBrand, setActiveBrand] = useState<Brand>("ccs3");

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-primary mb-2 caption">
          <Layers size={14} /><span>DS 3.0</span><ChevronRight size={12} /><span>Design Tokens</span>
        </div>
        <h2 className="text-foreground" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-h2)", fontWeight: "700", lineHeight: "1.2" }}>
          Design Tokens
        </h2>
        <p className="text-muted-foreground mt-2 max-w-2xl" style={fontBody}>
          ค่า token ทั้งหมดที่ inject ผ่าน <code className="text-primary">ssk-app-shell-provider</code> — ใช้ผ่าน <code className="text-primary">var(--token-name)</code> เสมอ
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-border">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-4 py-2 -mb-px transition-colors ${
              activeTab === t
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
            style={fontBody}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Brand switcher — only for Colors */}
      {activeTab === "Colors" && (
        <div className="flex gap-2">
          {brands.map((b) => (
            <button
              key={b.value}
              onClick={() => setActiveBrand(b.value)}
              className={`px-4 py-1.5 rounded-lg border transition-colors ${
                activeBrand === b.value
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/50"
              }`}
              style={fontBody}
            >
              {b.label}
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      {activeTab === "Typography" && <TypographySection />}
      {activeTab === "Colors"     && <ColorsSection brand={activeBrand} />}
      {activeTab === "Radius"     && <RadiusSection />}
      {activeTab === "Elevation"  && <ElevationSection />}
    </div>
  );
}
