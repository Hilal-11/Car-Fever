import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col w-full">
      <Navbar />
      <main className="w-[100%] lg:w-[90%] mx-auto px-0 flex-grow pt-16 ">
        {children}
      </main>
      
        
    </div>
  );
}
