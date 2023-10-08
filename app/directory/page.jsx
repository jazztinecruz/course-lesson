import Hero from "@/components/hero";
import Card from "@/components/cards";
import dbData from "@/data/db.json";

export const metadata = {
  title: "NuCamp | Directory",
};

const DirectoryPage = () => {
  let campsites = [];

  try {
    campsites = dbData.campsites;
  } catch (error) {
    throw new Error("Fetch Data Failed from Directory Page.");
  }

  return (
    <div className="space-y-4">
      <Hero
        title="Explore Our Campground Collection."
        description=" Dive into a World of Outdoor Adventures. Browse our diverse
            selection of campgrounds, each with its unique charm and appeal.
            Find the perfect spot to connect with nature."
      />

      <ul className="grid lg:grid-cols-2 gap-4">
        {campsites?.map((campsite) => (
          <Card key={campsite.id} data={campsite} hasReadMore />
        ))}
      </ul>
    </div>
  );
};

export default DirectoryPage;
