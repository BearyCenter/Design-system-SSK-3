import { Layers, ChevronRight } from "lucide-react";
import { Section, DemoCard, APITable, fontBody } from "../_showcase-factory";

export function DS3BadgeShowcase() {
  return (
    <div className="space-y-14">
      <div>
        <div className="flex items-center gap-2 text-primary mb-2 caption">
          <Layers size={14} /><span>DS 3.0</span><ChevronRight size={12} /><span>Badge</span>
        </div>
        <h2 className="text-foreground" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-h2)", fontWeight: "700", lineHeight: "1.2" }}>
          Badge <code className="text-primary text-lg font-mono">ds-badge</code>
        </h2>
        <p className="text-muted-foreground mt-1 max-w-2xl" style={fontBody}>
          Label สำหรับแสดง status, category หรือ count
        </p>
      </div>

      <ds-theme-provider brand="patona">
        <Section title="Colors" description="สีต่างๆ ของ badge"
          code={`<ds-badge>Default</ds-badge>\n<ds-badge color="success">Success</ds-badge>\n<ds-badge color="warning">Warning</ds-badge>\n<ds-badge color="danger">Danger</ds-badge>`}>
          <DemoCard label="Colors">
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <ds-badge>Default</ds-badge>
              <ds-badge color="success">Success</ds-badge>
              <ds-badge color="warning">Warning</ds-badge>
              <ds-badge color="danger">Danger</ds-badge>
              <ds-badge color="info">Info</ds-badge>
            </div>
          </DemoCard>
        </Section>

        <Section title="Sizes" description="sm / md / lg"
          code={`<ds-badge size="sm">Small</ds-badge>\n<ds-badge size="md">Medium</ds-badge>\n<ds-badge size="lg">Large</ds-badge>`}>
          <DemoCard label="Sizes">
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <ds-badge size="sm">Small</ds-badge>
              <ds-badge size="md">Medium</ds-badge>
              <ds-badge size="lg">Large</ds-badge>
            </div>
          </DemoCard>
        </Section>
      </ds-theme-provider>

      <APITable rows={[
        { prop: "color", type: "default | success | warning | danger | info", def: "default", desc: "สีของ badge" },
        { prop: "size", type: "sm | md | lg", def: "md", desc: "ขนาด" },
        { prop: "dot", type: "boolean", def: "false", desc: "แสดงเป็น dot เท่านั้น" },
      ]} />
    </div>
  );
}
