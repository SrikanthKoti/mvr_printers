import Image from "next/image";
import Link from "next/link";
import type { SiteData } from "@/types/site-data";

interface ThreeColumnStripProps {
  data: SiteData["threeColumnStrip"];
}

export default function ThreeColumnStrip({ data }: ThreeColumnStripProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.images.map((img, i) => (
        <div key={i} className="rounded-2xl overflow-hidden h-64 relative">
          <Image
            alt={img.alt}
            fill
            className="object-cover"
            src={img.src}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ))}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 flex flex-col justify-center items-center text-center space-y-4">
        <h3 className="text-2xl font-bold">
          {data.techCard.title.split(" ").slice(0, 3).join(" ")}
          <br />
          {data.techCard.title.split(" ").slice(3).join(" ")}
        </h3>
        <Link
          href="#"
          className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          {data.techCard.buttonText}
        </Link>
      </div>
    </section>
  );
}
