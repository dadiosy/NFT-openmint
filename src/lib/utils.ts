import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { promises as fs } from 'fs';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
