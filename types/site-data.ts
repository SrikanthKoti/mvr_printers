export interface SiteData {
  meta: { title: string; description: string };
  header: {
    brandName: string;
    navCategories: Array<{ label: string; href: string }>;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaText: string;
    ctaHref: string;
    ctaIcon: string;
    heroImage: { src: string; alt: string };
    testimonial: { label: string; quote: string };
    customerAvatars: Array<{ src: string; alt: string }>;
  };
  threeColumnStrip: {
    images: Array<{ src: string; alt: string }>;
    techCard: { title: string; buttonText: string };
  };
  partners: Array<{ icon: string; label: string }>;
  serviceCategories: {
    sectionTitle: string;
    items: Array<{
      title: string;
      serviceCount: string;
      image: string;
      imageAlt: string;
      cardClass: string;
      textClass: string;
      countClass: string;
    }>;
  };
  topServices: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{
      title: string;
      description: string;
      image: string;
      alt: string;
    }>;
  };
  promo: {
    headline: string;
    subtext: string;
    minPurchase: string;
    buttonText: string;
    buttonIcon: string;
    leftImages: Array<{ src: string; alt: string }>;
    rightImages: Array<{ src: string; alt: string }>;
  };
  bookingForm: {
    title: string;
    subtitle: string;
    serviceTypeLabel: string;
    serviceTypeOptions: string[];
    userNameLabel: string;
    userNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    detailsLabel: string;
    detailsPlaceholder: string;
    submitText: string;
    submitIcon: string;
    whatsAppNumber: string;
  };
  footer: {
    brandName: string;
    tagline: string;
    socialLinks: Array<{ name: string; href: string; iconUrl: string }>;
    about: { heading: string; links: Array<{ label: string; href: string }> };
    help: { heading: string; links: Array<{ label: string; href: string }> };
    menu: { heading: string; links: Array<{ label: string; href: string }> };
    quickLinks: Array<{ label: string; href: string }>;
    copyright: string;
    legalLinks: Array<{ label: string; href: string }>;
  };
}
