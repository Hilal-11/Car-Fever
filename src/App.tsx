import { Route, Routes , useLocation } from "react-router-dom";
import { motion } from 'motion/react'
import IndexPage from "@/pages/index";
import Features from "@/pages/features";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";

import { companiesData } from '@/config/companies'
import ChooseUs from "./components/ChooseUs";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import BookcallAndSignupBox from "./components/BookcallAndSignupBox";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
function App() {

  const location = useLocation();
  const hideFooterRoutes = ["/auth/profile"];
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <>
    <Routes>
      <Route element={
        <>
          <IndexPage />
          <div className="relative my-4 inset-0 w-full py-10 lg:py-20 h-auto justify-center ">
              <div className="container mx-auto">
                <div className="text-center space-y-4">
                  <h1 className="Inter-bold text-4xl lg:text-7xl px-10">Trusted by the Best Companies</h1>
                  <p className="Inter-medium text-[16px] lg:text-lg px-8 lg:w-1/2 mx-auto">From innovative startups to global enterprises, Prime Deck has become the preferred platform for leaders in technology, finance, healthcare, and beyond.</p>
                  <p className="text-center text-[17px] Inter-bold py-6">Over 50+ business trust us</p>
                </div>
              </div>
              <div className="flex gap-10 justify-center items-center flex-wrap px-4">
                {
                  companiesData.map((item) => (
                    <div className="flex items-end justify-center gap-1 Inter-medium" key={item.id}>
                      <span className="text-xl lg:text-3xl">{item.logo}</span>
                      <span className="text-[16px]">{item.name}</span>
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
          <FAQ />
          <BookcallAndSignupBox />
        </>
        } path="/">
    </Route>
      <Route element={<Features />} path="/features" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={ <Profile />} path="/auth/profile"/>

    </Routes>
    { shouldShowFooter && <Footer />}
    </>
  );
}

export default App;
