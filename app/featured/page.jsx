import Card from "@/components/cards";
import Hero from "@/components/hero";
import dbData from "@/data/db.json";

export const metadata = {
  title: "NuCamp | Featured",
};

const FeaturedPage = () => {
  let featured = [];

  //fetch every url and store the filtered featured items
  try {
    const campsites = dbData.campsites;
    const partners = dbData.partners;
    const promotions = dbData.promotions;

    featured = [
      ...campsites.filter((campsite) => campsite.featured),
      ...partners.filter((partner) => partner.featured),
      ...promotions.filter((promotion) => promotion.featured),
    ];
  } catch (error) {
    throw new Error("Fetch Data Failed from Featured Page.");
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

export default FeaturedPage;
