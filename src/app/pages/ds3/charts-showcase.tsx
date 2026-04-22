import { useEffect, useRef } from "react";
import { Layers, ChevronRight } from "lucide-react";
import { Section, DemoCard, APITable, fontBody } from "../_showcase-factory";

const lineSeries = [
  { label: "Revenue", values: [120, 180, 150, 210, 190], color: "#32a9ff" },
  { label: "Orders", values: [80, 100, 130, 90, 160], color: "#10b981" },
];
const lineLabels = ["Jan", "Feb", "Mar", "Apr", "May"];

const barSeries = [
  { label: "Q Revenue", values: [300, 450, 380, 500], color: "#32a9ff" },
  { label: "Q Cost", values: [200, 300, 350, 420], color: "#f59e0b" },
];
const barLabels = ["Q1", "Q2", "Q3", "Q4"];

const donutSlices = [
  { label: "Orders", value: 45, color: "#32a9ff" },
  { label: "Pending", value: 30, color: "#f59e0b" },
  { label: "Cancelled", value: 25, color: "#ef4444" },
];

function LineChartDemo() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (ref.current) {
      (ref.current as any).series = lineSeries;
      (ref.current as any).labels = lineLabels;
    }
  }, []);
  return <ds-line-chart ref={ref as any} style={{ display: "block", width: "100%", height: "280px" }}></ds-line-chart>;
}

function BarChartDemo() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (ref.current) {
      (ref.current as any).series = barSeries;
      (ref.current as any).labels = barLabels;
    }
  }, []);
  return <ds-bar-chart ref={ref as any} style={{ display: "block", width: "100%", height: "280px" }}></ds-bar-chart>;
}

function DonutChartDemo() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (ref.current) {
      (ref.current as any).slices = donutSlices;
    }
  }, []);
  return <ds-donut-chart ref={ref as any} style={{ display: "block", width: "320px", height: "320px" }}></ds-donut-chart>;
}

export function DS3ChartsShowcase() {
  return (
    <div className="space-y-14">
      <div>
        <div className="flex items-center gap-2 text-primary mb-2 caption">
          <Layers size={14} /><span>DS 3.0</span><ChevronRight size={12} /><span>Charts</span>
        </div>
        <h2 className="text-foreground" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-h2)", fontWeight: "700", lineHeight: "1.2" }}>
          Charts <code className="text-primary text-lg font-mono">ds-line-chart / ds-bar-chart / ds-donut-chart</code>
        </h2>
        <p className="text-muted-foreground mt-1 max-w-2xl" style={fontBody}>
          Zero-dependency SVG charts — built into DS 3.0, ไม่ต้องติดตั้ง library เพิ่ม
        </p>
      </div>

      <ds-app-shell-provider brand="patona">
        <Section title="Line Chart" description="ds-line-chart — smooth Catmull-Rom curves, multi-series, responsive"
          code={`// Set via ref (object property, not attribute)\nconst ref = useRef();\nuseEffect(() => {\n  ref.current.series = [{ label: "Revenue", values: [120,180,150,210,190] }];\n  ref.current.labels = ["Jan","Feb","Mar","Apr","May"];\n}, []);\n<ds-line-chart ref={ref}></ds-line-chart>`}>
          <DemoCard label="Line Chart">
            <LineChartDemo />
          </DemoCard>
        </Section>

        <Section title="Bar Chart" description="ds-bar-chart — grouped multi-series"
          code={`ref.current.series = [{ label: "Revenue", values: [300,450,380,500] }];\nref.current.labels = ["Q1","Q2","Q3","Q4"];\n<ds-bar-chart ref={ref}></ds-bar-chart>`}>
          <DemoCard label="Bar Chart">
            <BarChartDemo />
          </DemoCard>
        </Section>

        <Section title="Donut Chart" description="ds-donut-chart — arc path with center label and legend"
          code={`ref.current.slices = [\n  { label: "Orders", value: 45 },\n  { label: "Pending", value: 30 },\n];\n<ds-donut-chart ref={ref}></ds-donut-chart>`}>
          <DemoCard label="Donut Chart">
            <DonutChartDemo />
          </DemoCard>
        </Section>
      </ds-app-shell-provider>

      <APITable rows={[
        { prop: "series", type: "{ label, values, color? }[]", def: "[]", desc: "ข้อมูล series (line/bar) — set via ref" },
        { prop: "labels", type: "string[]", def: "[]", desc: "label แกน X (line/bar) — set via ref" },
        { prop: "slices", type: "{ label, value, color? }[]", def: "[]", desc: "ข้อมูล slice (donut) — set via ref" },
        { prop: "smooth", type: "boolean", def: "true", desc: "Catmull-Rom smooth path (line only)" },
        { prop: "show-legend", type: "boolean", def: "true", desc: "แสดง legend" },
        { prop: "show-grid", type: "boolean", def: "true", desc: "แสดง grid lines" },
      ]} />
    </div>
  );
}
