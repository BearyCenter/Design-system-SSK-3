import { useState } from "react";
import { Layers, ChevronRight, Copy, Check, Zap } from "lucide-react";
import { fontBody, fontLabel } from "../_showcase-factory";

// ── Template definitions ──────────────────────────────────────────────────────
//
// Each preview/htmlSource pair mirrors the actual output of
// `@uxuissk/ds3-mcp@1.2.1` getPrompt(...) for the matching tag. Keep in sync
// with src/prompts/index.ts in BearyCenter/ds3-mcp.
// Verified via runContract() — passes 7-rule DS 3.0 vibecode contract.

interface Template {
  id: string;
  name: string;
  tag: string;
  prompt: string;
  description: string;
  htmlSource: string;
  preview: () => React.ReactNode;
}

// ── Layout helpers ────────────────────────────────────────────────────────────
//
// JSX preview renders MAIN CONTENT AREA only (no app-shell/sidebar wrappers).
// Reason: <ssk-app-shell> + <ssk-sidebar> use Shadow-DOM slot distribution that
// requires explicit container height; in a React preview without parent height
// they collapse to empty rows. The full app-shell + sidebar markup is preserved
// in `htmlSource` so AI consumers still receive contract-conformant output.
//
// Visual: thin "sidebar marker" bar on the left + page header + content area
// to hint at the real production layout without breaking the live render.

function PreviewShell({ sidebarLabel, children }: { sidebarLabel: string; children: React.ReactNode }) {
  return (
    <ssk-app-shell-provider brand="ccs3">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "180px 1fr",
          minHeight: 400,
          background: "var(--bg-quaternary, #f9fafb)",
          border: "1px solid var(--stroke-primary, #e5e7eb)",
          borderRadius: "var(--radius-md, 8px)",
          overflow: "hidden",
        }}
      >
        {/* Sidebar marker (simplified — full ssk-sidebar in htmlSource) */}
        <aside
          style={{
            background: "var(--bg-primary, #fff)",
            borderRight: "1px solid var(--stroke-primary, #e5e7eb)",
            padding: "20px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: "var(--bg-brand-solid, #32A9FF)" }} />
            <span style={{ fontFamily: "var(--font-label)", fontSize: "var(--font-size-caption)", fontWeight: 600, color: "var(--text-primary)" }}>
              Sellsuki
            </span>
          </div>
          <div
            style={{
              padding: "10px 12px",
              borderRadius: "var(--radius-sm, 6px)",
              background: "var(--bg-brand-primary, #f0f9ff)",
              color: "var(--fg-brand-primary, #32A9FF)",
              fontFamily: "var(--font-label)",
              fontSize: "var(--font-size-caption)",
              fontWeight: 500,
            }}
          >
            {sidebarLabel}
          </div>
        </aside>

        {/* Main content */}
        <main style={{ display: "flex", flexDirection: "column", overflow: "auto" }}>
          {children}
        </main>
      </div>
    </ssk-app-shell-provider>
  );
}

// ── 1. Feature Page ───────────────────────────────────────────────────────────
// Order Management dashboard — renders the canonical <ssk-pattern-order-management>
// Lit element from @uxuissk/design-system-core. Single source of truth: the same
// element is used by the Storybook story in sellsuki-components-main, by this
// preview, and by ds3-mcp's getPrompt() htmlSource. No drift between channels.
//
// The element internally wraps in <ssk-app-shell-provider> + <ssk-app-shell> with
// height:100% so it fills the bounded container we give it (600px works fine,
// verified via Storybook's Bounded600 story).

const featurePagePreview = () => (
  <div
    style={{
      height: 600,
      width: "100%",
      border: "1px solid var(--stroke-secondary, #e5e7eb)",
      borderRadius: "var(--radius-lg, 12px)",
      overflow: "hidden",
    }}
  >
    {/* ssk-theme-provider injects --ssk-colors-* tokens needed by ssk-button/ */}
    {/* badge/tag internal styles. ssk-app-shell-provider sets brand semantic */}
    {/* tokens (--bg-primary, --text-secondary, etc.) — both providers needed.  */}
    <ssk-theme-provider brand="ccs3" style={{ display: "block", height: "100%" }}>
      <ssk-pattern-order-management brand="ccs3"></ssk-pattern-order-management>
    </ssk-theme-provider>
  </div>
);

// ── 2. Product List ───────────────────────────────────────────────────────────

const productListPreview = () => (
  <PreviewShell sidebarLabel="Product List">
    <ssk-page-header title="Product List">
      <ssk-button slot="action" variant="solid" tone="brand">
        + New Product
      </ssk-button>
    </ssk-page-header>
    <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
      <ssk-filter-bar>
        <ssk-input slot="search" placeholder="Search Product..."></ssk-input>
        <ssk-dropdown slot="filter" label="Category"></ssk-dropdown>
        <ssk-dropdown slot="filter" label="Status"></ssk-dropdown>
      </ssk-filter-bar>
      <ssk-card>
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
                <ssk-button variant="ghost" tone="danger" size="sm">Delete</ssk-button>
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
                <ssk-button variant="ghost" tone="danger" size="sm">Delete</ssk-button>
              </td>
            </tr>
          </tbody>
        </ssk-table>
      </ssk-card>
      <ssk-pagination total="24" pageSize="10"></ssk-pagination>
    </div>
  </PreviewShell>
);

// ── 3. Product Form ───────────────────────────────────────────────────────────

const productFormPreview = () => (
  <PreviewShell sidebarLabel="Order">
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
            <ssk-button variant="solid" tone="brand" type="submit">
              Save Order
            </ssk-button>
          </div>
        </div>
      </ssk-card>
    </div>
  </PreviewShell>
);

// ── 4. Analytics Widget ───────────────────────────────────────────────────────

const analyticsWidgetPreview = () => (
  <PreviewShell sidebarLabel="Analytics">
    <ssk-page-header title="Analytics">
      <ssk-button slot="action" variant="outline">Export</ssk-button>
    </ssk-page-header>
    <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
      <ssk-filter-bar>
        <ssk-date-picker slot="filter" label="Period" range></ssk-date-picker>
        <ssk-dropdown slot="filter" label="Compare"></ssk-dropdown>
      </ssk-filter-bar>
      <ssk-widget-grid>
        <ssk-widget-matric label="Sales" subText="vs last period"></ssk-widget-matric>
        <ssk-widget-matric label="Orders" subText="vs last period"></ssk-widget-matric>
        <ssk-widget-matric label="Customers" subText="vs last period"></ssk-widget-matric>
      </ssk-widget-grid>
      <ssk-card>
        <ssk-heading slot="header">Sales Trend</ssk-heading>
        <ssk-line-chart></ssk-line-chart>
      </ssk-card>
    </div>
  </PreviewShell>
);

// ── Templates registry — mirrors ds3-mcp 1.2.1 Phase 5 ───────────────────────

const templates: Template[] = [
  {
    id: "feature-page",
    name: "Feature Page",
    tag: "create_feature_page",
    description:
      "Order management dashboard — AppShell + Sidebar + 4 KPI stat cards + status tab filter + order table + pagination. Use as starting point for any list/dashboard feature.",
    prompt: `ขอช่วยสร้าง feature page "Order Management" สำหรับ Sellsuki แบบครบเครื่อง
ใช้ Design System DS 3.0 (MCP ds3 ติดตั้งแล้ว — เรียก get_brand_rules + get_component ก่อน gen)
brand = ccs3, primary action = "+ สร้างออเดอร์"

โครงสร้างที่ต้องมี:
1. <ssk-app-shell-provider brand="ccs3"> เป็น root (ห้าม ssk-theme-provider)
2. <ssk-sidebar> มี ≥3 sidebar-items (Dashboard, Orders, Products, …)
3. <ssk-page-header title=… subtitle=…> + primary action button
4. Stat cards 4 ใบ — แสดง KPI + delta % + trend (↗/↘) สีตาม success/danger
5. Order list panel — toolbar (Filter/Export) + status tabs + table ≥5 rows + pagination
6. ทุกข้อมูลต้องเป็น realistic (ตัวเลข ฿, ชื่อลูกค้าไทย, order ID monospace)

กฎเข้มงวด:
- <ssk-button variant="solid|outline|ghost" tone="brand|danger|success|warning|info">
- ห้าม themeColor บน button (deprecated), ห้าม background-color/font-size inline
- font-size ≥ 18px เท่านั้น (ห้าม text-xs/text-sm/16px)
- ใช้ semantic tokens: var(--bg-primary), var(--text-secondary), var(--fg-brand-primary), var(--stroke-secondary)`,
    htmlSource: `<ssk-app-shell-provider brand="ccs3">
  <ssk-app-shell>

    <ssk-sidebar slot="sidebar">
      <ssk-logo slot="logo"></ssk-logo>
      <ssk-sidebar-group>
        <ssk-sidebar-items label="Dashboard"></ssk-sidebar-items>
        <ssk-sidebar-items label="Orders" active></ssk-sidebar-items>
        <ssk-sidebar-items label="Products"></ssk-sidebar-items>
        <ssk-sidebar-items label="Customers"></ssk-sidebar-items>
        <ssk-sidebar-items label="Reports"></ssk-sidebar-items>
      </ssk-sidebar-group>
    </ssk-sidebar>

    <main>
      <ssk-page-header
        title="Order Management"
        subtitle="จัดการออเดอร์ทั้งหมดจากทุกช่องทาง"
      >
        <ssk-button slot="action" variant="solid" tone="brand">
          + สร้างออเดอร์
        </ssk-button>
      </ssk-page-header>

      <div style="padding: 24px; display: flex; flex-direction: column; gap: 20px;">

        <!-- 4 KPI stat cards with delta % and trend -->
        <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
          <div style="padding: 20px; background: var(--bg-primary); border: 1px solid var(--stroke-secondary); border-radius: var(--radius-lg);">
            <ssk-text style="color: var(--text-secondary); font-size: var(--font-size-caption);">ยอดขายวันนี้</ssk-text>
            <ssk-heading level="2">฿128,450</ssk-heading>
            <ssk-text style="color: var(--fg-success-primary); font-size: var(--font-size-caption);">↗ 12.5% vs yesterday</ssk-text>
          </div>
          <div style="padding: 20px; background: var(--bg-primary); border: 1px solid var(--stroke-secondary); border-radius: var(--radius-lg);">
            <ssk-text style="color: var(--text-secondary); font-size: var(--font-size-caption);">ออเดอร์ใหม่</ssk-text>
            <ssk-heading level="2">47</ssk-heading>
            <ssk-text style="color: var(--fg-success-primary); font-size: var(--font-size-caption);">↗ 8.2% vs yesterday</ssk-text>
          </div>
          <div style="padding: 20px; background: var(--bg-primary); border: 1px solid var(--stroke-secondary); border-radius: var(--radius-lg);">
            <ssk-text style="color: var(--text-secondary); font-size: var(--font-size-caption);">ลูกค้าใหม่</ssk-text>
            <ssk-heading level="2">23</ssk-heading>
            <ssk-text style="color: var(--fg-success-primary); font-size: var(--font-size-caption);">↗ 3.1% vs yesterday</ssk-text>
          </div>
          <div style="padding: 20px; background: var(--bg-primary); border: 1px solid var(--stroke-secondary); border-radius: var(--radius-lg);">
            <ssk-text style="color: var(--text-secondary); font-size: var(--font-size-caption);">สินค้าคงเหลือ</ssk-text>
            <ssk-heading level="2">1,847</ssk-heading>
            <ssk-text style="color: var(--fg-danger-primary); font-size: var(--font-size-caption);">↘ 2.4% vs yesterday</ssk-text>
          </div>
        </section>

        <!-- Order list panel: toolbar + status tabs + table + pagination -->
        <div style="background: var(--bg-primary); border: 1px solid var(--stroke-secondary); border-radius: var(--radius-lg); overflow: hidden;">
          <div style="padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--stroke-secondary);">
            <ssk-heading level="4">รายการออเดอร์</ssk-heading>
            <div style="display: flex; gap: 8px;">
              <ssk-button variant="outline" tone="brand">Filter</ssk-button>
              <ssk-button variant="outline" tone="brand">Export</ssk-button>
            </div>
          </div>

          <div role="tablist" style="display: flex; gap: 8px; padding: 12px 20px; border-bottom: 1px solid var(--stroke-secondary); overflow-x: auto;">
            <button role="tab" aria-selected="true"  style="padding: 8px 16px; border-radius: var(--radius-full); font-size: var(--font-size-caption); background: var(--bg-brand-secondary); color: var(--fg-brand-primary); border: 1px solid var(--fg-brand-primary); cursor: pointer;">ทั้งหมด <span style="margin-left: 8px;">156</span></button>
            <button role="tab" aria-selected="false" style="padding: 8px 16px; border-radius: var(--radius-full); font-size: var(--font-size-caption); background: transparent; color: var(--text-secondary); border: 1px solid var(--stroke-secondary); cursor: pointer;">รอยืนยัน <span style="margin-left: 8px;">23</span></button>
            <button role="tab" aria-selected="false" style="padding: 8px 16px; border-radius: var(--radius-full); font-size: var(--font-size-caption); background: transparent; color: var(--text-secondary); border: 1px solid var(--stroke-secondary); cursor: pointer;">ยืนยันแล้ว <span style="margin-left: 8px;">45</span></button>
            <button role="tab" aria-selected="false" style="padding: 8px 16px; border-radius: var(--radius-full); font-size: var(--font-size-caption); background: transparent; color: var(--text-secondary); border: 1px solid var(--stroke-secondary); cursor: pointer;">กำลังจัดส่ง <span style="margin-left: 8px;">67</span></button>
            <button role="tab" aria-selected="false" style="padding: 8px 16px; border-radius: var(--radius-full); font-size: var(--font-size-caption); background: transparent; color: var(--text-secondary); border: 1px solid var(--stroke-secondary); cursor: pointer;">สำเร็จ <span style="margin-left: 8px;">21</span></button>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: var(--font-size-p);">
            <thead>
              <tr style="background: var(--bg-tertiary); text-align: left;">
                <th style="padding: 14px 20px; font-size: var(--font-size-label); color: var(--text-secondary);">Order ID</th>
                <th style="padding: 14px 20px; font-size: var(--font-size-label); color: var(--text-secondary);">ลูกค้า</th>
                <th style="padding: 14px 20px; font-size: var(--font-size-label); color: var(--text-secondary);">ช่องทาง</th>
                <th style="padding: 14px 20px; font-size: var(--font-size-label); color: var(--text-secondary); text-align: right;">ยอดเงิน</th>
                <th style="padding: 14px 20px; font-size: var(--font-size-label); color: var(--text-secondary);">สถานะ</th>
                <th style="padding: 14px 20px; font-size: var(--font-size-label); color: var(--text-secondary);">วันที่</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid var(--stroke-secondary);"><td style="padding: 14px 20px;"><span style="font-family: var(--font-mono); color: var(--fg-brand-primary);">#ORD-10042</span></td><td style="padding: 14px 20px;">กัญญา มานะ</td><td style="padding: 14px 20px;"><ssk-tag variant="subtle">Shopee</ssk-tag></td><td style="padding: 14px 20px; text-align: right;">฿1,290</td><td style="padding: 14px 20px;"><ssk-badge themeColor="success" variant="subtle">ชำระแล้ว</ssk-badge></td><td style="padding: 14px 20px; color: var(--text-secondary);">2026-05-08 14:23</td></tr>
              <tr style="border-bottom: 1px solid var(--stroke-secondary);"><td style="padding: 14px 20px;"><span style="font-family: var(--font-mono); color: var(--fg-brand-primary);">#ORD-10041</span></td><td style="padding: 14px 20px;">สมชาย วัฒนกุล</td><td style="padding: 14px 20px;"><ssk-tag variant="subtle">Lazada</ssk-tag></td><td style="padding: 14px 20px; text-align: right;">฿2,480</td><td style="padding: 14px 20px;"><ssk-badge themeColor="info" variant="subtle">กำลังจัดส่ง</ssk-badge></td><td style="padding: 14px 20px; color: var(--text-secondary);">2026-05-08 13:18</td></tr>
              <tr style="border-bottom: 1px solid var(--stroke-secondary);"><td style="padding: 14px 20px;"><span style="font-family: var(--font-mono); color: var(--fg-brand-primary);">#ORD-10040</span></td><td style="padding: 14px 20px;">พรทิพย์ ศรีสุข</td><td style="padding: 14px 20px;"><ssk-tag variant="subtle">LINE OA</ssk-tag></td><td style="padding: 14px 20px; text-align: right;">฿590</td><td style="padding: 14px 20px;"><ssk-badge themeColor="success" variant="subtle">สำเร็จ</ssk-badge></td><td style="padding: 14px 20px; color: var(--text-secondary);">2026-05-08 12:55</td></tr>
              <tr style="border-bottom: 1px solid var(--stroke-secondary);"><td style="padding: 14px 20px;"><span style="font-family: var(--font-mono); color: var(--fg-brand-primary);">#ORD-10039</span></td><td style="padding: 14px 20px;">อนุชา พงศ์ไพบูลย์</td><td style="padding: 14px 20px;"><ssk-tag variant="subtle">Web</ssk-tag></td><td style="padding: 14px 20px; text-align: right;">฿4,220</td><td style="padding: 14px 20px;"><ssk-badge themeColor="success" variant="subtle">ชำระแล้ว</ssk-badge></td><td style="padding: 14px 20px; color: var(--text-secondary);">2026-05-08 11:40</td></tr>
              <tr style="border-bottom: 1px solid var(--stroke-secondary);"><td style="padding: 14px 20px;"><span style="font-family: var(--font-mono); color: var(--fg-brand-primary);">#ORD-10038</span></td><td style="padding: 14px 20px;">วิภา ทรัพย์มาก</td><td style="padding: 14px 20px;"><ssk-tag variant="subtle">TikTok</ssk-tag></td><td style="padding: 14px 20px; text-align: right;">฿890</td><td style="padding: 14px 20px;"><ssk-badge themeColor="warning" variant="subtle">รอชำระ</ssk-badge></td><td style="padding: 14px 20px; color: var(--text-secondary);">2026-05-08 10:12</td></tr>
            </tbody>
          </table>

          <div style="padding: 16px 20px; border-top: 1px solid var(--stroke-secondary);">
            <ssk-pagination currentPage="1" totalPages="16" rowsPerPage="10" allItems="156" showrowsperpage></ssk-pagination>
          </div>
        </div>

      </div>
    </main>

  </ssk-app-shell>
</ssk-app-shell-provider>`,
    preview: featurePagePreview,
  },
  {
    id: "product-list",
    name: "Product List",
    tag: "create_product_list",
    description: "List page — AppShell + Sidebar + PageHeader + FilterBar + Table + Pagination",
    prompt: `ขอช่วยสร้างหน้า list สินค้า สำหรับ Sellsuki CCS3
ใช้ DS 3.0 MCP (เรียก get_brand_rules, get_component ก่อน gen)
entity = Product
columns = ID, ชื่อสินค้า, หมวดหมู่, ราคา, สถานะ, Action
ข้อกำหนด:
- root = <ssk-app-shell-provider brand="ccs3"> + <ssk-app-shell>
- มี sidebar + sidebar-group + sidebar-items
- ปุ่มทุกตัวใช้ tone="brand" หรือ tone="danger" (ห้าม themeColor)
- font-size ≥ 18px เท่านั้น`,
    htmlSource: `<ssk-app-shell-provider brand="ccs3">
  <ssk-app-shell>

    <ssk-sidebar slot="sidebar">
      <ssk-logo slot="logo"></ssk-logo>
      <ssk-sidebar-group>
        <ssk-sidebar-items label="Product List" active></ssk-sidebar-items>
      </ssk-sidebar-group>
    </ssk-sidebar>

    <main>
      <ssk-page-header title="Product List">
        <ssk-button slot="action" variant="solid" tone="brand">
          + New Product
        </ssk-button>
      </ssk-page-header>

      <ssk-filter-bar>
        <ssk-input slot="search" placeholder="Search Product..."></ssk-input>
        <ssk-dropdown slot="filter" label="Status"></ssk-dropdown>
        <ssk-date-picker slot="filter" label="Date"></ssk-date-picker>
      </ssk-filter-bar>

      <ssk-table sortable selectable>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Status</th><th>Date</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- rows — populate with real data -->
        </tbody>
      </ssk-table>

      <ssk-pagination total="100" pageSize="20"></ssk-pagination>
    </main>

  </ssk-app-shell>
</ssk-app-shell-provider>`,
    preview: productListPreview,
  },
  {
    id: "product-form",
    name: "Product Form",
    tag: "create_product_form",
    description: "Create/Edit form — AppShell + Sidebar + Alert + Card + Validation",
    prompt: `ขอช่วยสร้างฟอร์ม create order สำหรับ Sellsuki CCS3
ใช้ DS 3.0 MCP (เรียก get_brand_rules, get_component(ssk-button) ก่อน gen)
entity = Order
fields = ชื่อลูกค้า, สินค้า, จำนวน, วันที่จัดส่ง, หมายเหตุ
ข้อกำหนด:
- root = <ssk-app-shell-provider brand="ccs3"> + <ssk-app-shell>
- มี sidebar
- ปุ่ม Save = <ssk-button variant="solid" tone="brand"> (ห้าม themeColor="primary")
- ปุ่ม Cancel = <ssk-button variant="outline">
- ปุ่ม Delete (ถ้ามี) = <ssk-button variant="outline" tone="danger">`,
    htmlSource: `<ssk-app-shell-provider brand="ccs3">
  <ssk-app-shell>

    <ssk-sidebar slot="sidebar">
      <ssk-logo slot="logo"></ssk-logo>
      <ssk-sidebar-group>
        <ssk-sidebar-items label="Order"></ssk-sidebar-items>
      </ssk-sidebar-group>
    </ssk-sidebar>

    <main>
      <ssk-page-header title="Create Order">
        <ssk-button slot="action" variant="outline">Cancel</ssk-button>
      </ssk-page-header>

      <ssk-alert themeColor="danger" hidden id="error-alert">
        กรุณากรอกข้อมูลให้ครบถ้วน
      </ssk-alert>

      <ssk-card>
        <ssk-heading slot="header">ข้อมูล Order</ssk-heading>
        <form id="order-form"
              style="display: flex; flex-direction: column; gap: 16px; padding: 24px;">
          <ssk-input label="ชื่อลูกค้า" placeholder="ชื่อลูกค้า" required></ssk-input>
          <ssk-dropdown label="สินค้า" required></ssk-dropdown>
          <ssk-input label="จำนวน" type="number" placeholder="0" required></ssk-input>
          <ssk-date-picker label="วันที่จัดส่ง"></ssk-date-picker>
          <ssk-textarea label="หมายเหตุ" placeholder="หมายเหตุเพิ่มเติม..."></ssk-textarea>

          <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 8px;">
            <ssk-button variant="outline" type="button">Cancel</ssk-button>
            <ssk-button variant="solid" tone="brand" type="submit">
              Save Order
            </ssk-button>
          </div>
        </form>
      </ssk-card>
    </main>

  </ssk-app-shell>
</ssk-app-shell-provider>`,
    preview: productFormPreview,
  },
  {
    id: "analytics-widget",
    name: "Analytics Widget",
    tag: "create_analytics_widget",
    description: "Dashboard widget — AppShell + KPI metrics + Chart + Breakdown",
    prompt: `ขอช่วยสร้างหน้า analytics สำหรับ Sellsuki CCS3
ใช้ DS 3.0 MCP (เรียก get_brand_rules, list_components ก่อน gen)
metrics = Sales, Orders, Customers
chart type = line
ข้อกำหนด:
- root = <ssk-app-shell-provider brand="ccs3"> + <ssk-app-shell>
- มี sidebar + filter-bar (date range + compare)
- ใช้ <ssk-widget-grid> สำหรับ KPI metrics
- ใช้ <ssk-line-chart> ใน card สำหรับ trend
- ปุ่ม Export = <ssk-button variant="outline"> (ไม่ต้องระบุ tone)`,
    htmlSource: `<ssk-app-shell-provider brand="ccs3">
  <ssk-app-shell>

    <ssk-sidebar slot="sidebar">
      <ssk-logo slot="logo"></ssk-logo>
      <ssk-sidebar-group>
        <ssk-sidebar-items label="Analytics" active></ssk-sidebar-items>
        <ssk-sidebar-items label="Reports"></ssk-sidebar-items>
      </ssk-sidebar-group>
    </ssk-sidebar>

    <main>
      <ssk-page-header title="Analytics">
        <ssk-button slot="action" variant="outline">Export</ssk-button>
      </ssk-page-header>

      <ssk-filter-bar>
        <ssk-date-picker slot="filter" label="Period" range></ssk-date-picker>
        <ssk-dropdown slot="filter" label="Compare"></ssk-dropdown>
      </ssk-filter-bar>

      <ssk-widget-grid>
        <ssk-widget-matric label="Sales" subText="vs last period"></ssk-widget-matric>
        <ssk-widget-matric label="Orders" subText="vs last period"></ssk-widget-matric>
        <ssk-widget-matric label="Customers" subText="vs last period"></ssk-widget-matric>
      </ssk-widget-grid>

      <ssk-card style="margin-top: 24px;">
        <ssk-heading slot="header">Sales Trend</ssk-heading>
        <ssk-line-chart
          labels='["Jan","Feb","Mar","Apr","May","Jun"]'
          datasets='[{"label":"Sales","data":[0,0,0,0,0,0]}]'>
        </ssk-line-chart>
      </ssk-card>
    </main>

  </ssk-app-shell>
</ssk-app-shell-provider>`,
    preview: analyticsWidgetPreview,
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
          Prompt สำเร็จรูปสำหรับ Sellsuki product — copy prompt → paste ใน AI ที่ติดตั้ง MCP <code style={{ color: "var(--fg-brand-primary)" }}>@uxuissk/ds3-mcp@1.2.1</code> แล้ว → ได้ code ที่ผ่าน DS 3.0 vibecode contract 100% พร้อมใช้ทันที
        </p>
        <div className="flex items-center gap-2 mt-3 px-3 py-2 rounded-lg bg-primary/5 border border-primary/20 w-fit" style={fontBody}>
          <Zap size={14} className="text-primary" />
          <span className="text-primary">Default brand = Sellsuki (CCS3) — เปลี่ยน brand ได้ใน prompt (patona | ccs3 | oc2plus)</span>
        </div>
      </div>

      {/* Template tabs */}
      <div className="flex gap-1 border-b border-border flex-wrap">
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

        {/* Live preview */}
        <div>
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <h3 className="text-foreground font-semibold" style={fontLabel}>
              ✅ ผลลัพธ์ที่ได้จริง — Main content render
            </h3>
            <span className="text-muted-foreground" style={{ fontFamily: "var(--font-p)", fontSize: "var(--font-size-caption)" }}>
              (โครง app-shell + sidebar เต็ม → ดู HTML source ด้านล่าง)
            </span>
          </div>
          <div className="rounded-xl border border-border overflow-hidden">
            <div key={current.id} className="p-6 bg-background min-h-64">
              {current.preview()}
            </div>
            <details className="border-t border-border">
              <summary
                className="px-4 py-2 cursor-pointer text-muted-foreground hover:text-foreground bg-muted/40 select-none"
                style={fontBody}
              >
                ดู HTML source (สำหรับ AI generate — ผ่าน DS 3.0 contract 100%)
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
          {" · "}
          Live MCP endpoint: <code className="text-primary" style={{ fontFamily: "var(--font-p)" }}>https://ds3-mcp.vercel.app/api/mcp</code>
        </div>
      </div>
    </div>
  );
}
