import { HOST_URL } from '@/lib/config';
import { routes } from '@/lib/routes';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [routes.root, routes.contact_us, routes.terms],
      disallow: [routes.backoffice, routes.login]
    },
    sitemap: `${HOST_URL}/sitemap.xml`
  };
}
