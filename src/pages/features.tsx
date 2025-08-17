import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import FAQ from '../components/FAQ';
import DottedMap from 'dotted-map';
import Rotate from "@/components/Rotate";
export default function Features() {

  const theme = localStorage.getItem('heroui-theme')
  const map = new DottedMap({
  
  height: 40,
  width: 100,
});

// Add some dots (example: add a dot for India)
  map.addPin({ lat: 20.5937, lng: 78.9629 });

// Get SVG string
  const svg = map.getSVG({
    radius: 0.2,
    color: theme === 'dark' ? '#404040' : '#d1d5dc',
    shape: 'circle',
  });

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
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-3 gap-8 my-10 lg:my-20">
              <div className="relative lg:col-span-2 lg:h-[400px] h-auto shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-white dark:bg-neutral-950 rounded-2xl">
                  <div className="absolute inset-0 z-0">
                    <div dangerouslySetInnerHTML={{ __html: svg }} />
                    
                  </div>
                  <div className="px-5 pt-[8rem] lg:py-[15rem] pb-4 z-40">
                    <h1 className="lg:text-4xl text-2xl Inter-bold ">Connect with people all over the world</h1>
                    <p className="text-[16px] Inter-medium py-1 lg:w-2/3">Our servers are available all over the world except Asia, Australia, Europe, North America, South America and Africa.</p>
                  </div>
              </div>



              <div className=" lg:h-[400px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-white dark:bg-neutral-950 rounded-2xl">
                <div>
                  <img className="object-cover rounded-t-2xl w-full h-[200px]" src="https://res.cloudinary.com/dou5rypdf/image/upload/v1754229471/IMG_20241128_164820_1_mljcsx.jpg" alt="" />
                </div>
                <div className="py-4 px-4">
                   <h1 className="lg:text-2xl text-2xl Inter-bold ">Seamless User Experience</h1>
                    <p className="text-[15px] Inter-medium py-1">Deliver a smooth and intuitive design that ensures your visitors can navigate with ease, keeping them engaged from the very first click.</p>
                </div>
              </div>


              <div className="lg:h-[400px] h-[360px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-white dark:bg-neutral-950 rounded-2xl overflow-hidden">
                <div className="py-4 px-4">
                   <h1 className="lg:text-2xl text-2xl Inter-bold ">Modern & Clean Design</h1>
                    <p className="text-[16px] Inter-medium py-1">A minimal yet striking design style that enhances your brand image and communicates professionalism without clutter.</p>
                </div>
                <div className="relative top-0 mask-b-from-20% to-50%">
                  <Rotate />
                </div>
              </div>


              <div className="lg:col-span-2 h-auto shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-white dark:bg-neutral-950 rounded-2xl">

                <div className="grid lg:grid-cols-2  grid-cols-1 justify-between gap-2">
                    <div className=""><img className="lg:h-[400px] rounded-t-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl" src="https://res.cloudinary.com/dou5rypdf/image/upload/v1754305606/Screenshot_2025-08-03_230628_wtc5r1.png" alt="" /></div>
                    <div className="py-4 px-4">
                      <h1 className="lg:text-2xl text-2xl Inter-bold ">Modern & Clean Design</h1>
                      <p className="text-[16px] Inter-medium py-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime beatae assumenda est veniam repellendus animi aperiam illo natus aut, eius explicabo eveniet ipsam repudiandae. Quas accusamus at eius quibusdam labore.</p>

                      <div className="flex justify-evenly mt-4 items-end lg:relative lg:top-20">
                        <button className="px-8 bg-zinc-100 dark:bg-neutral-900 dark:text-white lg:px-10 py-2 lg:py-3 rounded-2xl Inter-medium shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">Get Start</button>

                        <button className="px-8 bg-neutral-950 text-white dark:bg-white dark:text-black lg:px-10 py-2 lg:py-3 rounded-2xl Inter-medium shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">Talk to us</button>
                      </div>
                    </div>
                    
                </div>
              </div>
          </div>
        </div>

      </section>
      <FAQ />
    </DefaultLayout>
  );
}
