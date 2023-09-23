"use client"

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation"

export default function Testimonials() {
  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',}}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        pagination={{ clickable: true }}
      >
        
    <button className="swiper-button-next"></button>
    <button className="swiper-button-prev"></button>
        <SwiperSlide>
          <section className="relative isolate overflow-hidden px-6 py-20 sm:py-32 lg:px-8 ">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 dark:text-gray-200 sm:text-2xl sm:leading-9">
                  <p>
                    "As a lead designer, I appreciate the intuitive interface
                    and collaborative features that allow our team to bring our
                    creative vision to life seamlessly. It has simplified
                    project tracking, improved communication, and significantly
                    increased our efficiency. I can't imagine managing sign
                    projects without it."
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <Image
                    className="mx-auto h-20 w-20 rounded-full"
                    src="/company1.png"
                    alt="company1"
                    height={256}
                    width={256}
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">
                      Sarah Rodriguez
                    </div>
                    <svg
                      viewBox="0 0 2 2"
                      width="3"
                      height="3"
                      aria-hidden="true"
                      className="fill-gray-900"
                    >
                      <circle cx="1" cy="1" r="1" />
                    </svg>
                    <div className="text-gray-700">
                      Lead Designer @ CreativeSigns Inc.
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="relative isolate overflow-hidden px-6 py-20 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                  <p>
                    "I needed a tool that could handle the intricacies of sign
                    fabrication projects, from planning to execution. This app
                    has exceeded our expectations. It's an invaluable asset for
                    resource allocation, task management, and project
                    scheduling. Our team is more organized and productive than
                    ever."
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <Image
                    className="mx-auto h-20 w-20 rounded-full"
                    src="/company2.png"
                    alt="company2"
                    height={256}
                    width={256}
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">
                      John Mitchell
                    </div>
                    <svg
                      viewBox="0 0 2 2"
                      width="3"
                      height="3"
                      aria-hidden="true"
                      className="fill-gray-900"
                    >
                      <circle cx="1" cy="1" r="1" />
                    </svg>
                    <div className="text-gray-700">
                      Operations Manager @ Precision Signs & Graphics
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="relative isolate overflow-hidden px-6 py-20 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                  <p>
                    "It keeps everyone on the same page, tracks progress in
                    real-time, and ensures that our deadlines are met
                    consistently. It's an indispensable tool in our day-to-day
                    operations."
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <Image
                    className="mx-auto h-20 w-20 rounded-full"
                    src="/company3.png"
                    alt="company3"
                    height={256}
                    width={256}
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">
                      Emily Turner
                    </div>
                    <svg
                      viewBox="0 0 2 2"
                      width="3"
                      height="3"
                      aria-hidden="true"
                      className="fill-gray-900"
                    >
                      <circle cx="1" cy="1" r="1" />
                    </svg>
                    <div className="text-gray-700">
                      Project Coordinator @ StreetSide Advertising
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
