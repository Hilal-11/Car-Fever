import { Route, Routes } from "react-router-dom";
import { motion } from 'motion/react'
import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";

import { companiesData } from '@/config/companies'
import ChooseUs from "./components/ChooseUs";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
function App() {

  

  return (
    <>
    <Routes>
      <Route element={
        <>
          <IndexPage />
          <div className="relative my-4 inset-0 w-full py-10 lg:py-20 h-auto justify-center ">
              <div className="container mx-auto">
                <div className="text-center space-y-4">
                  <h1 className="inter-extrabold text-4xl lg:text-7xl px-10">Trusted by the Best Companies</h1>
                  <p className="inter-regular text-sm lg:text-lg px-8 lg:w-1/2 mx-auto">From innovative startups to global enterprises, Prime Deck has become the preferred platform for leaders in technology, finance, healthcare, and beyond.</p>
                  <p className="text-center text-[15px] inter-bold py-6">Over 50+ business trust us</p>
                </div>
              </div>
              <div className="flex gap-10 justify-center items-center flex-wrap">
                {
                  companiesData.map((item) => (
                    <div className="flex items-end justify-center gap-1 inter-medium" key={item.id}>
                      <span className="text-xl lg:text-3xl">{item.logo}</span>
                      <span className="text-sm">{item.name}</span>
                    </div>
                  ))
                }
              </div>
          </div>

          
          <div className="relative">
            <ChooseUs />
          </div>
          <Reviews />
          <Pricing />
        </>
        } path="/">
    </Route>
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
    </>
  );
}

export default App;
