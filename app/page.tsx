import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ThreeColumnStrip from "@/components/ThreeColumnStrip";
import Partners from "@/components/Partners";
import ServiceCategories from "@/components/ServiceCategories";
import TopServices from "@/components/TopServices";
import PromoBanner from "@/components/PromoBanner";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import type { SiteData } from "@/types/site-data";

import siteDataJson from "../src/data/site-data.json";

const siteData = siteDataJson as SiteData;

export default function Home() {
  return (
    <>
      <Header data={siteData.header} />
      <main className="flex-1">
        <Hero data={siteData.hero} />
        <ThreeColumnStrip data={siteData.threeColumnStrip} />
        {/*<Partners data={siteData.partners} />*/}
        {/*<ServiceCategories data={siteData.serviceCategories} />*/}
        <TopServices data={siteData.topServices} />
        {/*<PromoBanner data={siteData.promo} />*/}
        <BookingForm data={siteData.bookingForm} />
      </main>
      <Footer data={siteData.footer} />
    </>
  );
}
