import Image from 'next/image';
import Link from 'next/link';
import type { SiteData } from '@/types/site-data';

interface FooterProps {
  data: SiteData['footer'];
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="px-6 lg:px-10">
      <div className="bg-white dark:bg-gray-950 relative w-full mx-auto max-w-7xl px-5 md:px-10 py-10 rounded-2xl mb-10 shadow">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          {/* Brand Section */}
          <div className="max-w-md space-y-5">
            <h2 className="text-2xl font-extrabold uppercase tracking-tighter">
              {data.brandName}
            </h2>

            <p className="text-gray-500 leading-relaxed">{data.tagline}</p>

            {/* Social Links */}
            {/*<div className="flex gap-4 pt-2">*/}
            {/*  {data.socialLinks.map(({ name, href, iconUrl }) => (*/}
            {/*    <Link*/}
            {/*      key={name}*/}
            {/*      href={href}*/}
            {/*      className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"*/}
            {/*      aria-label={name}*/}
            {/*    >*/}
            {/*      <Image alt={name} width={16} height={16} src={iconUrl} />*/}
            {/*    </Link>*/}
            {/*  ))}*/}
            {/*</div>*/}
          </div>

          {/* Contact / CTA */}
          <div className="space-y-5">
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Get in Touch
            </h4>

            <p className="text-sm text-gray-500 leading-relaxed">
              Have a requirement or custom order? Reach out and we’ll help you
              get the perfect print solution.
            </p>

            <Link
              href="#booking"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg
                 border border-primary text-primary bg-white
                 text-sm font-semibold transition-all duration-300
                 hover:bg-primary hover:text-white hover:-translate-y-[2px] hover:shadow-lg"
            >
              Book a Service
            </Link>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-500 text-sm">
              {data.quickLinks?.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>{data.copyright}</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            {data.legalLinks.map(({ label, href }) => (
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
      </div>
    </footer>
  );
}
