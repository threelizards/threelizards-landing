import { HOST_URL } from '@/lib/config';
import { routes } from '@/lib/routes';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${HOST_URL}${routes.root}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: `${HOST_URL}${routes.contact_us}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${HOST_URL}${routes.terms}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5
    }
  ];
}
