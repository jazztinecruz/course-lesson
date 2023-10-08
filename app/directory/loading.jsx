import CardSkeleton from "@/components/skeletons/card";
import Hero from "@/components/hero";

const DirectoryLoadingPage = () => {
  return (
    <div className="space-y-4">
      <Hero
        title="Explore Our Campground Collection."
        description=" Dive into a World of Outdoor Adventures. Browse our diverse
            selection of campgrounds, each with its unique charm and appeal.
            Find the perfect spot to connect with nature."
      />

      <ul className="grid lg:grid-cols-2 gap-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </ul>
    </div>
  );
};

export default DirectoryLoadingPage;
