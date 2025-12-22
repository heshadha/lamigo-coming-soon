import Image from "next/image";

export default function Home() {
  return (
    // Removed bg-white so the CSS paper color shows through
    <main className="flex min-h-[100dvh] flex-col justify-center p-6 font-sans antialiased select-none overflow-hidden relative">
      
      {/* Container */}
      <div className="mx-auto w-full max-w-[1400px] leading-[0.72] tracking-tighter">
        
        {/* Line 1 */}
        <div className="text-left line-float delay-1">
          {/* Changed text-black to the custom ink color text-[#1c1c1e] */}
          <h1 className="text-[15vw] font-black uppercase text-[#1c1c1e] leading-none">
            LamiGo
          </h1>
        </div>

        {/* Line 2 */}
        <div className="text-right md:pr-20 py-0.5 md:py-0 line-float delay-2">
          <h1 className="text-[15vw] font-black uppercase text-[#1c1c1e] leading-none">
            Coming
          </h1>
        </div>

        {/* Line 3 */}
        <div className="pl-[10vw] line-float delay-3">
          <h1 className="text-[15vw] font-black uppercase text-[#1c1c1e] leading-none">
            Soon
          </h1>
        </div>

        {/* Footer - Updated border color to match text */}
        <div className="mt-12 flex justify-between border-t border-[#1c1c1e] pt-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#1c1c1e]">
          <span>Est. 2025</span>
          <span>Logistics & Connectivity</span>
          <span>Sri Lanka</span>
        </div>
      </div>
    </main>
  );
}