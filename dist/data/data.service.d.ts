export interface SiteData {
    meta: {
        title: string;
        description: string;
    };
    header: Record<string, unknown>;
    hero: Record<string, unknown>;
    threeColumnStrip: Record<string, unknown>;
    partners: Array<{
        icon: string;
        label: string;
    }>;
    serviceCategories: Record<string, unknown>;
    topServices: Record<string, unknown>;
    promo: Record<string, unknown>;
    bookingForm: Record<string, unknown>;
    footer: Record<string, unknown>;
}
export declare function loadSiteData(): SiteData;
