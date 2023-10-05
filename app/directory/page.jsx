import Hero from "@/components/hero";
import { BASE_URL } from "@/constants/url";
import Card from "@/components/cards";

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
