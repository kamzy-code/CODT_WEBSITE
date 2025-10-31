import Image from "next/image"

export function ComingSoon (){
    return (
        <>
        <div className="min-h-screen flex items-center justify-center bg-black font-sans">
        <div className="relative min-h-screen w-full flex items-center justify-center p-8">. 
          <Image
            src="/background.jpg"
            alt="Background"
            fill
            className="object-cover opacity-50 z-0"
            priority
          />
          <div className="absolute inset-0 gradient-background z-0"></div>

          <div className="z-10 flex flex-col items-center justify-center text-center text-white gap-2">
            <div className="flex items-center justify-center rounded-full bg-white mb-2 scale-80 md:scale-100">
              <Image
                src="/codt_logo.png"
                alt="Church Logo"
                width={300}
                height={300}
                className=""
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold">
              City of David Tabernacle Website
            </h1>
            <p className="text-lg md:text-xl opacity-90">Coming Soon...</p>
            <button className="btn-secondary hover:bg-white hover:border-0 w-50 h-12 text-white border-white hover:text-dark">learn more</button>
          </div>
        </div>
      </div>
        </>
    )
}