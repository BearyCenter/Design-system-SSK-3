import { Layers, ChevronRight } from "lucide-react";
import { Section, DemoCard, APITable, fontBody } from "../_showcase-factory";

export function DS3ButtonShowcase() {
  return (
    <div className="space-y-14">
      <div>
        <div className="flex items-center gap-2 text-primary mb-2 caption">
          <Layers size={14} /><span>DS 3.0</span><ChevronRight size={12} /><span>Button</span>
        </div>
        <h2 className="text-foreground" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-h2)", fontWeight: "700", lineHeight: "1.2" }}>
          Button <code className="text-primary text-lg font-mono">ds-button</code>
        </h2>
        <p className="text-muted-foreground mt-1 max-w-2xl" style={fontBody}>
          Lit Web Component — ใช้ทำ primary action ทุกประเภท รองรับ variant, size, loading, disabled
        </p>
      </div>

      <ds-theme-provider brand="patona">
        <Section title="Variants" description="รูปแบบต่างๆ ของ button"
          code={`<ds-button variant="solid">Solid</ds-button>\n<ds-button variant="outline">Outline</ds-button>\n<ds-button variant="ghost">Ghost</ds-button>\n<ds-button variant="solid-light">Solid Light</ds-button>`}>
          <DemoCard label="All variants">
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <ds-button variant="solid">Solid</ds-button>
              <ds-button variant="outline">Outline</ds-button>
              <ds-button variant="ghost">Ghost</ds-button>
              <ds-button variant="solid-light">Solid Light</ds-button>
            </div>
          </DemoCard>
        </Section>

        <Section title="Colors" description="themeColor — primary, danger, success, warning"
          code={`<ds-button themeColor="primary">Primary</ds-button>\n<ds-button themeColor="danger">Danger</ds-button>\n<ds-button themeColor="success">Success</ds-button>`}>
          <DemoCard label="Colors">
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <ds-button themeColor="primary">Primary</ds-button>
              <ds-button themeColor="danger">Danger</ds-button>
              <ds-button themeColor="success">Success</ds-button>
            </div>
          </DemoCard>
        </Section>

        <Section title="Sizes" description="sm / md / lg"
          code={`<ds-button size="sm">Small</ds-button>\n<ds-button size="md">Medium</ds-button>\n<ds-button size="lg">Large</ds-button>`}>
          <DemoCard label="Sizes">
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <ds-button size="sm">Small</ds-button>
              <ds-button size="md">Medium</ds-button>
              <ds-button size="lg">Large</ds-button>
            </div>
          </DemoCard>
        </Section>

        <Section title="States" description="disabled"
          code={`<ds-button disabled>Disabled</ds-button>`}>
          <DemoCard label="States">
            <div style={{ display: "flex", gap: "12px" }}>
              <ds-button disabled>Disabled</ds-button>
            </div>
          </DemoCard>
        </Section>
      </ds-theme-provider>

      <APITable rows={[
        { prop: "variant", type: "solid | outline | ghost | solid-light", def: "solid", desc: "รูปแบบ button" },
        { prop: "themeColor", type: "primary | danger | success | warning | info | ...", def: "primary", desc: "สี button ตาม theme" },
        { prop: "size", type: "sm | md | lg", def: "md", desc: "ขนาด" },
        { prop: "disabled", type: "boolean", def: "false", desc: "ปิดการใช้งาน" },
        { prop: "testId", type: "string", def: "—", desc: "data-testid สำหรับ testing" },
      ]} />
    </div>
  );
}
