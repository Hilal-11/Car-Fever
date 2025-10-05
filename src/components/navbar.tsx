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
import { IoCarSportSharp } from "react-icons/io5";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
export const Navbar = () => {
  // const navigate = useNavigate()
  return (
    <HeroUINavbar position="sticky" className=" max-w-full h-auto flex mx-auto items-center w-full bg-white dark:bg-neutral-950 z-50 ">
      
      <NavbarBrand className="">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            {/* <Logo /> */}
            <p className="flex gap-2 items-center justify-center lg:text-lg Inter-bold text-[16px] "><span className="text-4xl"><IoCarSportSharp /></span>Car Fever</p>
          </Link>
        </NavbarBrand>
        <div className="px-10 hidden lg:flex gap-6 justify-start ml-2 Inter-medium text-[15px] ">
          {siteConfig.navItems.map((item) => (
            <NavbarItem className="" key={item.href}>
              <Link
                className="text-neutral-700 dark:text-neutral-200 text-[16px] font-sans font-medium  "
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
        

        <NavbarItem className="hidden sm:flex gap-4">
          <Link isExternal href={"#"} title="insta">
            <FaInstagram size={22} className="text-default-500" />
          </Link>
          <Link isExternal href={"#"} title="x">
            <RiTwitterXFill size={22} className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:hidden basis-1 pl-4 pr-3  h-7" justify="end">
        <NavbarMenuToggle />
        <ThemeSwitch />
      </NavbarContent>


      <NavbarMenu className="">
        <div className="mx-4 mt-6 flex flex-col gap-2 Inter-medium text-[16px]">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>

              <Link
                href={item.href}
                size="lg"
                className="text-neutral-900 dark:text-white"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
      </div> <br />
      </NavbarMenu>

    </HeroUINavbar>    
    
  );
};
