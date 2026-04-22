import type { HTMLAttributes } from "react";

type DS3El = HTMLAttributes<HTMLElement> & Record<string, any>;

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "ds-app-shell-provider": DS3El;
      "ds-theme-provider": DS3El;
      "ds-button": DS3El;
      "ds-input": DS3El;
      "ds-textarea": DS3El;
      "ds-checkbox": DS3El;
      "ds-radio": DS3El;
      "ds-radio-group": DS3El;
      "ds-toggle": DS3El;
      "ds-badge": DS3El;
      "ds-avatar": DS3El;
      "ds-icon": DS3El;
      "ds-text": DS3El;
      "ds-heading": DS3El;
      "ds-divider": DS3El;
      "ds-spinner": DS3El;
      "ds-skeleton": DS3El;
      "ds-tag": DS3El;
      "ds-alert": DS3El;
      "ds-image": DS3El;
      "ds-card-select": DS3El;
      "ds-card-select-group": DS3El;
      "ds-date-display": DS3El;
      "ds-logo": DS3El;
      "ds-container": DS3El;
      "ds-menu-items": DS3El;
      "ds-menu-group": DS3El;
      "ds-menu-group-item": DS3El;
      "ds-dropdown": DS3El;
      "ds-modal": DS3El;
      "ds-toast": DS3El;
      "ds-tabs": DS3El;
      "ds-table": DS3El;
      "ds-stepper": DS3El;
      "ds-progress-bar": DS3El;
      "ds-sidebar": DS3El;
      "ds-calendar": DS3El;
      "ds-drawer": DS3El;
      "ds-tooltip": DS3El;
      "ds-accordion": DS3El;
      "ds-accordion-item": DS3El;
      "ds-timeline": DS3El;
      "ds-card": DS3El;
      "ds-widget-grid": DS3El;
      "ds-line-chart": DS3El;
      "ds-bar-chart": DS3El;
      "ds-donut-chart": DS3El;
      "ds-top-navbar": DS3El;
      "ds-input-range": DS3El;
    }
  }
}
