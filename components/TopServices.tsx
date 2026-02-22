import Image from 'next/image';
import type { SiteData } from '@/types/site-data';
import Link from 'next/link';

interface TopServicesProps {
  data: SiteData['topServices'];
}

export default function TopServices({ data }: TopServicesProps) {
  return (
    <section
      className="relative w-full mx-auto max-w-7xl px-5 md:px-10 py-20"
      id="services"
    >
      <div className="text-center">
        <h2 className="text-4xl font-extrabold mb-2">{data.sectionTitle}</h2>
        <p className="text-gray-500 mb-12">{data.sectionSubtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-gray-900 rounded-2xl p-4 group border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all text-left"
            >
              <div className="relative mb-4 h-64 w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
                />
              </div>
              <div className="px-2">
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-gray-500 font-medium text-sm">
                  {item.description}
                </p>
                <button className="w-full mt-3 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold transition-all duration-300 ease-out hover:bg-primary/90 hover:-translate-y-[2px] hover:shadow-lg active:translate-y-0 active:shadow-md">
                  {' '}
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
