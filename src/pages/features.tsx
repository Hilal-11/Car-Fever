import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import FAQ from '../components/FAQ';

import Rotate from "@/components/Rotate";
export default function Features() {
  return (
    <DefaultLayout>
      <section className="py-10 px-6 md:py-10 lg:py-20">
        <div>
          <div className="space-y-0">
            <h1 className="Inter-bold text-3xl lg:text-7xl text-center">Powerful Features <span className="text-blue-500">you'll love us</span></h1>
            <p className="text-center Inter-medium text-[16px] lg:text-[17px] lg:py-0 py-2 lg:px-16">
              Discover a curated set of features designed to boost your productivity and streamline your workflow from seamless integrations to intuitive design, our platform empowers you to work smarter, not harder, real-time updates, and customizable tools tailored to your needs.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 my-10 lg:my-20">
              <div className="lg:col-span-2 h-[400px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-white rounded-2xl"></div>
              <div className=" h-[400px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-white rounded-2xl"></div>


              <div className=" h-[400px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-white rounded-2xl py-10  overflow-hidden">
                <div className="relative top-40 mask-b-from-20% to-50%">
                  <Rotate />
                </div>
              </div>


              <div className="lg:col-span-2 h-[400px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-white rounded-2xl"></div>
          </div>
        </div>


      </section>
    </DefaultLayout>
  );
}
