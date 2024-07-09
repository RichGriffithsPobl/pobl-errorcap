import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateApiKey(): string {
  // Create a buffer of 32 random bytes
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);

  // Convert the random bytes to a Base64 string
  //@ts-ignore
  const base64String = btoa(String.fromCharCode(...array));

  // Optional: Remove non-url-safe characters and pad with '=' to make it URL-safe
  const apiKey = base64String.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  return apiKey;
}