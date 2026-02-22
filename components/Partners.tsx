import type { SiteData } from "@/types/site-data";

interface PartnersProps {
  data: SiteData["partners"];
}

export default function Partners({ data }: PartnersProps) {
  return (
    <section className="py-12 border-y border-gray-200 dark:border-gray-800">
      <div className="flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 px-8">
        {data.map(({ icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <span className="material-symbols-outlined text-4xl">{icon}</span>
            <span className="font-bold text-xl uppercase">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
