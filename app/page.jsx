import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-8 my-10">
        <h1 className="text-center font-bold text-4xl lg:text-5xl ">
          Experience the best
          <br />
          <span className="text-pink">Campground</span> with us
        </h1>

        <div className="flex items-center gap-4">
          <Link href="/featured">
            <button className="border rounded px-4 py-2 bg-pink text-white  hover:text-white hover:scale-105 transition-all duration-300">
              Discover More
            </button>
          </Link>
          <Link href="/contact">
            <button className="border rounded px-4 py-2 border-pink text-pink font-medium hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full h-[400px] relative lg:hidden">
        <Image
          src="/images/mobile-cover.png"
          alt="Background Cover"
          fill
          objectFit="cover"
        />
      </div>

      <div className="w-full h-[600px] relative hidden lg:block">
        <Image
          src="/images/cover.png"
          alt="Background Cover"
          fill
          objectFit="cover"
          objectPosition="left"
        />
      </div>
    </div>
  );
};

export default HomePage;
