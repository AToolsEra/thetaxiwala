import { Footer, Header, SectionContainer } from "@/components/layout";
import { ServicesCard } from "@/components/ourServices";
import { ChooseUsData, ServicesData, TestimonialData } from "./data";
import { TestimonialCard } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ChooseUsItem from "@/components/WhyChooseUs";
import { Montserrat, Manrope } from "next/font/google";

const manrope = Manrope();
const montserrat = Montserrat();
export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      <SectionContainer classnames="bg-black">
        <div className="flex gap-x-20  xs:flex-col lg:flex-row gap-y-7">
          <div className="flex flex-col space-y-9">
            <div className="flex flex-col">
              <h1
                className={`md:text-6xl text-5xl font-bold ${manrope.className} leading-tight md:leading-snug text-primary`}
              >
                Transparent.
                <br /> Safe. <br className="sm:hidden" />
                <span className="text-accent2">Reliable</span>
              </h1>
              <p
                className={`mt-2 sm:mt-4 text-base sm:text-lg text-primary ${montserrat.className}`}
              >
                We at, thetaxiwala.com offers you the best in class taxi service
                in the most competitive price. So have a hassle-free booking
                with us in the most affordable rates.
              </p>
            </div>
            <a href="/book-now">
              <Button variant={"accent2"}>Book Now</Button>
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
            "We present many guarantees and advantages when you rent a car with us for your trip. Here are some of the advantages that you will get.",
        }}
        classnames="bg-secondary"
      >
        <div className="flex justify-center gap-4 flex-wrap">
          {ChooseUsData.map((chooseUs) => (
            <ChooseUsItem key={chooseUs.id} {...chooseUs} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer
        introduction={{
          title: "Let’s see what people say about us",
          subtitle:
            "Hear from our past customers how their experience have been when they made the choice to choose us.",
        }}
      >
        <div className="flex flex-col justify-center sm:mt-6">
          <div className="flex flex-wrap gap-5 justify-center">
            {TestimonialData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <a href="">
              <Button variant={"black"}>Show More</Button>
            </a>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer classnames="bg-secondary min-h-[620px] justify-center">
        <div className="flex flex-col items-center justify-center gap-y-8 rounded-lg bg-accent1 min-h-[350px]">
          <h2 className={`text-6xl text-primary ${manrope.className}`}>
            Book your ride today
          </h2>
          <Button className={`${montserrat.className}`} variant={"black"}>
            Book Now
          </Button>
        </div>
      </SectionContainer>
      <Footer />
    </div>
  );
}
