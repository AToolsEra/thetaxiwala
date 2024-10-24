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

export { ServicesData };
