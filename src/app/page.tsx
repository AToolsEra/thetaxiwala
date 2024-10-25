import { Footer, Header, SectionContainer } from "@/components/layout";
import { ServicesCard } from "@/components/ourServices";
import { ServicesData, TestimonialData } from "./data";
import { TestimonialCard } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      <SectionContainer classnames="bg-black">
        <div className="flex gap-x-20  xs:flex-col lg:flex-row gap-y-7">
          <div className="flex flex-col space-y-9">
            <div className="flex flex-col">
              <h1 className="md:text-6xl text-5xl font-bold text-white">
                Transparent.
                <br /> Safe. <br className="sm:hidden" />
                <span className="text-[#FFBF08]">Reliable</span>
              </h1>
              <p className="mt-2 sm:mt-4 text-base sm:text-lg text-gray-300">
                We at, thetaxiwala.com offers you the best in class taxi service
                in the most competitive price. So have a hassle-free booking
                with us in the most affordable rates.
              </p>
            </div>
            <a href="/book-now">
              <Button className="rounded-full bg-[#FFBF08] text-black font-bold">
                Book Now
              </Button>
            </a>
          </div>
          <div className="flex w-full xs:max-h-[255px] lg:max-h-[366px]">
            <Image
              src="/images/hero/hero-illustration.svg"
              alt="Taxi"
              layout="responsive"
              height={366}
              width={568}
            />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer
        introduction={{
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
        introduction={{
          title: "Why Choose Us",
          subtitle:
            "We offer a wide range of services related to renting a car for all your travel needs.",
        }}
        classnames="bg-[#F5F6F9]"
      />
      <SectionContainer
        introduction={{
          title: "Let’s see what people say about us",
          subtitle:
            "Hear from our past customers how their experience have been when they made the choice to choose us.",
        }}
      >
        <div className="flex flex-col justify-center sm:mt-6">
          <div className="flex flex-wrap gap-5 justify-center">
            {
              TestimonialData.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))
            }
            
          </div>
          <div className="flex justify-center mt-16">

          <a href="">
              <Button className="mb-20 px-6 text-xs rounded-full bg-[#0F0F0F] text-white font-bold">
              Show More
              </Button>
            </a>
          </div>
        </div>
      </SectionContainer>
      <Footer />
    </div>
  );
}
