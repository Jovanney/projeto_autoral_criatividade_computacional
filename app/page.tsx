import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div className="h-screen w-full bg-slate-800 dark:bg-secondary relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500  lg:from-white lg:to-gray-700 dark:from-neutral-200 dark:to-neutral-600  text-center font-sans font-bold">
          Welcome to the CinLogos AI
        </h1>
        <p className="dark:text-neutral-400 text-gray-300 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          CinLogos AI is a platform that allows you to create logos for your
          company or brand in a simple and fast way. Just enter the name of your
          company or brand and we will generate a logo for you.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
