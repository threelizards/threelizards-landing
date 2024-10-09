import { i18nSearchParamName } from '@/i18n/settings';
import { HOST_URL } from '@/lib/config';
import { routes } from '@/lib/routes';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${HOST_URL}${routes.root}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          es: `${HOST_URL}${routes.root}?${i18nSearchParamName}=es`,
          en: `${HOST_URL}${routes.root}?${i18nSearchParamName}=en`
        }
      }
    },
    {
      url: `${HOST_URL}${routes.contact_us}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          es: `${HOST_URL}${routes.contact_us}?${i18nSearchParamName}=es`,
          en: `${HOST_URL}${routes.contact_us}?${i18nSearchParamName}=en`
        }
      }
    },
    {
      url: `${HOST_URL}${routes.terms}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: {
        languages: {
          es: `${HOST_URL}${routes.terms}?${i18nSearchParamName}=es`,
          en: `${HOST_URL}${routes.terms}?${i18nSearchParamName}=en`
        }
      }
    }
  ];
}
