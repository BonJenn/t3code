import type { ScopedThreadRef } from "@t3tools/contracts";

/** Flag the desktop app puts on an extra window's URL; it keeps its own pane layout. */
export const isSecondaryWindow =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).get("window") === "secondary";

export function threadWindowPath(ref: ScopedThreadRef): string {
  return `/${encodeURIComponent(ref.environmentId)}/${encodeURIComponent(ref.threadId)}`;
}

/** Only the desktop app can open another native window. */
export function canOpenThreadWindow(): boolean {
  return typeof window !== "undefined" && window.desktopBridge?.openWindow !== undefined;
}

export function openThreadWindow(ref: ScopedThreadRef): void {
  void window.desktopBridge?.openWindow(threadWindowPath(ref));
}
