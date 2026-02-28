'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { SiteData } from '@/types/site-data';

interface BookingFormProps {
  data: SiteData['bookingForm'];
  preselectedService?: string | null;
}

type FormValues = {
  serviceType: string;
  userName: string;
  email: string;
  phone: string;
  details: string;
};

function matchServiceOption(
  options: string[],
  title: string,
): string | undefined {
  const normalized = title.trim();
  const exact = options.find((o) => o === normalized);
  if (exact) return exact;
  const lower = normalized.toLowerCase();
  return options.find((o) => o.toLowerCase() === lower);
}

const INDIAN_PHONE_DIGITS = 10;
const INDIAN_MOBILE_FIRST_DIGIT = /^[6-9]/;

function validateIndianPhone(value: string): true | string {
  const digits = value.replace(/\D/g, '');
  if (digits.length !== INDIAN_PHONE_DIGITS) {
    return 'Enter a valid 10-digit Indian mobile number';
  }
  if (!INDIAN_MOBILE_FIRST_DIGIT.test(digits)) {
    return 'Indian mobile number must start with 6, 7, 8 or 9';
  }
  return true;
}

function phoneInputHandler(e: React.FormEvent<HTMLInputElement>) {
  const input = e.currentTarget;
  const digits = input.value.replace(/\D/g, '').slice(0, INDIAN_PHONE_DIGITS);
  input.value = digits;
}

const fieldErrorClass =
  'mt-1 text-sm text-red-600 dark:text-red-400 min-h-[1.25rem]';
const inputErrorClass =
  'ring-2 ring-red-500 focus:ring-red-500 dark:ring-red-400 dark:focus:ring-red-400';

export default function BookingForm({
  data,
  preselectedService,
}: BookingFormProps) {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      serviceType: data.serviceTypeOptions[0] ?? '',
      userName: '',
      email: '',
      phone: '',
      details: '',
    },
  });

  const showToast = (message = 'Thank you! We will be calling/emailing you in some time.') => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastMessage(message);
    setToastVisible(true);
    toastTimeoutRef.current = setTimeout(() => {
      setToastVisible(false);
      toastTimeoutRef.current = null;
    }, 4000);
  };

  const onValidSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceType: values.serviceType,
          userName: values.userName,
          email: values.email,
          phone: values.phone,
          details: values.details || '',
        }),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        showToast(json.error || 'Something went wrong. Please try again.');
        return;
      }

      if (json.success && json.whatsAppSent === false) {
        showToast('Something went wrong. Please try again.');
        return;
      }

      showToast();
    } catch {
      showToast('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!preselectedService) return;
    const matched = matchServiceOption(
      data.serviceTypeOptions,
      preselectedService,
    );
    if (matched) setValue('serviceType', matched);
  }, [preselectedService, data.serviceTypeOptions, setValue]);

  return (
    <section
      id="request"
      className="relative w-full mx-auto max-w-7xl px-5 md:px-10 py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-2">{data.title}</h2>
        <p className="text-gray-500 italic">{data.subtitle}</p>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 lg:p-12 shadow-sm max-w-4xl mx-auto border-2 border-blue-500">
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onValidSubmit)}
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="service-type"
              >
                {data.serviceTypeLabel}
              </label>
              <select
                {...register('serviceType', {
                  required: 'Service type is required',
                })}
                id="service-type"
                className={`w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl py-3 px-4 focus:ring-1 focus:ring-primary ${errors.serviceType ? inputErrorClass : ''}`}
              >
                {data.serviceTypeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <p className={fieldErrorClass} role="alert">
                {errors.serviceType?.message}
              </p>
            </div>
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="user-name"
              >
                {data.userNameLabel}
              </label>
              <input
                {...register('userName', { required: 'Name is required' })}
                id="user-name"
                placeholder={data.userNamePlaceholder}
                type="text"
                className={`w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl py-3 px-4 focus:ring-1 focus:ring-primary ${errors.userName ? inputErrorClass : ''}`}
              />
              <p className={fieldErrorClass} role="alert">
                {errors.userName?.message}
              </p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="email">
              {data.emailLabel}
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email address',
                },
              })}
              id="email"
              placeholder={data.emailPlaceholder}
              type="email"
              className={`w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl py-3 px-4 focus:ring-1 focus:ring-primary ${errors.email ? inputErrorClass : ''}`}
            />
            <p className={fieldErrorClass} role="alert">
              {errors.email?.message}
            </p>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="phone">
              {data.phoneLabel}
            </label>
            <input
              {...register('phone', {
                required: 'Phone is required',
                validate: validateIndianPhone,
              })}
              id="phone"
              placeholder={data.phonePlaceholder}
              inputMode="numeric"
              autoComplete="tel"
              type="tel"
              onInput={phoneInputHandler}
              className={`w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl py-3 px-4 focus:ring-1 focus:ring-primary ${errors.phone ? inputErrorClass : ''}`}
            />
            <p className={fieldErrorClass} role="alert">
              {errors.phone?.message}
            </p>
          </div>
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="details"
            >
              {data.detailsLabel}
            </label>
            <textarea
              {...register('details')}
              id="details"
              placeholder={data.detailsPlaceholder}
              rows={4}
              className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl py-3 px-4 focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex items-end">
            <button
              className="w-full bg-primary text-white py-4 px-10 rounded-xl font-bold hover:opacity-90 transition-opacity flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
            >
              <span className="flex items-center justify-center gap-2">
                {isSubmitting ? 'Sending…' : data.submitText}
              </span>
            </button>
          </div>
        </form>
      </div>

      {toastVisible && (
        <div
          role="alert"
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-xl bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium shadow-lg transition-opacity duration-300"
        >
          {toastMessage}
        </div>
      )}
    </section>
  );
}
