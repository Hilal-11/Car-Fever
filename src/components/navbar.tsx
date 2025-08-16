import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

import { RiGithubFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import {motion} from 'motion/react'
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <HeroUINavbar  position="sticky" className="h-0">
      <div className="relative w-full flex justify-center items-center">
      <motion.div
        initial={{
          opacity: 0,
          y: -100
        }}
        animate={{
          opacity: 1,
          y: 1,
        }}
        transition={{
          duration: 0.4,
          delay: 0.2,

        }}
      className="absolute top-3 lg:top-6 w-full flex justify-between items-center bg-neutral-100 dark:bg-neutral-950 rounded-full py-3 lg:py-4 px-2 lg:px-10 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">

        <span className="inline-block absolute inset-x-0  opacity-100 transition-opacity duration-300 bottom-0 h-px w-full mx-auto bg-gradient-to-r from-transparent via-slate-500 to-transparent"></span>

        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            {/* <Logo /> */}
            <p className="lg:text-xl Inter-bold text-[16px] ">Primedeck</p>
          </Link>
        </NavbarBrand>
        <div className="px-10 hidden lg:flex gap-6 justify-start ml-2 Inter-medium text-[15px] ">
          {siteConfig.navItems.map((item) => (
            <NavbarItem className="" key={item.href}>
              <Link
                className="text-neutral-500 text-[16px] Inter-medium  "
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
  

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-4">
          <button className="cursor-pointer text-[16px] Inter-medium text-neutral-500" onClick={() => { navigate('/auth/login')} }>Login</button>
          <Link isExternal href={siteConfig.links.github} title="Twitter">
            <RiGithubFill size={22} className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <RiTwitterXFill size={22} className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:hidden basis-1 pl-4 pr-3  h-7" justify="end">
        <NavbarMenuToggle />
        <ThemeSwitch />
      </NavbarContent>
      </motion.div>
    </div>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2 Inter-medium text-[16px] ">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
