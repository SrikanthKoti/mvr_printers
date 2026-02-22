"use client";

import type { SiteData } from "@/types/site-data";

interface BookingFormProps {
  data: SiteData["bookingForm"];
}

export default function BookingForm({ data }: BookingFormProps) {
  return (
    <section id="request" className="relative w-full mx-auto max-w-7xl px-5 md:px-10 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-2">{data.title}</h2>
        <p className="text-gray-500 italic">{data.subtitle}</p>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 lg:p-12 shadow-sm max-w-4xl mx-auto border-2 border-blue-500">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="service-type"
              >
                {data.serviceTypeLabel}
              </label>
              <select
                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl py-3 px-4 focus:ring-1 focus:ring-primary"
                id="service-type"
              >
                {data.serviceTypeOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="user-name"
              >
                {data.userNameLabel}
              </label>
              <input
                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl py-3 px-4 focus:ring-1 focus:ring-primary"
                id="user-name"
                placeholder={data.userNamePlaceholder}
                type="text"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="email">
              {data.emailLabel}
            </label>
            <input
              className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl py-3 px-4 focus:ring-1 focus:ring-primary"
              id="email"
              placeholder={data.emailPlaceholder}
              type="email"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="phone">
              {data.phoneLabel}
            </label>
            <input
              className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl py-3 px-4 focus:ring-1 focus:ring-primary"
              id="phone"
              placeholder={data.phonePlaceholder}
              type="tel"
            />
          </div>
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="details"
            >
              {data.detailsLabel}
            </label>
            <textarea
              className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl py-3 px-4 focus:ring-1 focus:ring-primary"
              id="details"
              placeholder={data.detailsPlaceholder}
              rows={4}
            />
          </div>
          <div className="flex items-end">
            <button
              className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:opacity-90 transition-opacity flex justify-center items-center gap-2"
              type="submit"
            >
              {data.submitText}{" "}
              <span className="material-symbols-outlined text-sm">
                {data.submitIcon}
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
