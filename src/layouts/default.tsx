import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col"
      style={{
          backgroundImage: 'radial-gradient(circle at 0.5px 0.5px , rgba(90,110,114,0.7) 1px , transparent 0.5px)',
          backgroundSize: "10px 10px",
          backgroundRepeat : "repeat"
      }}
    >
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16 ">
        {children}
      </main>
      
        
    </div>
  );
}
