import { Layers, ChevronRight } from "lucide-react";
import { Section, DemoCard, APITable, fontBody } from "../_showcase-factory";

export function DS3InputShowcase() {
  return (
    <div className="space-y-14">
      <div>
        <div className="flex items-center gap-2 text-primary mb-2 caption">
          <Layers size={14} /><span>DS 3.0</span><ChevronRight size={12} /><span>Input</span>
        </div>
        <h2 className="text-foreground" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-h2)", fontWeight: "700", lineHeight: "1.2" }}>
          Input <code className="text-primary text-lg font-mono">ssk-input</code>
        </h2>
        <p className="text-muted-foreground mt-1 max-w-2xl" style={fontBody}>
          Text input — รองรับ label, placeholder, error, disabled, size
        </p>
      </div>

      <ssk-theme-provider brand="patona">
        <Section title="Default" description="Input พื้นฐาน"
          code={`<ssk-input label="ชื่อสินค้า" placeholder="กรอกชื่อ"></ssk-input>`}>
          <DemoCard label="Default">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "400px" }}>
              <ssk-input label="ชื่อสินค้า" placeholder="กรอกชื่อสินค้า"></ssk-input>
              <ssk-input label="อีเมล" placeholder="example@email.com" type="email"></ssk-input>
            </div>
          </DemoCard>
        </Section>

        <Section title="Sizes" description="sm / md / lg"
          code={`<ssk-input size="sm" placeholder="Small"></ssk-input>\n<ssk-input size="md" placeholder="Medium"></ssk-input>\n<ssk-input size="lg" placeholder="Large"></ssk-input>`}>
          <DemoCard label="Sizes">
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "400px" }}>
              <ssk-input size="sm" placeholder="Small input"></ssk-input>
              <ssk-input size="md" placeholder="Medium input"></ssk-input>
              <ssk-input size="lg" placeholder="Large input"></ssk-input>
            </div>
          </DemoCard>
        </Section>

        <Section title="States" description="disabled และ error"
          code={`<ssk-input disabled placeholder="Disabled"></ssk-input>\n<ssk-input error placeholder="Error state"></ssk-input>`}>
          <DemoCard label="States">
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "400px" }}>
              <ssk-input disabled placeholder="Disabled input"></ssk-input>
              <ssk-input error placeholder="Error input"></ssk-input>
            </div>
          </DemoCard>
        </Section>
      </ssk-theme-provider>

      <APITable rows={[
        { prop: "label", type: "string", def: "—", desc: "ข้อความ label" },
        { prop: "placeholder", type: "string", def: "—", desc: "placeholder text" },
        { prop: "type", type: "text | email | password | number", def: "text", desc: "ประเภท input" },
        { prop: "size", type: "sm | md | lg", def: "md", desc: "ขนาด" },
        { prop: "disabled", type: "boolean", def: "false", desc: "ปิดการใช้งาน" },
        { prop: "error", type: "boolean", def: "false", desc: "แสดง error state" },
        { prop: "value", type: "string", def: "—", desc: "ค่าของ input" },
      ]} />
    </div>
  );
}
