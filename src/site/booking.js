// Returns the "user/event" path Cal.com's popup needs, or "" for any other link.
export function calLinkFrom(url) {
  try {
    const { hostname, pathname } = new URL(url);
    if (hostname !== "cal.com" && hostname !== "www.cal.com") return "";
    const parts = pathname.split("/").filter(Boolean);
    return parts.length === 2 ? parts.join("/") : "";
  } catch {
    return "";
  }
}
