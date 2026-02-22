import Image from "next/image";
import type { SiteData } from "@/types/site-data";

interface TopServicesProps {
  data: SiteData["topServices"];
}

export default function TopServices({ data }: TopServicesProps) {
  return (
    <section className="text-center">
      <h2 className="text-4xl font-extrabold mb-2">{data.sectionTitle}</h2>
      <p className="text-gray-500 mb-12">{data.sectionSubtitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.items.map((item) => (
          <div
            key={item.title}
            className="bg-white dark:bg-gray-900 rounded-2xl p-4 group cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all text-left"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl mb-4 overflow-hidden h-64 flex items-center justify-center p-8 relative">
              <Image
                alt={item.alt}
                fill
                className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500 p-4"
                src={item.image}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="px-2">
              <h4 className="font-bold text-lg">{item.title}</h4>
              <p className="text-gray-500 font-medium text-sm">
                From {item.priceFrom}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
