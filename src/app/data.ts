type TServices = {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
}[];
const ServicesData: TServices = [
  {
    id: 1,
    thumbnail: "images/services/airport-transfer.svg",
    title: "Airport Transfers",
    description:
      "We offer a wide range of services related to renting a car for all your travel needs.",
    cta: {
      label: "Learn More",
      href: "wwww.google.com",
    },
  },
  {
    id: 2,
    thumbnail: "images/services/ride-hailing.svg",
    title: "Ride-Hailing",
    description:
      "Risus augue dolor tincidunt aliquet. Nunc diam sapien nascetur aenean.",
    cta: {
      label: "Learn More",
      href: "wwww.google.com",
    },
  },
];

type TTestimonial = {
  id: number;
  userName: string;
  UserProfile: string;
  FeedbackDescription: string;
  Source: string;
}[];

const TestimonialData: TTestimonial = [
  {
    id: 1,
    FeedbackDescription:
      "I recently used TraviCabs for my trip, and it was a fantastic experience! The booking process was seamless, the cab was clean and comfortable, and the driver was professional and friendly.",
    userName: "Elisa Parcel",
    Source: 'Étudiante INSEEC, Lyon',
    UserProfile: "/images/testimonial/testimonial1.svg",
  },
  {
    id: 2,
    FeedbackDescription:
      "I recently used TraviCabs for my trip, and it was a fantastic experience! The booking process was seamless, the cab was clean and comfortable, and the driver was professional and friendly.",
    userName: "Vincent Farre",
    Source: 'Étudiant CFA CODIS, Paris',
    UserProfile: "/images/testimonial/testimonial2.svg",
  },
  {
    id: 3,
    FeedbackDescription:
      "I recently used TraviCabs for my trip, and it was a fantastic experience! The booking process was seamless, the cab was clean and comfortable, and the driver was professional and friendly.",
    userName: "Paul Novana",
    Source: 'Étudiante YNOV Campus, Rennes',
    UserProfile: "/images/testimonial/testimonial3.svg",
  },
  {
    id: 4,
    FeedbackDescription:
      "Jaltup est mon compagnon de route tout au long de mon alternance. Super intuitif, des conseils personnalisés, et une gestion facilitée sur tous les points administratifs.",
    userName: "Claire Mazonnet",
    Source: 'Étudiante IAE, Grenoble',
    UserProfile: "/images/testimonial/testimonial4.svg",
  },
];


type TContactUs = {
  id: number;
  contactTypeIcon: string;
  contactValue: string;
  title: string;
}[];
const contactUsData: TContactUs = [
  {
    id: 1,
    contactTypeIcon: '/images/contactUs/mail.svg',
    contactValue: 'lorenna@gmail.com',
    title: 'mail'
  },
  {
    id: 2,
    contactTypeIcon: '/images/contactUs/phone.svg',
    contactValue: '+62 8221 1222 0001',
    title: 'phone'
  },
  {
    id: 3,
    contactTypeIcon: '/images/contactUs/clock.svg',
    contactValue: 'Everyday : 08.00-21.00',
    title: 'time'
  },
  {
    id: 4,
    contactTypeIcon: '/images/contactUs/locationMarker.svg',
    contactValue: 'Jl. Raya Cihaluan No.112 Tangerang Selatan, Indonesia 41222',
    title: 'location'
  }
]

type TSocialLinks = {
  id: number;
  socialTypeIcon: string;
  socialLinks: string;
  title: string;
}[];
const socialLinksData: TSocialLinks = [
  {
    id: 1,
    socialTypeIcon: '/images/contactUs/linkedIn.svg',
    socialLinks: 'https://www.linkedin.com/',
    title: 'LinkedIn',
  },
  {
    id: 2,
    socialTypeIcon: '/images/contactUs/twitter.svg',
    socialLinks: 'https://x.com/',
    title: 'Twitter',
  },
  {
    id: 3,
    socialTypeIcon: '/images/contactUs/facebook.svg',
    socialLinks: 'https://facebook.com/',
    title: 'Facebook',
  },
  {
    id: 4,
    socialTypeIcon: '/images/contactUs/instagram.svg',
    socialLinks: 'https://www.instagram.com/',
    title: 'Instagram',
  }]

export { ServicesData, TestimonialData, contactUsData, socialLinksData };
