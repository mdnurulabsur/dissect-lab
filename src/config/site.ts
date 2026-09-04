export const siteConfig = {
  name: 'DiSSect Lab',
  fullName: 'Distributed Systems and Security Laboratory',
  institution: 'CUNY',
  description:
    'Research in distributed systems, edge intelligence, cybersecurity, and trustworthy computing.',

  navigation: [
    { label: 'Research', href: '/research/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'People', href: '/people/' },
    { label: 'Publications', href: '/publications/' },
    { label: 'News', href: '/news/' },
    { label: 'Join Us', href: '/join/' },
    { label: 'About', href: '/about/' },
  ],
} as const;
