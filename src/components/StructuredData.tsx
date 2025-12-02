'use client';

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRental',
    name: 'TingCar',
    description: 'Premium luxury and exotic car rental, repair, and detailing services',
    url: 'https://tingcar.com',
    logo: 'https://tingcar.com/image/tingcar-logo-full.png',
    image: 'https://tingcar.com/image/cover-facebook-tingcar.png',
    telephone: '+84-xxx-xxx-xxx',
    email: 'info@tingcar.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'VN',
      addressLocality: 'Ho Chi Minh City',
    },
    priceRange: '$$$',
    sameAs: [
      'https://facebook.com/tingcar',
      'https://instagram.com/tingcar',
      'https://twitter.com/tingcar',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Luxury Car Rental Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Car Rental',
            description: 'Rent premium luxury vehicles including Rolls-Royce, Ferrari, Lamborghini',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Exotic Car Repair',
            description: 'Professional repair services for luxury and exotic vehicles',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Premium Car Detailing',
            description: 'Expert detailing services to maintain your vehicle\'s pristine condition',
          },
        },
      ],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TingCar',
    url: 'https://tingcar.com',
    description: 'Masterpiece in Motion. Where Luxury Meets Performance.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://tingcar.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tingcar.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Featured Cars',
        item: 'https://tingcar.com/#featured',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Rental Services',
        item: 'https://tingcar.com/#renting',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Repair Services',
        item: 'https://tingcar.com/#repairing',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Detailing Services',
        item: 'https://tingcar.com/#detailing',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
