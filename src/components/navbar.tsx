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

export const Navbar = () => {
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
      className="absolute top-3 lg:top-6 w-full flex justify-between items-center bg-neutral-200 dark:bg-neutral-950 rounded-full py-3 lg:py-4 px-2 lg:px-10">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            {/* <Logo /> */}
            <p className="lg:text-xl inter-bold">PrimeDeck</p>
          </Link>
        </NavbarBrand>
        <div className="px-10 hidden lg:flex gap-6 justify-start ml-2 inter-medium">
          {siteConfig.navItems.map((item) => (
            <NavbarItem className="" key={item.href}>
              <Link
                className="text-neutral-500 text-[15px] roboto-regular"
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
          <Link isExternal href={siteConfig.links.twitter} title="Twitter">
            <RiGithubFill size={22} className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <RiTwitterXFill size={22} className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4 pr-3" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
      </motion.div>
    </div>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
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
