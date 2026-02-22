import Image from 'next/image';
import Link from 'next/link';
import type { SiteData } from '@/types/site-data';

interface HeroProps {
  data: SiteData['hero'];
}

export default function Hero({ data }: HeroProps) {
  return (
    <section
      className="relative w-full mx-auto max-w-7xl px-5 md:px-10 py-10"
      id="home"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-12 flex flex-col justify-center relative overflow-hidden shadow">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-6xl font-extrabold text-primary dark:text-white leading-[1.1] mb-6">
              {data.headline.split(' ').slice(0, 2).join(' ')}
              <br />
              {data.headline.split(' ').slice(2).join(' ')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 max-w-md">
              {data.subheadline}
            </p>
            <Link
              href={data.ctaHref}
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-sm sm:text-md flex items-center gap-4 hover:opacity-90 transition-opacity w-fit"
            >
              {data.ctaText}{' '}
              <span className="material-symbols-outlined text-sm">
                {data.ctaIcon}
              </span>
            </Link>
            <div className="mt-16 flex sm:items-center gap-4 sm:flex-row flex-col">
              <div className="flex -space-x-3">
                {data.customerAvatars.map((avatar, i) => (
                  <Image
                    key={i}
                    alt={avatar.alt}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900"
                    src={avatar.src}
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold">{data.testimonial.label}</p>
                <p className="text-gray-400 text-xs italic">
                  &quot;{data.testimonial.quote}&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:h-[600px] rounded-2xl overflow-hidden relative group">
          <Image
            alt={data.heroImage.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            src={data.heroImage.src}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
