import React, { useState } from "react";
import {
  BookOpen,
  ChevronDown,
  Layers,
  Globe,
  Package,
  Paintbrush,
  SwatchBook,
  BarChart3,
  Navigation,
  LayoutGrid,
  GitPullRequest,
} from "lucide-react";
import { useI18n } from "../i18n";
import { fontBody, fontLabel, btnStyle, smallLabel } from "./_showcase-factory";

// ─── Changelog Data Types ─────────────────────────────────────────────────────

interface ChangelogFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

type ChangelogTag = "new" | "improved" | "fixed" | "breaking" | "preview";

interface ChangelogVersion {
  version: string;
  date: string;
  summary: string;
  tags?: ChangelogTag[];
  features: ChangelogFeature[];
}

// ─── Full Changelog Data — Single Source of Truth ─────────────────────────────

export const changelogVersions: ChangelogVersion[] = [
  {
    version: "3.4.2",
    date: "May 13, 2026",
    summary: "Semantic spacing tokens (10 ตัว) + brand-asset registry + ssk-logo อ่าน brand จาก context อัตโนมัติ — vibe-code ไม่ต้องส่ง brand prop ผ่านทุก component, UX/UI tune spacing globally ผ่าน --space-* tokens",
    tags: ["new", "improved", "fixed"],
    features: [
      {
        icon: <SwatchBook size={16} />,
        title: "Semantic Spacing Tokens — 10 contexts",
        description: "เพิ่ม --space-page-x/y, --space-section, --space-container-x/y, --space-stack, --space-row, --space-cluster, --space-table-cell-x/y. Pattern + component authors ใช้ tokens แทน hardcoded px — UX/UI ปรับ spacing global ครั้งเดียวทั้งระบบ. CI ratchet baseline 114 ป้องกัน hardcoded ใหม่",
      },
      {
        icon: <Paintbrush size={16} />,
        title: "Button token bump 18 → 20px",
        description: "--font-size-button จาก 18 → 20 match กับ body scale (label/input value/sidebar item). ssk-button ใช้ --font-size-button เป็น fallback ใน parseVariables chain — global bump effective ทันทีโดยไม่ต้องแก้ทุก consumer",
      },
      {
        icon: <Package size={16} />,
        title: "Brand-asset registry + brandContext",
        description: "src/contexts/theme/brand-assets.ts — single source of truth สำหรับ logoMark, logoFull, displayName, brandColor keyed by Brand type (ccs3 | patona | oc2plus). brandContext (Lit context) provided ทั้ง <ssk-theme-provider> และ <ssk-app-shell-provider> — descendant อ่าน brand อัตโนมัติ",
      },
      {
        icon: <Layers size={16} />,
        title: "ssk-logo context-aware",
        description: "<ssk-logo></ssk-logo> ใน <ssk-app-shell-provider> render brand mark ถูกต้องโดยไม่ต้องส่ง prop. Resolution chain: srcLogo explicit → brand explicit → brandContext → DEFAULT (ccs3). vibe-code AI ไม่ต้องร้อย brand metadata ผ่านทุก component อีก",
      },
      {
        icon: <BookOpen size={16} />,
        title: "ssk-page-header polish",
        description: "ตัด white background + border-bottom (เหลือ transparent), subtitle font-size 18 → 20 (--font-size-p — readable supporting body), spacing ใช้ --space-container-y / --space-section. Pattern + page consumers ไม่ต้อง wrap ใน card ก่อน",
      },
      {
        icon: <GitPullRequest size={16} />,
        title: "Badge & Tag — no text wrap",
        description: "white-space: nowrap ภายใน pill — order ID #ORD-10042 และ status badge ไม่ขึ้นบรรทัดในตารางแคบอีก",
      },
    ],
  },
  {
    version: "3.4.0",
    date: "May 8, 2026",
    summary: "Pattern source-of-truth — <ssk-pattern-order-management> เป็น Lit element ตัวแรกที่รุกออกไป Storybook + Vibecode Templates + MCP จากไฟล์เดียว, font-size migration ลบ DS 1.0 carryover (sidebar 24→20px และอีก 10 component)",
    tags: ["new", "improved"],
    features: [
      {
        icon: <Layers size={16} />,
        title: "Pattern source-of-truth — <ssk-pattern-order-management>",
        description: "เปิดตัว src/patterns/ — Lit element ที่ห่อหน้า Order Management ครบ (sidebar + navbar + 4 KPI stat cards + status tabs + table 10 rows + pagination) พร้อม brand prop + .data override + static toHtmlString() สำหรับ MCP/contract test. ใช้ตัวเดียวใน Storybook (Patterns/Order Management) + ds3-preview Vibecode Templates Feature Page + ds3-mcp htmlSource — ลบ drift ระหว่าง 3 channels",
      },
      {
        icon: <LayoutGrid size={16} />,
        title: "Vibecode Templates Feature Page — real component render",
        description: "เปลี่ยน Feature Page tab จาก hand-coded React JSX (~250 บรรทัด) เป็น <ssk-pattern-order-management brand=\"ccs3\"> ตัวเดียว — preview ตรง npm package 100%, AI vibe code ที่อ่าน htmlSource ได้ output โครงสร้างเดียวกับที่ผู้ใช้เห็น. Container 600px ห่อ shell แทน fake PreviewShell (CSS grid mimic)",
      },
      {
        icon: <Paintbrush size={16} />,
        title: "Font-size migration — 11 components h4→p (DS 1.0 carryover)",
        description: "DS 1.0 ใช้ --font-size-h4 (24px) เป็น \"important text\" ทั่วไป, DS 3.0 spec แยก h-tokens สำหรับ heading จริงเท่านั้น. Migrate sidebar item, modal body, stepper labels, timeline title, toast content, tab labels, widget table cells → p (20) หรือ button (18). Distribution: h4 ใช้ 15→3 จุด (เหลือเฉพาะ heading จริง), p ใช้ 9→19 จุด",
      },
      {
        icon: <GitPullRequest size={16} />,
        title: "CI Ratchet — non-heading components don't use h-tokens",
        description: "token-spec.test.ts rule ใหม่ \"non-heading components do not use --font-size-h[1-4] for body text\" baseline 4 (modal title h3, page-header title h4, stepper step-circle h4, toast title h4 — heading จริงทั้งหมด). เพิ่ม misuse ใหม่ → CI red. Ratchet ลด baseline ทุกครั้งที่ migrate component เพิ่ม",
      },
      {
        icon: <BookOpen size={16} />,
        title: "CLAUDE.md — Component context → Token table",
        description: "เพิ่มตาราง explicit \"sidebar item / list item / table cell → --font-size-p\", \"button / tab / chip → --font-size-button\", \"caption / hint → --font-size-caption\", \"card title / modal subsection → --font-size-h4\", etc. — developer และ AI consumer ไม่ต้องเดา token ที่ใช้ในแต่ละ context",
      },
      {
        icon: <Package size={16} />,
        title: "Sidebar item — รองรับ default slot label + slot=\"prefix\" icon",
        description: "ssk-sidebar-item จริง ๆ รับ label ผ่าน default slot (ไม่ใช่ label prop ที่ไม่ render), icon ผ่าน slot=\"prefix\" (ไม่มี slot=\"icon\"). ssk-sidebar-group label render เป็น header. แก้ confusion ที่เจอตอน wire pattern เข้า ds3-preview",
      },
    ],
  },
  {
    version: "3.3.0",
    date: "May 7, 2026",
    summary: "Button DS 3.0 — semantic intent API ผ่าน variant+tone (รองรับ 3 brands), Vibecode Contract สำหรับ AI gen, ds3-mcp templates pass 100%",
    tags: ["improved", "breaking"],
    features: [
      {
        icon: <Layers size={16} />,
        title: "Button — `variant` + `tone` API (DS 3.0)",
        description: "API ใหม่: <ssk-button variant=\"solid\" tone=\"brand|danger|success|warning|info\">. Option C composable ผ่าน :host([variant][tone]) — brand switching ทำงานได้ runtime ไม่ต้องแก้โค้ด. Legacy themeColor ยังใช้ได้ (auto-bridge themeColor=\"error\" → tone=\"danger\") พร้อม console.warn",
      },
      {
        icon: <SwatchBook size={16} />,
        title: "31 Button-specific Tokens × 2 brand maps",
        description: "เพิ่ม --button-{variant}-{tone}-{state} ครบ Solid/Outline/Ghost/Solid-Light × Brand/Danger ทั้ง Patona และ Sellsuki + 5 generic --bg-{tone}-solid-hover สำหรับ success/warning/info ที่รอ Figma spec (DES-2013)",
      },
      {
        icon: <Package size={16} />,
        title: "Soft-deprecate 9 escape-hatch props",
        description: "themeColor, color, backgroundColor, borderColor, fontSize, lineHeight, borderWidth, boxShadow, dropShadow → @deprecated JSDoc + runtime console.warn. จะลบจริงใน DS 3.4.0",
      },
      {
        icon: <GitPullRequest size={16} />,
        title: "CI Ratchet — cssVar('colors',...) detection",
        description: "Token spec gate ใหม่จับ palette primitive ที่ bypass semantic tokens. Baseline 44 components — ทุก PR ที่ migrate ลด baseline ลง 1 (ratchet ป้องกัน regression). Mass migration plan: DES-2014",
      },
      {
        icon: <BookOpen size={16} />,
        title: "Vibecode Contract — Public API",
        description: "Export runContract() helper ที่ @uxuissk/design-system-core/test-utils/vibecode-contract — 7 hard-fail rules (root provider, brand whitelist, no hex, font ≥18px, ssk-* tags, no Tailwind, button uses tone). ds3-mcp consume ได้ใน CI",
      },
      {
        icon: <Globe size={16} />,
        title: "ds3-mcp 1.2.1 — Templates 100% pass",
        description: "11 prompt templates × 3 brands = 33 runs, pass rate 9.1% → 100%. แก้ FONT_RULES ที่สอน LLM ใช้ themeColor (legacy), migrate ทุก template เป็น ssk-app-shell-provider, brand_rules + components.json metadata sync DS 3.0 (DES-2016)",
      },
    ],
  },
  {
    version: "3.2.0",
    date: "April 25, 2026",
    summary: "Token enforcement สมบูรณ์ — font ≥18px, color tokens scan, Storybook Design Token Gallery, button box-sizing fix",
    tags: ["improved"],
    features: [
      {
        icon: <Paintbrush size={16} />,
        title: "Token Spec CI Gate",
        description: "ขยาย token-spec.test.ts ให้ scan ทุก component + .storybook/stories/ — hard-fail font-size <18px, ห้าม Tailwind text-xs/text-sm, ห้าม hex literal นอก var(). Soft-baseline สำหรับ stories",
      },
      {
        icon: <SwatchBook size={16} />,
        title: "Storybook Design Token Gallery",
        description: "4 stories ใน .storybook/stories/DesignTokens/: Typography (font-size table + samples), Colors (swatch grid 3 brands), Radius (token visual), Elevation (card shadows sm/md/lg/xl) — sync ตรงกับ semantic-tokens.ts",
      },
      {
        icon: <Layers size={16} />,
        title: "Button — box-sizing fix",
        description: "เพิ่ม box-sizing: border-box ทำให้ทุก variant (solid/outline/ghost/solid-light) ขนาดเท่ากัน — outline เคยใหญ่กว่าเพราะ border 1px นอกกล่อง",
      },
    ],
  },
  {
    version: "3.1.1",
    date: "April 24, 2026",
    summary: "ปรับ font-size token ให้ตรงกับ DS 3.0 spec — xs 16px, sm 18px, md 20px, lg 24px, xl 28px",
    tags: ["improved"],
    features: [
      { icon: <Paintbrush size={16} />, title: "Font Size Token Update (--ssk-font-size-*)", description: "ปรับค่า global font-size token ให้ตรงกับ DS 3.0 design spec: xs=16px, sm=18px, md=20px, lg=24px, xl=28px — ส่งผลต่อทุก component ที่ใช้ size prop เช่น Button, Badge, Tag, Input" },
      { icon: <Layers size={16} />, title: "DS 3.0 Showcase — Lit Web Component Mode", description: "Badge '3.0' ใน sidebar หมายถึง Lit Web Component implementation ไม่ใช่ component ใหม่ — Button และ Input มีอยู่ใน DS 2.0 แต่ DS 3.0 section แสดง version ที่ built ด้วย Lit และ ssk-* Web Components โดยเฉพาะ เข้าถึงได้โดยเลือก mode '3.0' ที่หน้า entry" },
    ],
  },
  {
    version: "3.1.0",
    date: "April 24, 2026",
    summary: "ssk-* เป็น prefix เดียว — ลบ dual registration ออก ทำให้ architecture สะอาด ไม่มี NotSupportedError และ Dev team ย้ายมาได้ทันทีโดยไม่ต้องเรียนรู้ prefix ใหม่",
    tags: ["improved", "breaking"],
    features: [
      { icon: <Layers size={16} />, title: "ssk-* Single Prefix Architecture", description: "ลบ ds-* dual registration ออกจากทุก element — ssk-* คือ prefix เดียวของ DS 3.0 สอดคล้องกับ DS 1.0 ทีม Dev ย้ายมาใช้ได้ทันทีโดยไม่ต้อง migrate prefix" },
      { icon: <Package size={16} />, title: "ลบ NotSupportedError ถาวร", description: "Web Components spec ห้าม register class เดียวกันสองครั้ง การมี dual prefix จึงเป็นต้นเหตุของ NotSupportedError ในทุก scenario — แก้ถาวรด้วยการใช้ prefix เดียว" },
      { icon: <Globe size={16} />, title: "Storybook บน GitHub Pages", description: "Storybook 8 deploy ขึ้น GitHub Pages อัตโนมัติทุก push ขึ้น main สามารถดู live component showcase ได้ที่ bearycenter.github.io/SellsukiDesignsystem3.0" },
      { icon: <GitPullRequest size={16} />, title: "CI/CD ครบวงจร", description: "npm publish trigger ด้วย git tag v* — Storybook deploy trigger ด้วย push to main — ds3-preview Vercel deploy trigger อัตโนมัติทุก push" },
    ],
  },
  {
    version: "3.0.1",
    date: "April 2026",
    summary: "Initial public release of DS 3.0 — Lit 3 Web Components library with 3-layer token architecture, multi-brand theming, zero-dep charts, AppShell, and 50+ components.",
    tags: ["new"],
    features: [
      { icon: <Layers size={16} />, title: "Lit 3 Web Components", description: "Framework-agnostic component library built on Lit 3 and TypeScript. Works in React, Vue, Angular, or plain HTML. Published as @uxuissk/design-system-core on npm." },
      { icon: <SwatchBook size={16} />, title: "3-Layer Token Architecture", description: "Primitive (--ssk-colors-*) → Semantic (--text-primary, --bg-primary, --stroke-primary) → Brand tokens. injectSemanticTokens() switches between patona, ccs3, and oc2plus brands at runtime." },
      { icon: <Paintbrush size={16} />, title: "Multi-Brand Theming", description: "ssk-theme-provider injects semantic tokens and --ssk-colors-* primitive CSS variables via Shadow DOM. Supports patona, ccs3, and oc2plus brand identities." },
      { icon: <BarChart3 size={16} />, title: "Zero-dep SVG Charts", description: "ssk-line-chart, ssk-bar-chart, ssk-donut-chart — pure SVG, no external chart library. Responsive via ResizeObserver, token-driven colors, animated." },
      { icon: <Navigation size={16} />, title: "AppShell Layout", description: "ssk-app-shell provides a responsive grid layout shell. ssk-app-shell-provider injects brand tokens globally. ssk-feature-page-scaffold wraps page content with consistent padding and header." },
      { icon: <LayoutGrid size={16} />, title: "50+ Components", description: "Button, Input, Badge, Avatar, Checkbox, Radio, Toggle, Tag, Alert, Spinner, Skeleton, Tooltip, Accordion, Timeline, Card, Modal, Drawer, Toast, Tabs, Table, Sidebar, Dropdown, and more." },
    ],
  },
];

// Convenience reference
export const latestChangelog = changelogVersions[0];

// ─── Tag Styles ───────────────────────────────────────────────────────────────

const changelogTagStyles: Record<ChangelogTag, { bg: string; text: string }> = {
  new: { bg: "bg-chart-2/15", text: "text-chart-2" },
  improved: { bg: "bg-primary/15", text: "text-primary" },
  fixed: { bg: "bg-chart-5/15", text: "text-chart-5" },
  breaking: { bg: "bg-destructive/15", text: "text-destructive" },
  preview: { bg: "bg-[#f0f9ff]", text: "text-[#0369a1]" },
};

// ─── Component ────────────────────────────────────────────────────────────────

export function ChangelogPage() {
  const { t } = useI18n();

  const tagLabels: Record<ChangelogTag, string> = {
    new: t("changelog.tagNew"),
    improved: t("changelog.tagImproved"),
    fixed: t("changelog.tagFixed"),
    breaking: t("changelog.tagBreaking"),
    preview: "Preview",
  };

  const [expandedVersions, setExpandedVersions] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    changelogVersions.forEach((v, i) => { initial[v.version] = i === 0; });
    return initial;
  });

  const toggleVersion = (version: string) => {
    setExpandedVersions((prev) => ({ ...prev, [version]: !prev[version] }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    changelogVersions.forEach((v) => { all[v.version] = true; });
    setExpandedVersions(all);
  };

  const collapseAll = () => {
    const all: Record<string, boolean> = {};
    changelogVersions.forEach((v) => { all[v.version] = false; });
    setExpandedVersions(all);
  };


  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 text-primary mb-2 caption">
          <BookOpen size={14} /><span>{t("breadcrumb.changelog")}</span>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-foreground" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-h2)", fontWeight: "700", lineHeight: "1.2" }}>{t("page.changelog.title")}</h2>
            <p className="text-muted-foreground mt-1 max-w-2xl" style={fontBody}>
              {t("page.changelog.desc")}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 rounded-[var(--radius-md)] border border-border text-foreground hover:bg-muted transition-colors cursor-pointer"
              style={btnStyle}
            >
              {t("changelog.expandAll")}
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 rounded-[var(--radius-md)] border border-border text-foreground hover:bg-muted transition-colors cursor-pointer"
              style={btnStyle}
            >
              {t("changelog.collapseAll")}
            </button>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden sm:block" />

        <div className="space-y-6">
          {changelogVersions.map((release, idx) => {
            const isLatest = idx === 0;
            const isExpanded = expandedVersions[release.version] ?? false;

            return (
              <div key={release.version} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-[12px] top-[22px] hidden sm:block">
                  <div
                    className={`w-[15px] h-[15px] rounded-full border-2 ${
                      isLatest
                        ? "bg-primary border-primary shadow-[0_0_0_4px_rgba(50,169,255,0.15)]"
                        : "bg-card border-border"
                    }`}
                  />
                </div>

                {/* Card */}
                <div className="sm:ml-12 rounded-[var(--radius-md)] border border-border bg-card overflow-hidden shadow-elevation-sm">
                  {/* Header */}
                  <button
                    onClick={() => toggleVersion(release.version)}
                    className="w-full px-6 py-5 flex items-start gap-4 cursor-pointer hover:bg-muted/30 transition-colors text-left"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div
                        className={`px-3 py-1.5 rounded-[var(--radius)] ${
                          isLatest ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                        }`}
                        style={btnStyle}
                      >
                        v{release.version}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center flex-wrap gap-2 mb-1">
                        <span className="text-foreground" style={{ fontFamily: "var(--font-h4)", fontSize: "var(--text-h4)", fontWeight: "var(--weight-h4)" }}>
                          {isLatest ? t("changelog.latestRelease") : release.version === "1.0.0" ? t("changelog.initialRelease") : `${t("changelog.version")} ${release.version}`}
                        </span>
                        {isLatest && (
                          <span
                            className="px-2 py-0.5 rounded-[var(--radius-sm)] bg-chart-2/15 text-chart-2"
                            style={{ ...btnStyle, lineHeight: "1" }}
                          >
                            {t("changelog.latest")}
                          </span>
                        )}
                        {release.tags?.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-0.5 rounded-[var(--radius-sm)] ${changelogTagStyles[tag].bg} ${changelogTagStyles[tag].text}`}
                            style={{ ...btnStyle, lineHeight: "1" }}
                          >
                            {tagLabels[tag]}
                          </span>
                        ))}
                      </div>
                      <span className="text-muted-foreground block" style={smallLabel}>
                        {release.date} &middot; {release.features.length} {release.features.length === 1 ? t("changelog.change") : t("changelog.changes")}
                      </span>
                      <span className="text-muted-foreground block mt-1" style={fontLabel}>
                        {release.summary}
                      </span>
                    </div>

                    <ChevronDown
                      size={18}
                      className={`text-muted-foreground transition-transform flex-shrink-0 mt-1 ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Expanded content */}
                  {isExpanded && (
                    <div className="border-t border-border">
                      <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {release.features.map((feature) => (
                          <div
                            key={feature.title}
                            className="flex gap-3 p-3.5 rounded-[var(--radius)] bg-background border border-border/50 hover:border-primary/30 transition-colors"
                          >
                            <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-accent flex items-center justify-center flex-shrink-0 text-primary">
                              {feature.icon}
                            </div>
                            <div className="min-w-0">
                              <span
                                className="text-foreground block"
                                style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-label)", fontWeight: "var(--weight-button)" }}
                              >
                                {feature.title}
                              </span>
                              <span className="text-muted-foreground block mt-0.5" style={smallLabel}>
                                {feature.description}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer summary */}
      <div className="rounded-[var(--radius)] border border-border bg-muted/20 px-6 py-4 flex items-center gap-3">
        <Package size={18} className="text-muted-foreground flex-shrink-0" />
        <span className="text-muted-foreground" style={fontLabel}>
          {changelogVersions.length} {t("changelog.releases")} &middot; {t("changelog.startedAt")} v1.0.0 {t("changelog.on")} {changelogVersions[changelogVersions.length - 1].date} &middot; {t("changelog.latest")} v{latestChangelog.version}
        </span>
      </div>
    </div>
  );
}
