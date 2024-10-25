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
    Source: "Étudiante INSEEC, Lyon",
    UserProfile: "/images/testimonial/testimonial1.svg",
  },
  {
    id: 2,
    FeedbackDescription:
      "I recently used TraviCabs for my trip, and it was a fantastic experience! The booking process was seamless, the cab was clean and comfortable, and the driver was professional and friendly.",
    userName: "Vincent Farre",
    Source: "Étudiant CFA CODIS, Paris",
    UserProfile: "/images/testimonial/testimonial2.svg",
  },
  {
    id: 3,
    FeedbackDescription:
      "I recently used TraviCabs for my trip, and it was a fantastic experience! The booking process was seamless, the cab was clean and comfortable, and the driver was professional and friendly.",
    userName: "Paul Novana",
    Source: "Étudiante YNOV Campus, Rennes",
    UserProfile: "/images/testimonial/testimonial3.svg",
  },
  {
    id: 4,
    FeedbackDescription:
      "Jaltup est mon compagnon de route tout au long de mon alternance. Super intuitif, des conseils personnalisés, et une gestion facilitée sur tous les points administratifs.",
    userName: "Claire Mazonnet",
    Source: "Étudiante IAE, Grenoble",
    UserProfile: "/images/testimonial/testimonial4.svg",
  },
];

type TChooseUs = {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
}[];

const ChooseUsData: TChooseUs = [
  {
    id: 1,
    icon: "images/whyChooseUs/easy-rent.svg",
    title: "Easy Rent",
    subtitle:
      "Rent a car at our rental with an easy and fast process without disturbing your productivity",
  },
  {
    id: 2,
    icon: "images/whyChooseUs/premium-quality.svg",
    title: "Premium Quality",
    subtitle:
      "Our cars are always  clean to provide a more comfortable driving experience",
  },
  {
    id: 3,
    icon: "images/whyChooseUs/professional-agent.svg",
    title: "Professional Agent",
    subtitle:
      "You can ask your travel companion to escort and guide your journey.",
  },
  {
    id: 4,
    icon: "images/whyChooseUs/car-safety.svg",
    title: "Car Safety",
    subtitle:
      "We guarantee the safety of the engine on the car always running well with regular checks.",
  },
];

export { ServicesData, TestimonialData, ChooseUsData };
