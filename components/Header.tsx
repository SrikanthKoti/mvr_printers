import Link from 'next/link';
import type { SiteData } from '@/types/site-data';

interface HeaderProps {
  data: SiteData['header'];
}

export default function Header({ data }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-8 xl:px-0 py-4">
        <div className="flex justify-center items-center py-4">
          <h1 className="text-xl sm:text-3xl font-extrabold tracking-tighter uppercase">
            {data.brandName}
          </h1>
        </div>
        <div className="hidden sm:flex justify-center gap-8 pb-3 mt-4 text-[10px] uppercase tracking-widest font-bold border-t border-gray-100 dark:border-gray-900">
          {data.navCategories.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative group hover:text-primary transition-colors duration-300"
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
