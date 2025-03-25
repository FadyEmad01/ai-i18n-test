"use client"

import Link from 'next/link';
import {locales} from '@/i18n';

export default function LanguageSwitcher() {
  return (
    <div className="flex items-center space-x-4">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}`}
          className="text-gray-900 hover:text-primary"
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
} 