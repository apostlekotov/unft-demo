import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UNFTLogoImage } from "@/assets/img";
import { Links } from "@/components/Links";
import { links } from "@/data/links";
import { useToggle } from "@/hooks/useToggle";

export const Header: React.FC = () => {
  const [open, toggle, setOpen] = useToggle();
  const [small, setSmall] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  useEffect(() => {
    const handleScroll = () => setSmall(window.pageYOffset > 50);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`opacity-100 fixed w-full top-0 left-0 right-0 transition-[background-color,backdrop-filter,height,padding] ease-in-out delay-200 z-10 
      ${open ? "h-full" : "h-[100px] md:h-[164px] lg:h-[176px]"} 
      ${small && !open ? "h-[84px] md:h-[100px] lg:h-[112px]" : ""} 
      ${
        small || open
          ? "opacity-100 backdrop-blur-lg bg-black/70"
          : "bg-black/0"
      }`}
    >
      <div
        className={`flex items-center w-full 2xl:max-w-screen-2xl mx-auto justify-between transition-[padding] ease-in-out delay-200 
        ${small ? "px-4 xl:px-8 py-6 md:py-8" : "px-8 xl:px-20 py-8 md:py-16"}`}
      >
        <div>
          <Link href='/'>
            <a className='block w-[109px] lg:w-[145px] h-9 lg:h-12'>
              <Image src={UNFTLogoImage} alt='unft logo' priority />
            </a>
          </Link>
        </div>

        <div
          className={`block md:hidden ${open ? "open" : ""}`}
          id='toggler'
          onClick={toggle}
        ></div>

        <nav
          className={`flex flex-col space-y-[2.875rem] text-[#EDEDED] md:text-[#8A8A8A] font-medium text-2xl leading-6 md:leading-8 fixed px-12 md:px-0 w-full md:w-auto top-32 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2 md:space-y-0 md:flex md:flex-row md:text-base md:opacity-100 md:space-x-4 lg:space-x-9 md:pointer-events-auto md:absolute transition ease-out delay-200 z-10 ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Link href='/#about'>
            <a className='hover:text-[#F8D47A] whitespace-nowrap transition ease-in-out delay-200'>
              About
            </a>
          </Link>
          <Link href='/#roadmap'>
            <a className='hover:text-[#F8D47A] whitespace-nowrap transition ease-in-out delay-200'>
              Roadmap
            </a>
          </Link>
          <Link href='/#collection'>
            <a className='hover:text-[#F8D47A] whitespace-nowrap transition ease-in-out delay-200'>
              Our Collection
            </a>
          </Link>
          <Link href='/#showcase'>
            <a className='hover:text-[#F8D47A] whitespace-nowrap transition ease-in-out delay-200'>
              Showcase
            </a>
          </Link>
          <Link href='/#team'>
            <a className='hover:text-[#F8D47A] whitespace-nowrap transition ease-in-out delay-200'>
              Team
            </a>
          </Link>
        </nav>

        <div
          className={`flex items-center space-x-4 lg:space-x-6 fixed bottom-8 left-1/2 -translate-x-1/2 md:relative md:bottom-0 md:left-auto md:-translate-x-0 md:opacity-100 md:pointer-events-auto transition ease-out delay-200 ${
            open
              ? "opacity-60 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Links links={links} />
        </div>
      </div>
    </header>
  );
};
