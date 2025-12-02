'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import * as gtag from '@/lib/analytics';

function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      gtag.pageview(url);
    }
  }, [pathname, searchParams]);

  return null;
}

export default function Analytics() {
  return (
    <>
      {gtag.GA_TRACKING_ID && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          <Suspense fallback={null}>
            <AnalyticsTracker />
          </Suspense>
        </>
      )}
    </>
  );
}
