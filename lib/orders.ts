import { SITE } from "./site";

export interface OrderItem { name: string; qty: number; price: number }
export interface Order {
  number: string;
  date: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  email: string;
  name: string;
  address: string;
  descriptor: string;
}

const KEY = "renvora_last_order";

export function saveOrder(o: Order) {
  try { localStorage.setItem(KEY, JSON.stringify(o)); } catch {}
}
export function loadOrder(): Order | null {
  try {
    const v = localStorage.getItem(KEY);
    return v ? (JSON.parse(v) as Order) : null;
  } catch { return null; }
}
export function newOrderNumber() {
  return `RTG-${Date.now().toString().slice(-8)}${Math.floor(Math.random() * 90 + 10)}`;
}
export const DESCRIPTOR = SITE.descriptor;
