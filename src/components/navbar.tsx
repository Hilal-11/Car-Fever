import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { SiPrimefaces } from "react-icons/si";
import { RiGithubFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import {motion} from 'motion/react'
import { useNavigate } from "react-router-dom";
import Signup from "@/auth/Signup";
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
      className="absolute top-3 lg:top-6 w-full flex justify-between items-center bg-neutral-100 dark:bg-neutral-950 rounded-full py-3 lg:py-4 px-2 lg:px-10 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] z-30">

        <span className="inline-block absolute inset-x-0  opacity-100 transition-opacity duration-300 bottom-0 h-px w-full mx-auto bg-gradient-to-r from-transparent via-slate-500 to-transparent"></span>

        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            {/* <Logo /> */}
            <p className="flex gap-2 items-center justify-center lg:text-xl Inter-bold text-[16px] "><span className="text-2xl lg:text-3xl"><SiPrimefaces /></span>Primedeck</p>
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
        className="hidden sm:flex basis-1/5 sm:basis-full items-center"
        justify="end"
      >
        <button className="space-x-2 cursor-pointer text-[16px] Inter-medium text-neutral-500"><Signup /></button>

        <NavbarItem className="hidden sm:flex gap-4">
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

      <NavbarMenu className="absolute inset-0 z-30 py-22">
        <div className="mx-4 mt-2 flex flex-col gap-2 Inter-medium text-[16px]">
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
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <div className="flex justify-end ">
            <button className="my-6 space-x-2 cursor-pointer text-[20px] Inter-medium relative -top-14"><Signup /></button>
        </div> 
      </div> <br />
      </NavbarMenu>
    </HeroUINavbar>
  );
};
