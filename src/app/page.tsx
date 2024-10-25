import {
  Footer,
  Header,
  HeroSection,
  SectionContainer,
} from "@/components/layout";
import { ServicesCard } from "@/components/ourServices";
import { ServicesData, TestimonialData } from "./data";
import { TestimonialCard } from "@/components/testimonials";
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
          <div className="flex sm:flex-row flex-col gap-5">
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
      <SectionContainer
        options={{
          title: "Let’s see what people say about us",
          subtitle:
            "Hear from our past customers how their experience have been when they made the choice to choose us.",
        }}
      >
        <div className="flex justify-center sm:mt-6">
          <div className="flex flex-wrap gap-5 justify-center">
            {
              TestimonialData.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))
            }
          </div>
        </div>
      </SectionContainer>
      <Footer />
    </div>
  );
}
