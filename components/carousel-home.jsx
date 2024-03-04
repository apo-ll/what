'use client'

import React, { useRef, useState } from 'react';

import Link from "next/link";
import Image from "next/image";
import { Trending } from "@/config/DiscoverPage";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const HomeCarousel = () => {


  return (
    <div className="container ">

<h1 className="text-2xl text">Trending</h1>
        <Trend/>

    </div>
  );
};

export default HomeCarousel;

async function Trend() {
  const data = await Trending();
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper " slidesPerView={5} spaceBetween={10} >
      
      {data.results.map((trending) => (
        <SwiperSlide className="w-auto lg:p-6 grow-0 shrink-0 ">
        <Link
          href={`/Details/${trending.media_type}/${trending.id}/`}
          className=" items-center"
        >
          <div
            id={trending.id}
            className="flex flex-col items-center gap-3"
          >
            <Suspense fallback={<Skeleton/>}>
            <Image
              alt={trending.title}
              unoptimized
              loading="lazy"
              width={250}
              
              height={150}
              src={`https://image.tmdb.org/t/p/original${trending.poster_path}`}
              className="rounded-lg hover:outline hover:drop-shadow-3xl hover:transition-all hover:ease-in-out duration-300 hover:outline-white hover:outline-offset-0"
            />
            </Suspense>
            <h1 className="text-balance w-2/3 text-center">
              {trending.name || trending.title}
            </h1>
          </div>
        </Link>
        </SwiperSlide>
      ))}
      
      </Swiper>
  );
}
