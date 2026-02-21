import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

export interface SiteData {
  meta: { title: string; description: string };
  header: Record<string, unknown>;
  hero: Record<string, unknown>;
  threeColumnStrip: Record<string, unknown>;
  partners: Array<{ icon: string; label: string }>;
  serviceCategories: Record<string, unknown>;
  topServices: Record<string, unknown>;
  promo: Record<string, unknown>;
  bookingForm: Record<string, unknown>;
  footer: Record<string, unknown>;
}

export function loadSiteData(): SiteData {
  const inDist = join(__dirname, 'site-data.json');
  const inSrc = join(process.cwd(), 'src', 'data', 'site-data.json');
  const path = existsSync(inDist) ? inDist : inSrc;
  const raw = readFileSync(path, 'utf-8');
  return JSON.parse(raw) as SiteData;
}

