import { Route, Routes , useLocation } from "react-router-dom";
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
import PageNotFound from "./pages/PageNotFound";
import Carlisting from "./components/Carlisting";
function App() {

  const location = useLocation();
  const hideFooterRoutes = ["/auth/profile"];
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);



  const isNotFound = location.pathname !== "/" && 
                     !["/features","/pricing","/blog","/about","/auth/profile"].includes(location.pathname);


  return (
    <>
    <Routes>
      <Route element={
        <>
          <IndexPage />   <br /> <br />        
          <Carlisting />
          <div className="relative">
            <ChooseUs />
          </div>
          <Reviews />
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
      <Route element={ <PageNotFound />} path="*"/>

    </Routes>
    { !isNotFound && shouldShowFooter && <Footer />}
    </>
  );
}

export default App;
