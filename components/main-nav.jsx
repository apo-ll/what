'use client'

import Link from "next/link";
import Image from "next/image";
import { Icons } from "./Icons";

import { usePathname } from "next/navigation";

export const MainNav = ({navigation}) => {
  /* Using usePathname hook*/
  const pathname = usePathname();

  return (
    <div className="bg-azure-radiance-950 mb-10">
      <main className=" lg:block  md:hidden hidden text-white py-3 container">
        <div className="flex flex-row justify-between items-center">
          <div className=" flex flex-row gap-2">
          {navigation.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`${
                  pathname === item.link
                    ? "text-white   hover:transition transition hover:duration-300 hover:ease-in-out rounded-full"
                    : "text-white hover:text-white/80 hover:transition transition hover:duration-300 hover:ease-in-out"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link href='/'><h1 className="font-medium text-[20px]">Cinema-One</h1></Link>
          <Link href='/Search'><Icons.search className='fill-white'/></Link>
        </div>
      </main>
    </div>
  );
};
/* 
      
                 */