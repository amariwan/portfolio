export const dynamic = "force-static";

import { baseURL } from '@/app/resources'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  }
}
