import { useState } from "react";
import { Layers, ChevronRight, Copy, Check, Zap } from "lucide-react";
import { fontBody, fontLabel } from "../_showcase-factory";

// ── Template definitions ──────────────────────────────────────────────────────

interface Template {
  id: string;
  name: string;
  tag: string;
  prompt: string;
  description: string;
  htmlSource: string;
  preview: () => React.ReactNode;
}

const featurePagePreview = () => (
  <ssk-theme-provider brand="ccs3">
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <ssk-page-header title="Order Management">
        <ssk-button slot="action" variant="solid" themeColor="primary">
          + New Order
        </ssk-button>
      </ssk-page-header>
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
        <ssk-alert themeColor="info">
          Feature พร้อมพัฒนา — เพิ่ม component ตาม use case ได้เลย
        </ssk-alert>
        <ssk-card>
          <ssk-heading slot="header">Order Overview</ssk-heading>
          <div style={{ display: "flex", gap: 16, padding: 16, flexWrap: "wrap" }}>
            <ssk-badge color="primary">Total: 0</ssk-badge>
            <ssk-badge color="success">Completed: 0</ssk-badge>
            <ssk-badge color="warning">Pending: 0</ssk-badge>
            <ssk-badge color="danger">Cancelled: 0</ssk-badge>
          </div>
        </ssk-card>
      </div>
    </div>
  </ssk-theme-provider>
);

const productListPreview = () => (
  <ssk-theme-provider brand="ccs3">
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ssk-page-header title="Product List">
        <ssk-button slot="action" variant="solid" themeColor="primary">
          + New Product
        </ssk-button>
      </ssk-page-header>
      <ssk-filter-bar>
        <ssk-input slot="search" placeholder="Search Product..."></ssk-input>
        <ssk-dropdown slot="filter" label="Category"></ssk-dropdown>
        <ssk-dropdown slot="filter" label="Status"></ssk-dropdown>
      </ssk-filter-bar>
      <ssk-table sortable selectable>
        <thead>
          <tr>
            <th>ID</th>
            <th>ชื่อสินค้า</th>
            <th>หมวดหมู่</th>
            <th>ราคา</th>
            <th>สถานะ</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PRD-001</td>
            <td>สินค้าตัวอย่าง A</td>
            <td>Electronics</td>
            <td>฿1,290</td>
            <td><ssk-badge color="success">Active</ssk-badge></td>
            <td style={{ display: "flex", gap: 8 }}>
              <ssk-button variant="ghost" size="sm">Edit</ssk-button>
              <ssk-button variant="ghost" themeColor="danger" size="sm">Delete</ssk-button>
            </td>
          </tr>
          <tr>
            <td>PRD-002</td>
            <td>สินค้าตัวอย่าง B</td>
            <td>Fashion</td>
            <td>฿590</td>
            <td><ssk-badge color="warning">Draft</ssk-badge></td>
            <td style={{ display: "flex", gap: 8 }}>
              <ssk-button variant="ghost" size="sm">Edit</ssk-button>
              <ssk-button variant="ghost" themeColor="danger" size="sm">Delete</ssk-button>
            </td>
          </tr>
        </tbody>
      </ssk-table>
      <ssk-pagination total="24" pageSize="10"></ssk-pagination>
    </div>
  </ssk-theme-provider>
);

const productFormPreview = () => (
  <ssk-theme-provider brand="ccs3">
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <ssk-page-header title="Create Order">
        <ssk-button slot="action" variant="outline">Cancel</ssk-button>
      </ssk-page-header>
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
        <ssk-alert themeColor="danger">
          ตัวอย่าง — กรุณากรอกข้อมูลให้ครบถ้วน
        </ssk-alert>
        <ssk-card>
          <ssk-heading slot="header">ข้อมูล Order</ssk-heading>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 24 }}>
            <ssk-input label="ชื่อลูกค้า" placeholder="ชื่อลูกค้า" required></ssk-input>
            <ssk-dropdown label="สินค้า" required></ssk-dropdown>
            <ssk-input label="จำนวน" type="number" placeholder="0" required></ssk-input>
            <ssk-date-picker label="วันที่จัดส่ง"></ssk-date-picker>
            <ssk-textarea label="หมายเหตุ" placeholder="หมายเหตุเพิ่มเติม..."></ssk-textarea>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, marginTop: 8 }}>
              <ssk-button variant="outline" type="button">Cancel</ssk-button>
              <ssk-button variant="solid" themeColor="primary" type="submit">
                Save Order
              </ssk-button>
            </div>
          </div>
        </ssk-card>
      </div>
    </div>
  </ssk-theme-provider>
);

const templates: Template[] = [
  {
    id: "feature-page",
    name: "Feature Page",
    tag: "create_feature_page",
    description: "Starting point สำหรับ feature ใหม่ — PageHeader + Action + content area",
    prompt: `ขอช่วยสร้าง feature ใหม่ชื่อ "Order Management" สำหรับ Sellsuki
ใช้ Design System DS 3.0 (มี MCP ds3 ติดตั้งแล้ว)
brand = ccs3, primary action = "+ New Order"
ขอ HTML พร้อมใช้เลย`,
    htmlSource: `<ssk-app-shell-provider brand="ccs3">
  <ssk-app-shell>
    <ssk-page-header title="Order Management">
      <ssk-button slot="action" variant="solid" themeColor="primary">+ New Order</ssk-button>
    </ssk-page-header>
    <div style="padding: 24px;">
      <ssk-alert themeColor="info">Feature พร้อมพัฒนา</ssk-alert>
      <ssk-card>
        <ssk-heading slot="header">Order Overview</ssk-heading>
        <ssk-badge color="primary">Total: 0</ssk-badge>
        <ssk-badge color="success">Completed: 0</ssk-badge>
        <ssk-badge color="warning">Pending: 0</ssk-badge>
        <ssk-badge color="danger">Cancelled: 0</ssk-badge>
      </ssk-card>
    </div>
  </ssk-app-shell>
</ssk-app-shell-provider>`,
    preview: featurePagePreview,
  },
  {
    id: "product-list",
    name: "Product List",
    tag: "create_product_list",
    description: "List page — PageHeader + FilterBar + Table + Pagination",
    prompt: `ขอช่วยสร้างหน้า list สินค้า สำหรับ Sellsuki CCS3
ใช้ DS 3.0 MCP
entity = Product
columns = ID, ชื่อสินค้า, หมวดหมู่, ราคา, สถานะ, Action
ขอ HTML AppShell พร้อมใช้`,
    htmlSource: `<ssk-app-shell-provider brand="ccs3">
  <ssk-app-shell>
    <ssk-page-header title="Product List">
      <ssk-button slot="action" variant="solid" themeColor="primary">+ New Product</ssk-button>
    </ssk-page-header>
    <ssk-filter-bar>
      <ssk-input slot="search" placeholder="Search Product..."></ssk-input>
      <ssk-dropdown slot="filter" label="Category"></ssk-dropdown>
      <ssk-dropdown slot="filter" label="Status"></ssk-dropdown>
    </ssk-filter-bar>
    <ssk-table sortable selectable>
      <thead>
        <tr><th>ID</th><th>ชื่อสินค้า</th><th>หมวดหมู่</th><th>ราคา</th><th>สถานะ</th><th>Action</th></tr>
      </thead>
      <tbody>
        <!-- rows here -->
      </tbody>
    </ssk-table>
    <ssk-pagination total="100" pageSize="10"></ssk-pagination>
  </ssk-app-shell>
</ssk-app-shell-provider>`,
    preview: productListPreview,
  },
  {
    id: "product-form",
    name: "Product Form",
    tag: "create_product_form",
    description: "Create/Edit form — PageHeader + Alert + Card + Validation",
    prompt: `ขอช่วยสร้างฟอร์ม create order สำหรับ Sellsuki
ใช้ DS 3.0 MCP, brand = ccs3
entity = Order
fields = ชื่อลูกค้า, สินค้า, จำนวน, วันที่จัดส่ง, หมายเหตุ
มี validation และ cancel/save button
ขอ HTML AppShell พร้อมใช้`,
    htmlSource: `<ssk-app-shell-provider brand="ccs3">
  <ssk-app-shell>
    <ssk-page-header title="Create Order">
      <ssk-button slot="action" variant="outline">Cancel</ssk-button>
    </ssk-page-header>
    <div style="padding: 24px;">
      <ssk-alert themeColor="danger">กรุณากรอกข้อมูลให้ครบถ้วน</ssk-alert>
      <ssk-card>
        <ssk-heading slot="header">ข้อมูล Order</ssk-heading>
        <form>
          <ssk-input label="ชื่อลูกค้า" required></ssk-input>
          <ssk-dropdown label="สินค้า" required></ssk-dropdown>
          <ssk-input label="จำนวน" type="number" required></ssk-input>
          <ssk-date-picker label="วันที่จัดส่ง"></ssk-date-picker>
          <ssk-textarea label="หมายเหตุ"></ssk-textarea>
          <ssk-button variant="outline">Cancel</ssk-button>
          <ssk-button variant="solid" themeColor="primary" type="submit">Save Order</ssk-button>
        </form>
      </ssk-card>
    </div>
  </ssk-app-shell>
</ssk-app-shell-provider>`,
    preview: productFormPreview,
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
      style={fontBody}
    >
      {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
      {copied ? "Copied!" : "Copy prompt"}
    </button>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────

export function DS3VibecodesPage() {
  const [active, setActive] = useState(templates[0].id);
  const current = templates.find((t) => t.id === active)!;

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-primary mb-2 caption">
          <Layers size={14} /><span>DS 3.0</span><ChevronRight size={12} /><span>Vibecode Templates</span>
        </div>
        <h2 className="text-foreground" style={{ fontFamily: "var(--font-label)", fontSize: "var(--text-h2)", fontWeight: "700", lineHeight: "1.2" }}>
          Vibecode Templates
        </h2>
        <p className="text-muted-foreground mt-2 max-w-2xl" style={fontBody}>
          Prompt สำเร็จรูปสำหรับ Sellsuki product — copy prompt → paste ใน AI ที่ติดตั้ง MCP ds3 แล้ว → ได้ code พร้อมใช้ทันที
        </p>
        <div className="flex items-center gap-2 mt-3 px-3 py-2 rounded-lg bg-primary/5 border border-primary/20 w-fit" style={fontBody}>
          <Zap size={14} className="text-primary" />
          <span className="text-primary">Default brand = Sellsuki (CCS3) — เปลี่ยน brand ได้ใน prompt</span>
        </div>
      </div>

      {/* Template tabs */}
      <div className="flex gap-1 border-b border-border">
        {templates.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`px-4 py-2 -mb-px transition-colors ${
              active === t.id
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
            style={fontBody}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* Template detail */}
      <div className="space-y-6">
        <p className="text-muted-foreground" style={fontBody}>{current.description}</p>

        {/* Prompt section */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-foreground font-semibold" style={fontLabel}>
              💬 Vibe Prompt
            </h3>
            <CopyButton text={current.prompt} />
          </div>
          <div className="rounded-xl border border-border bg-muted/20 p-5">
            <p style={{ ...fontBody, whiteSpace: "pre-wrap", color: "var(--text-primary)" }}>
              {current.prompt}
            </p>
          </div>
        </div>

        {/* Live preview — JSX direct render with own ssk-theme-provider */}
        <div>
          <h3 className="text-foreground font-semibold mb-3" style={fontLabel}>
            ✅ ผลลัพธ์ที่ได้จริง
          </h3>
          <div className="rounded-xl border border-border overflow-hidden">
            <div key={current.id} className="p-6 bg-background min-h-64">
              {current.preview()}
            </div>
            <details className="border-t border-border">
              <summary
                className="px-4 py-2 cursor-pointer text-muted-foreground hover:text-foreground bg-muted/40 select-none"
                style={fontBody}
              >
                ดู HTML source (สำหรับ AI generate)
              </summary>
              <div className="p-4 bg-muted/20 overflow-x-auto">
                <pre style={{ fontFamily: "var(--font-p)", fontSize: "var(--font-size-caption)", color: "var(--text-primary)", whiteSpace: "pre-wrap" }}>
                  {current.htmlSource}
                </pre>
              </div>
            </details>
          </div>
        </div>

        <div className="text-muted-foreground" style={fontBody}>
          MCP prompt name: <code className="text-primary" style={{ fontFamily: "var(--font-p)" }}>{current.tag}</code>
        </div>
      </div>
    </div>
  );
}
