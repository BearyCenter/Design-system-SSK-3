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
          Button <code className="text-primary text-lg font-mono">ssk-button</code>
        </h2>
        <p className="text-muted-foreground mt-1 max-w-2xl" style={fontBody}>
          Lit Web Component — ใช้ทำ primary action ทุกประเภท รองรับ variant, size, loading, disabled
        </p>
      </div>

      <ssk-theme-provider brand="patona">
        <Section title="Variants" description="รูปแบบต่างๆ ของ button"
          code={`<ssk-button variant="solid">Solid</ssk-button>\n<ssk-button variant="outline">Outline</ssk-button>\n<ssk-button variant="ghost">Ghost</ssk-button>\n<ssk-button variant="solid-light">Solid Light</ssk-button>`}>
          <DemoCard label="All variants">
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <ssk-button variant="solid">Solid</ssk-button>
              <ssk-button variant="outline">Outline</ssk-button>
              <ssk-button variant="ghost">Ghost</ssk-button>
              <ssk-button variant="solid-light">Solid Light</ssk-button>
            </div>
          </DemoCard>
        </Section>

        <Section title="Colors" description="themeColor — primary, danger, success, warning"
          code={`<ssk-button themeColor="primary">Primary</ssk-button>\n<ssk-button themeColor="danger">Danger</ssk-button>\n<ssk-button themeColor="success">Success</ssk-button>`}>
          <DemoCard label="Colors">
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <ssk-button themeColor="primary">Primary</ssk-button>
              <ssk-button themeColor="danger">Danger</ssk-button>
              <ssk-button themeColor="success">Success</ssk-button>
            </div>
          </DemoCard>
        </Section>

        <Section title="Sizes" description="sm / md / lg"
          code={`<ssk-button size="sm">Small</ssk-button>\n<ssk-button size="md">Medium</ssk-button>\n<ssk-button size="lg">Large</ssk-button>`}>
          <DemoCard label="Sizes">
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <ssk-button size="sm">Small</ssk-button>
              <ssk-button size="md">Medium</ssk-button>
              <ssk-button size="lg">Large</ssk-button>
            </div>
          </DemoCard>
        </Section>

        <Section title="States" description="disabled"
          code={`<ssk-button disabled>Disabled</ssk-button>`}>
          <DemoCard label="States">
            <div style={{ display: "flex", gap: "12px" }}>
              <ssk-button disabled>Disabled</ssk-button>
            </div>
          </DemoCard>
        </Section>
      </ssk-theme-provider>

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
