export function getInitials(name?: string): string {
  if (!name) return "US";

  const parts = name.trim().split(" ").filter(Boolean);

  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  } else if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }

  return "US";
}
