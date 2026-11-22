/**
 * Provides the locale for the application to all child components.
 *
 * @see: https://kobalte.dev/docs/core/components/i18n-provider
 *
 * Anatomy:
 * <I18nProvider>
 *   {children}
 * </I18nProvider>
 */

import { I18nProvider } from "@kobalte/core/i18n";
import type { JSX } from "@solidjs/web";

export interface UIProviderProps {
  /** Contents that should have the locale applied. */
  children?: JSX.Element;
  /** The locale to apply to the children. */
  locale?: string;
}

export function UIProvider(props: UIProviderProps) {
  return <I18nProvider locale={props.locale}>{props.children}</I18nProvider>;
}
