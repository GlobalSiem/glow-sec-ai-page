import { describe, expect, test } from "bun:test";
import { COOKIE_PREFERENCE_KEY, readCookieChoice, saveCookieChoice } from "./cookie-preferences";

function storage() {
  const values = new Map<string, string>();
  return { getItem: (key: string) => values.get(key) ?? null, setItem: (key: string, value: string) => { values.set(key, value); } };
}

describe("visitor cookie choice", () => {
  test("acceptance is persisted for the next visit", () => {
    const store = storage();
    expect(saveCookieChoice(store, "accepted")).toBe(true);
    expect(store.getItem(COOKIE_PREFERENCE_KEY)).toBe("accepted");
    expect(readCookieChoice(store)).toBe("accepted");
  });
  test("rejection is persisted for the next visit", () => {
    const store = storage();
    saveCookieChoice(store, "rejected");
    expect(readCookieChoice(store)).toBe("rejected");
  });
  test("visitors can replace their previous choice", () => {
    const store = storage();
    saveCookieChoice(store, "accepted");
    saveCookieChoice(store, "rejected");
    expect(readCookieChoice(store)).toBe("rejected");
  });
  test("an invalid stored choice requires a new decision", () => {
    const store = storage();
    store.setItem(COOKIE_PREFERENCE_KEY, "invalid");
    expect(readCookieChoice(store)).toBeNull();
  });
  test("unavailable storage does not crash the page", () => {
    const store = { getItem: () => { throw new Error("blocked"); }, setItem: () => { throw new Error("blocked"); } };
    expect(readCookieChoice(store)).toBeNull();
    expect(saveCookieChoice(store, "accepted")).toBe(false);
  });
});