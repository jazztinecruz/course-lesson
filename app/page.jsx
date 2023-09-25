import Hero from "@/components/hero";
import { BASE_URL } from "@/constants/url";

const serverUrls = [
  `${BASE_URL}campsites`,
  `${BASE_URL}partners`,
  `${BASE_URL}promotions`,
];

const HomePage = async () => {
  const fetchAndParse = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  let featured = [];

  try {
    const campsites = await fetchAndParse(serverUrls[0]);
    const partners = await fetchAndParse(serverUrls[1]);
    const promotions = await fetchAndParse(serverUrls[2]);

    featured = [
      ...campsites.filter((campsite) => campsite.featured),
      ...partners.filter((partner) => partner.featured),
      ...promotions.filter((promotion) => promotion.featured),
    ];
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="space-y-4">
      <Hero>
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">
            Discover Your Ideal Campground Getaway.
          </h1>
          <p className="text-lg font-semibold">
            Explore the Beauty of Nature at Our Handpicked Campgrounds. Find
            your perfect outdoor escape. Start your adventure today!
          </p>
        </div>
      </Hero>

      <ul className="grid lg:grid-cols-2 gap-4">
        {featured?.map((featured) => (
          <div
            key={featured.name}
            className="relative border rounded p-8 flex flex-col gap-4 shadow group">
            <div className="bg-slate-100 rounded-full w-12 h-12"></div>
            <h2 className="text-xl font-bold">{featured.name}</h2>
            <p className="text-gray-500">{featured.description}</p>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-pink group-hover:w-full duration-500" />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
