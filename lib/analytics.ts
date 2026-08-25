type AnalyticsValue = string | number | boolean

declare global {
  interface Window {
    gtag?: (...args: [string, ...AnalyticsValue[]]) => void
  }
}

export function trackEvent(
  name: string,
  parameters: Record<string, AnalyticsValue> = {},
) {
  if (typeof window !== 'undefined') {
    window.gtag?.('event', name, parameters)
  }
}
