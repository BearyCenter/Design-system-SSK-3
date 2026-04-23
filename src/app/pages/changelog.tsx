import React, { useState } from "react";
import {
  BookOpen,
  Search,
  ChevronDown,
  ChevronRight,
  Layers,
  Globe,
  Package,
  Plus,
  User,
  Star,
  Tags,
  Moon,
  Paintbrush,
  SwatchBook,
  BarChart3,
  CreditCard,
  Navigation,
  PanelTop,
  Table2,
  LayoutGrid,
  BadgeCheck,
  BellRing,
  SearchIcon,
  CheckSquare,
  CircleDot,
  CheckCircle2,
  Tag,
  MousePointerClick,
  SquareMousePointer,
  Type,
  PenTool,
  CalendarDays,
  ListOrdered,
  Upload as UploadIcon,
  Bone,
  Inbox,
  ArrowRightLeft,
  Palette,
  Image,
  FolderTree,
  TrendingUp,
  Power,
  Pointer,
  GitPullRequest,
  BellDot,
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
    version: "3.0.2",
    date: "April 23, 2026",
    summary: "ds-* canonical registration guards added to all elements — every component now registers under both ds-* and ssk-* tag names. Storybook v8 deployed on Vercel.",
    tags: ["improved", "fixed"],
    features: [
      { icon: <Layers size={16} />, title: "ds-* Canonical Registration", description: "Added customElements.define guard for ds-* tag on all 50+ elements and components. Both ds-* (canonical) and ssk-* (alias) now register safely with double-registration protection." },
      { icon: <Package size={16} />, title: "Storybook v8 on Vercel", description: "Storybook 8 deployed publicly via GitHub Actions → Vercel CI. All component stories updated to CSF3 format including Charts, AppShell, FilterBar, PageHeader, and AdvancedDataTable." },
      { icon: <Globe size={16} />, title: "npm publish automation", description: "CI workflow now triggers npm publish on v* tag push. @uxuissk/design-system-core@3.0.2 available on npm." },
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
      { icon: <Paintbrush size={16} />, title: "Multi-Brand Theming", description: "ds-theme-provider injects both semantic tokens and --ssk-colors-* primitive CSS variables via Shadow DOM. Supports patona, ccs3, and oc2plus brand identities." },
      { icon: <BarChart3 size={16} />, title: "Zero-dep SVG Charts", description: "ds-line-chart, ds-bar-chart, ds-donut-chart — pure SVG, no external chart library. Responsive via ResizeObserver, token-driven colors, animated." },
      { icon: <Navigation size={16} />, title: "AppShell Layout", description: "ds-app-shell provides a responsive grid layout shell. ds-app-shell-provider injects brand tokens globally. ds-feature-page-scaffold wraps page content with consistent padding and header." },
      { icon: <LayoutGrid size={16} />, title: "50+ Components", description: "Button, Input, Badge, Avatar, Checkbox, Radio, Toggle, Tag, Alert, Spinner, Skeleton, Tooltip, Accordion, Timeline, Card, Modal, Drawer, Toast, Tabs, Table, Sidebar, Dropdown, and more." },
      { icon: <GitPullRequest size={16} />, title: "Deprecated Aliases Observer", description: "MutationObserver warns when ssk-* tags are used directly — guides migration to ds-* canonical names. Backward-compat token bridge (backward-compat.css) maps DS 1.0 variable names to DS 3.0 semantics." },
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
