import CardSkeleton from "@/components/skeletons/card";
import Hero from "@/components/hero";

const FeaturedLoadingPage = () => {
  return (
    <div className="space-y-4">
      <Hero
        title="Discover Your Ideal Campground Getaway."
        description="Explore the Beauty of Nature at Our Handpicked Campgrounds. Find
            your perfect outdoor escape. Start your adventure today!"
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

export default FeaturedLoadingPage;
