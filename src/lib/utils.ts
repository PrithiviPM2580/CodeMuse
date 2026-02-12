import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractCode(response: string) {
  const match = response.match(/```(?:\w+)?\n([\s\S]*?)```/);
  if (match && match[1]) {
    return match[1].trim();
  }
  return response.trim();
}
