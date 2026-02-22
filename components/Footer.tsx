import Image from "next/image";
import Link from "next/link";
import type { SiteData } from "@/types/site-data";

interface FooterProps {
  data: SiteData["footer"];
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-white dark:bg-gray-950 pt-24 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-extrabold uppercase tracking-tighter">
              {data.brandName}
            </h2>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              {data.tagline}
            </p>
            <div className="flex gap-4">
              {data.socialLinks.map(({ name, href, iconUrl }) => (
                <Link
                  key={name}
                  href={href}
                  className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  aria-label={name}
                >
                  <Image alt={name} width={16} height={16} src={iconUrl} />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">{data.about.heading}</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              {data.about.links.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-primary">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">{data.help.heading}</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              {data.help.links.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-primary">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">{data.menu.heading}</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              {data.menu.links.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-primary">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>{data.copyright}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {data.legalLinks.map(({ label, href }) => (
              <Link key={label} href={href} className="hover:text-primary">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
