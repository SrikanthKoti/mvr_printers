import Image from "next/image";
import Link from "next/link";
import type { SiteData } from "@/types/site-data";

interface PromoBannerProps {
  data: SiteData["promo"];
}

export default function PromoBanner({ data }: PromoBannerProps) {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden py-16 px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="lg:w-1/3 flex justify-center gap-4">
        {data.leftImages.map((img, i) => (
          <div
            key={i}
            className={`relative w-40 h-80 ${i === 1 ? "mt-8" : ""}`}
          >
            <Image
              alt={img.alt}
              fill
              className="object-cover rounded-2xl"
              src={img.src}
              sizes="160px"
            />
          </div>
        ))}
      </div>
      <div className="lg:w-1/3 text-center space-y-6">
        <h2 className="text-5xl font-extrabold">{data.headline}</h2>
        <p className="text-gray-500 uppercase tracking-widest font-bold">
          {data.subtext}
          <br />
          {data.minPurchase}
        </p>
        <Link
          href="#"
          className="bg-primary text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 mx-auto w-fit hover:scale-105 transition-transform"
        >
          <span className="flex items-center justify-center gap-2">
            {data.buttonText}
            <span className="material-symbols-outlined inline-flex items-center justify-center text-[1.25em] leading-none shrink-0">
              {data.buttonIcon}
            </span>
          </span>
        </Link>
      </div>
      <div className="lg:w-1/3 flex justify-center gap-4">
        {data.rightImages.map((img, i) => (
          <div
            key={i}
            className={`relative w-40 h-80 ${i === 0 ? "mt-8" : ""}`}
          >
            <Image
              alt={img.alt}
              fill
              className="object-cover rounded-2xl"
              src={img.src}
              sizes="160px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
