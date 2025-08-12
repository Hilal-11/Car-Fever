import React from "react";
import { ReactNode } from "react";
import { FaGoogle } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { PiOpenAiLogoLight } from "react-icons/pi";
import { SiTcs } from "react-icons/si";

export type CompaniesConfig = typeof companiesData;
export interface Company {
  id: string;
  logo: ReactNode;
  name: string;
}
export const companiesData: Company[] = [
    {
      id: "1",
      logo: <SiTcs />,
      name: "Tcs",
    },
    {
      id: "2",
      logo: <FaGoogle/>,
      name: "Google",
    },
    {
      id: "3",
      logo: <SiNetflix/>,
      name: "Netflex",
    },
    {
      id: "4",
      logo: <FaAmazon/>,
      name: "Amazom",
    },
    {
      id: "5",
      logo: <PiOpenAiLogoLight/>,
      name: "Open AI",
    },
  ]