import Image from "next/image";
import type { SiteData } from "@/types/site-data";

interface ServiceCategoriesProps {
  data: SiteData["serviceCategories"];
}

export default function ServiceCategories({ data }: ServiceCategoriesProps) {
  return (
    <section>
      <h2 className="text-3xl font-extrabold mb-8">{data.sectionTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.items.map((item) => (
          <div
            key={item.title}
            className={`${item.cardClass} rounded-2xl p-6 relative group overflow-hidden h-[400px]`}
          >
            <div className={`relative z-10 text-center ${item.textClass}`}>
              <h4 className="text-xl font-bold">{item.title}</h4>
              <p className={`text-sm ${item.countClass}`}>{item.serviceCount}</p>
            </div>
            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-4/5 h-3/5 relative">
              <Image
                alt={item.imageAlt}
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-500"
                src={item.image}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
