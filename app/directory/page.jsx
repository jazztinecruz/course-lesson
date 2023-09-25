import Hero from "@/components/hero";
import Link from "next/link";
import { BASE_URL } from "@/constants/url";

export const metadata = {
  title: "NuCamp | Directory",
};

const DirectoryPage = async () => {
  let campsites = [];
  try {
    const response = await fetch(`${BASE_URL}campsites`);
    campsites = await response.json();
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="space-y-4">
      <Hero>
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">
            Explore Our Campground Collection.
          </h1>
          <p className="text-lg font-semibold">
            Dive into a World of Outdoor Adventures. Browse our diverse
            selection of campgrounds, each with its unique charm and appeal.
            Find the perfect spot to connect with nature.
          </p>
        </div>
      </Hero>

      <ul className="grid lg:grid-cols-2 gap-4">
        {campsites?.map((campsite) => (
          <div
            key={campsite.id}
            className="relative border rounded p-8 flex flex-col gap-4 shadow group">
            <div className="bg-slate-100 rounded-full w-12 h-12"></div>
            <h2 className="text-xl font-bold">{campsite.name}</h2>
            <p className="text-gray-500">{campsite.description}</p>
            <Link
              href={`/directory/${campsite.id}`}
              className="text-sm text-gray-500 font-semibold hover:underline">
              Read More
            </Link>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-pink group-hover:w-full duration-500" />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DirectoryPage;
