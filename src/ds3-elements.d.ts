import type { HTMLAttributes } from "react";

type DS3El = HTMLAttributes<HTMLElement> & Record<string, any>;

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "ssk-app-shell-provider": DS3El;
      "ssk-theme-provider": DS3El;
      "ssk-button": DS3El;
      "ssk-input": DS3El;
      "ssk-textarea": DS3El;
      "ssk-checkbox": DS3El;
      "ssk-radio": DS3El;
      "ssk-radio-group": DS3El;
      "ssk-toggle": DS3El;
      "ssk-badge": DS3El;
      "ssk-avatar": DS3El;
      "ssk-icon": DS3El;
      "ssk-text": DS3El;
      "ssk-heading": DS3El;
      "ssk-divider": DS3El;
      "ssk-spinner": DS3El;
      "ssk-skeleton": DS3El;
      "ssk-tag": DS3El;
      "ssk-alert": DS3El;
      "ssk-image": DS3El;
      "ssk-card-select": DS3El;
      "ssk-card-select-group": DS3El;
      "ssk-date-display": DS3El;
      "ssk-logo": DS3El;
      "ssk-container": DS3El;
      "ssk-menu-items": DS3El;
      "ssk-menu-group": DS3El;
      "ssk-menu-group-item": DS3El;
      "ssk-dropdown": DS3El;
      "ssk-modal": DS3El;
      "ssk-toast": DS3El;
      "ssk-tabs": DS3El;
      "ssk-table": DS3El;
      "ssk-stepper": DS3El;
      "ssk-progress-bar": DS3El;
      "ssk-sidebar": DS3El;
      "ssk-calendar": DS3El;
      "ssk-drawer": DS3El;
      "ssk-tooltip": DS3El;
      "ssk-accordion": DS3El;
      "ssk-accordion-item": DS3El;
      "ssk-timeline": DS3El;
      "ssk-card": DS3El;
      "ssk-widget-grid": DS3El;
      "ssk-line-chart": DS3El;
      "ssk-bar-chart": DS3El;
      "ssk-donut-chart": DS3El;
      "ssk-top-navbar": DS3El;
      "ssk-input-range": DS3El;
    }
  }
}
