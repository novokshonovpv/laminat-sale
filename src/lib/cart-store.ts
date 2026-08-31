"use client";

import { useSyncExternalStore } from "react";

export type CartItem = {
  productId: string;
  packages: number;
};

const STORAGE_KEY = "laminat-dom-cart";
const EMPTY_CART: CartItem[] = [];
const listeners = new Set<() => void>();

let currentCart = EMPTY_CART;
let initialized = false;

function readStoredCart(): CartItem[] {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return EMPTY_CART;

    const parsed: unknown = JSON.parse(stored);
    if (!Array.isArray(parsed)) return EMPTY_CART;

    return parsed.flatMap((item) => {
      if (
        typeof item === "object" &&
        item !== null &&
        "productId" in item &&
        "packages" in item &&
        typeof item.productId === "string" &&
        typeof item.packages === "number" &&
        Number.isFinite(item.packages) &&
        item.packages > 0
      ) {
        return [{ productId: item.productId, packages: Math.floor(item.packages) }];
      }
      return [];
    });
  } catch {
    return EMPTY_CART;
  }
}

function getSnapshot() {
  if (!initialized && typeof window !== "undefined") {
    currentCart = readStoredCart();
    initialized = true;
  }
  return currentCart;
}

function getServerSnapshot() {
  return EMPTY_CART;
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      currentCart = readStoredCart();
      initialized = true;
      listener();
    }
  };

  window.addEventListener("storage", handleStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

function saveCart(items: CartItem[]) {
  currentCart = items;
  initialized = true;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // The cart remains usable for the current page if browser storage is unavailable.
  }

  listeners.forEach((listener) => listener());
}

export function useCart() {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return {
    items,
    addItem(productId: string, packages: number) {
      const quantity = Math.max(1, Math.floor(packages));
      const existing = currentCart.find((item) => item.productId === productId);

      if (existing) {
        saveCart(currentCart.map((item) => item.productId === productId ? { ...item, packages: item.packages + quantity } : item));
      } else {
        saveCart([...currentCart, { productId, packages: quantity }]);
      }
    },
    updateItem(productId: string, packages: number) {
      const quantity = Math.max(1, Math.floor(packages));
      saveCart(currentCart.map((item) => item.productId === productId ? { ...item, packages: quantity } : item));
    },
    removeItem(productId: string) {
      saveCart(currentCart.filter((item) => item.productId !== productId));
    },
  };
}
