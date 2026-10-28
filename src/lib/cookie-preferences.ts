export type CookieChoice = "accepted" | "rejected";
export const COOKIE_PREFERENCE_KEY = "gs-cookie-consent";

export function readCookieChoice(storage: Pick<Storage, "getItem">): CookieChoice | null {
  try {
    const value = storage.getItem(COOKIE_PREFERENCE_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

export function saveCookieChoice(storage: Pick<Storage, "setItem">, choice: CookieChoice): boolean {
  try {
    storage.setItem(COOKIE_PREFERENCE_KEY, choice);
    return true;
  } catch {
    return false;
  }
}