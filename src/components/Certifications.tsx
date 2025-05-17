import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CertificationCard } from "./ui/CertificationCard";
import { SectionTitle } from "./ui/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    id: 1,
    title: "Python",
    issuer: "Hackerrank",
    date: "May 2025",
    link: "https://www.hackerrank.com/certificates/16feb96a03d5",
    image: "./assets/python.png",
  },
  {
    id: 2,
    title: "Frontend Learning",
    issuer: "Udemy",
    date: "May 2025",
    link: "https://www.udemy.com/certificate/UC-c547a575-5251-402c-94ea-2442b2251b26/",
    image: "/assets/udemy.jpg",
  },
  {
    id: 3,
    title: "SQL",
    issuer: "hackerank",
    date: "May 2025",
    link: "https://www.hackerrank.com/certificates/b43a030dd37f",
    image: "/assets/sql.png",
  },
];

export function Certifications() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Certifications</SectionTitle>

        {/* Navigation + Slider in a flex row */}
        <div className="flex justify-center items-center gap-4 mt-10">
          {/* Previous Button */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="bg-white dark:bg-gray-800 p-3 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>

          {/* Slider */}
          <div className="w-[320px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]">
            <Slider ref={sliderRef} {...settings}>
              {certifications.map((cert) => (
                <div key={cert.id} className="px-2">
                  <CertificationCard {...cert} />
                </div>
              ))}
            </Slider>
          </div>

          {/* Next Button */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="bg-white dark:bg-gray-800 p-3 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
}