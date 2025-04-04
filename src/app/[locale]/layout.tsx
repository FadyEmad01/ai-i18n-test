import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {locales, type Locale} from '@/i18n/config';
import {setRequestLocale} from 'next-intl/server';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale: Locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: Locale};
}) {
  // Enable static rendering
  setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 