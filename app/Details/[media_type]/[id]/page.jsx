// app/Details/[...slug]/page.jsx

"use client";

import { useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { YouTubeEmbed } from '@next/third-parties/google'
import { fetchTrailers, fetchDetails } from "@/config/DetailsPage";
import { Suspense } from "react";
import { Oval } from "react-loader-spinner";
import Skeleton from "react-loading-skeleton";

export default function Details() {
  /* Extract the media_type and the id */
  const { media_type, id } = useParams();

  
  async function info() {
    const data = await fetchDetails({media_type, id})
    return data
  }
  
  async function trailer() {
    const data = await fetchTrailers({media_type, id})
    return data
  }
  const [currentTrailer, setCurrentTrailer] = useState(null);
  const [currentTrailerIndex, setCurrentTrailerIndex] = useState(0);
  const videoRef = useRef(null);

  const handleThumbnailClick = (trailerKey, index) => {
    setCurrentTrailer(trailerKey);
    setCurrentTrailerIndex(index);
  };

  useEffect(() => {
    // Assuming trailers is your array of trailers
    if (trailer && trailer.results.length > 0) {
      setCurrentTrailer(trailer.results[0].key);
    }
  }, [trailer]);

  const filteredTrailers = trailer?.results.filter((trailer) =>
    trailer.name.includes("Trailer")
  );

  return (
    <div className="container flex flex-row gap-3 justify-between text-azure-radiance-50 p-2">
      <div className="gap-5 flex lg:flex-row flex-col container  ">
        <div className="flex flex-col justify-between gap-5 container">
          {currentTrailer && (
            <YouTubeEmbed
              videoid={filteredTrailers[currentTrailerIndex].key}
              height={700}
              params="controls=0"
            />
          )}

          <div className="flex flex-col gap-6 mb-10 w-full">
            <h1 className="text-3xl mt-5">
              {(info && info.title) || (info && info.name)}
            </h1>
            <p className="text-balance ">{info && info.overview}</p>
          </div>
        </div>

        {/* The Trailers Section */}
        <div className="lg:h-[700px] container w-auto lg:overflow-y-auto overflow-x-auto    px-3">
          <div className="flex lg:flex-col flex-row gap-4">
            {filteredTrailers &&
              filteredTrailers.map((trailer, index) => (
                <div
                  className={`p-3 flex flex-col  rounded-xl`}
                  key={trailer.key}
                >
                  <Image
                    src={`https://img.youtube.com/vi/${trailer.key}/0.jpg`}
                    width={448}
                    height={299}
                    alt={trailer.title}
                    onClick={() => handleThumbnailClick(trailer.key, index)}
                    className={`object-cover rounded-xl outline-2 outline-white hover:opacity-80 transition-all duration-300 ease-in-out `}
                    unoptimized
                  />
                  <h1 className="font-medium text-sm">
                    {trailer.name}
                  </h1>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

