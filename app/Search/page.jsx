"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Oval } from "react-loader-spinner";
import fallback from "@/public/placeholder.jpg";
import { Icons } from "@/components/Icons";
import SearchPage from "@/config/SearchPage";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

export const runtime = 'experimental-edge';

export default function Search() {
  /* using useState */

  const [searchTerm, setSearchTerm] = useState("");
  const token = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  return (
    <>
      <main className="container px-3 ">
        <div className="relative mb-10">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Icons.search className="fill-azure-radiance-700" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a movie, tv show, person..."
            className="bg-azure-radiance-100 border-2 w-full placeholder-black pl-16 rounded-[40px] h-[65px] border-azure-radiance-400 text-black lg:text-[22px] md:text-lg text-sm font-normal outline-none  focus:bg-azure-radiance-200  focus:border-transparent focus:ring-offset-0 focus:ring-offset-transparent"
          />
        </div>

        <Suspense
          fallback={
            <div className="flex items-center justify-center h-[600px]">
              <Oval color="#144056" height={100} width={100} />
            </div>
          }
        >
          <SearchResults searchTerm={searchTerm} />
        </Suspense>
      </main>
    </>
  );
}

async function SearchResults({ searchTerm }) {
  const data = await SearchPage({ searchTerm });

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3">
      {data?.results &&
        data?.results.map((result) => (
          <div key={result.id} className=" text-center gap-[8px]">
            <Link href={`/Details/${result.media_type}/${result.id}/`}>
              <div className="p-2 flex flex-col items-center">
                <Suspense fallback={<Skeleton />}>
                  <Image
                    src={
                      result.poster_path
                        ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
                        : fallback
                    }
                    alt={result.name}
                    unoptimized
                    width={250}
                    height={150}
                    className="rounded-lg hover:outline hover:drop-shadow-[0px_10px_20px_rgba(0,0,0,0.25)] transition-all ease-in-out duration-300 hover:outline-white hover:outline-offset-0 hover:rounded-lg"
                  />
                </Suspense>
                <h1 className="mt-3 w-1/2">{result.name || result.title}</h1>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}
