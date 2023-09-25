import Hero from "@/components/hero";
import Link from "next/link";

export const metadata = {
  title: "NuCamp | Directory",
};

const DirectoryPage = async () => {
  let campsites = [];
  try {
    const response = await fetch("http://localhost:3001/campsites");
    campsites = await response.json();
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="space-y-4">
      <Hero>
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold mb-4 flex flex-col">
            <span>Bootcamp Campsites</span>
            <span>Explore Your Options</span>
          </h1>
          <p className="font-semibold">
            Welcome to our bootcamp campsites page! Here, you can find a list of
            all available campsites for your coding bootcamp experience. Choose
            the one that suits you best and start your coding journey today.
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
