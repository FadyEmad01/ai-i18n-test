import {getRequestConfig} from 'next-intl/server';
import {locales, type Locale} from './i18n/config';

export {locales, type Locale} from './i18n/config';

export default getRequestConfig(async ({locale}) => {
  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    timeZone: 'UTC',
    now: new Date(),
  };
}); 