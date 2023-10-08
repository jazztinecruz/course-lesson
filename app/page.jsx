import Card from "@/components/cards";
import Hero from "@/components/hero";
import { BASE_URL } from "@/constants/url";
export const dynamic = "force-dynamic";

const serverUrls = [
  `${BASE_URL}campsites`,
  `${BASE_URL}partners`,
  `${BASE_URL}promotions`,
];

const HomePage = async () => {
  //create a function for fetching each url
  const fetchUrl = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      throw new Error("Fetch Data Failed from Home Page.");
    }
  };

  //create a variable "featured" that will store all the featured from different urls
  let featured = [];

  //use the fetchUrl to fetch every url and filter the featured items
  try {
    const campsites = await fetchUrl(serverUrls[0]);
    const partners = await fetchUrl(serverUrls[1]);
    const promotions = await fetchUrl(serverUrls[2]);

    featured = [
      ...campsites.filter((campsite) => campsite.featured),
      ...partners.filter((partner) => partner.featured),
      ...promotions.filter((promotion) => promotion.featured),
    ];
  } catch (error) {
    throw new Error("Fetch Data Failed from Home Page.");
  }

  return (
    <div className="space-y-4">
      <Hero
        title="Discover Your Ideal Campground Getaway."
        description="Explore the Beauty of Nature at Our Handpicked Campgrounds. Find
            your perfect outdoor escape. Start your adventure today!"
      />

      <ul className="grid lg:grid-cols-2 gap-4">
        {featured?.map((featured) => (
          <Card key={featured.name} data={featured} />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
