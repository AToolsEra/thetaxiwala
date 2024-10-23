import {
  Footer,
  Header,
  HeroSection,
  SectionContainer,
} from "@/components/layout";
import { ServicesCard } from "@/components/ourServices";
import { ServicesData } from "./data";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <HeroSection />
      <SectionContainer
        options={{
          title: "Our Services",
          subtitle:
            "We offer a wide range of services related to renting a car for all your travel needs.",
        }}
      >
        <div className="flex justify-center">
          <div className="flex gap-4">
            {ServicesData.map((service) => (
              <ServicesCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </SectionContainer>
      <SectionContainer
        options={{
          title: "Why Choose Us",
          subtitle:
            "We offer a wide range of services related to renting a car for all your travel needs.",
          background: "bg-[#F5F6F9]",
        }}
      />
      <Footer />
    </div>
  );
}
