import Link from "next/link";
import type { SiteData } from "@/types/site-data";

interface HeaderProps {
  data: SiteData["header"];
}

export default function Header({ data }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 py-4">
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              aria-label="Menu"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-xl font-extrabold tracking-tighter uppercase">
              {data.brandName}
            </h1>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            {data.navTop.map(({ label, href }) => (
              <Link key={label} href={href} className="hover:underline">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-8 py-3 text-[10px] uppercase tracking-widest font-bold border-t border-gray-100 dark:border-gray-900">
          {data.navCategories.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
