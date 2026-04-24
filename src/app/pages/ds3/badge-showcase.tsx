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
          Badge <code className="text-primary text-lg font-mono">ssk-badge</code>
        </h2>
        <p className="text-muted-foreground mt-1 max-w-2xl" style={fontBody}>
          Label สำหรับแสดง status, category หรือ count
        </p>
      </div>

      <ssk-theme-provider brand="patona">
        <Section title="Colors" description="สีต่างๆ ของ badge"
          code={`<ssk-badge>Default</ssk-badge>\n<ssk-badge color="success">Success</ssk-badge>\n<ssk-badge color="warning">Warning</ssk-badge>\n<ssk-badge color="danger">Danger</ssk-badge>`}>
          <DemoCard label="Colors">
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <ssk-badge>Default</ssk-badge>
              <ssk-badge color="success">Success</ssk-badge>
              <ssk-badge color="warning">Warning</ssk-badge>
              <ssk-badge color="danger">Danger</ssk-badge>
              <ssk-badge color="info">Info</ssk-badge>
            </div>
          </DemoCard>
        </Section>

        <Section title="Sizes" description="sm / md / lg"
          code={`<ssk-badge size="sm">Small</ssk-badge>\n<ssk-badge size="md">Medium</ssk-badge>\n<ssk-badge size="lg">Large</ssk-badge>`}>
          <DemoCard label="Sizes">
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <ssk-badge size="sm">Small</ssk-badge>
              <ssk-badge size="md">Medium</ssk-badge>
              <ssk-badge size="lg">Large</ssk-badge>
            </div>
          </DemoCard>
        </Section>
      </ssk-theme-provider>

      <APITable rows={[
        { prop: "color", type: "default | success | warning | danger | info", def: "default", desc: "สีของ badge" },
        { prop: "size", type: "sm | md | lg", def: "md", desc: "ขนาด" },
        { prop: "dot", type: "boolean", def: "false", desc: "แสดงเป็น dot เท่านั้น" },
      ]} />
    </div>
  );
}
