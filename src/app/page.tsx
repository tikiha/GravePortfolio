import Image from "next/image";
import vercelSvg from "../../public/next.svg";

export default function Home() {
  return (
    <main className="w-full h-full ">
      <div
        className="w-full aspect-[3/1] mb-10 mt-16 relative flex items-center justify-center 
      max-md:mt-12"
      >
        <Image
          src={vercelSvg}
          alt={"vercel image"}
          priority
          className="h-full w-full"
        />
        <h1 className="text-red-500 text-h1 text-bold absolute">
          gridレイアウトテンプレート
        </h1>
      </div>
      <div className="mx-auto xl:w-[1280px] w-full px-4 grid grid-cols-12 gap-x-8 gap-y-10 h-screen bg-red-100"></div>
    </main>
  );
}
